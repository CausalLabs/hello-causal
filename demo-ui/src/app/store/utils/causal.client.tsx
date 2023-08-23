// This is a FeatureDL automatically generated file. DO NOT DIRECTLY EDIT, your changes will not persist.
// TSClient
"use client";

import {
  CausalOptions,
  ErrorTypes,
  Feature,
  FeatureNames,
  FeatureNamesNoArgs,
  Flags,
  FlagsType,
  Impression,
  ImpressionType,
  Query,
  QueryArgs,
  Session,
  SessionJSON,
  _ImpressionImpl,
  _RequestMetadata,
  _WireArgs,
  _argsMatch,
  _flagsFromImpression,
  _flushCount,
  _getCachedImpression,
  _isCausalRegistered,
  _log,
  _misc,
  _registerForceUpdateFn,
  _sendImpressionBeacon,
  _unRegisterForceUpdateFn,
  _updateImpressionIds,
  _updateSessionVariants,
  addSeconds,
  createQuery,
  sessionKeys,
  sortReplacer,
  uuidv4,
} from "./causal";

import { ReactNode } from "react";

export function ClientCacheProvider({
  sessionJSON,
  children,
}: {
  sessionJSON: SessionJSON;
  children: ReactNode;
}) {
  const session = useSessionJSON(sessionJSON);
  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
}

import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from "react";

/**
 * Creates a session from transferred [[SessionJSON]] originally created with [[Session.toJSON]]. This hook ensures react client hydration works correctly with SSR.
 * @param json
 * @returns
 */
export function useSessionJSON(json: SessionJSON): Session {
  // this hook doesn't need to trigger any updates
  // the hooks that return impressions will do the right thing if the cache changes
  const jsonRef = useRef(json);
  const sessionRef = useRef<Session | undefined>(undefined);

  if (json != jsonRef.current || sessionRef.current == undefined) {
    sessionRef.current = Session.fromJSON(json);
  }

  useEffect(() => {
    sessionRef.current?.setSsrTransferComplete();
  }, []);

  return sessionRef.current as Session;
}

/**
 * A React context to hold Causal options that you want to change from the defaults
 * This uses the standard [React context](https://reactjs.org/docs/context.html) provider pattern
 */
export const OptionContext = createContext<
  Pick<CausalOptions, "defaultPageType"> | undefined
>(undefined);

/**
 * A React context to hold a [[Session]]
 * This uses the standard [React context](https://reactjs.org/docs/context.html) provider pattern
 */
export const SessionContext = createContext<Session | undefined>(undefined);

/**
 * A React hook to get the current [[Session]] in the [[SessionContext]]
 * @returns [[Session]]
 */
export function useSession(): Session | undefined {
  const session = useContext(SessionContext);
  return session;
}

type ImpressionNone = {
  state: "none";
  impression: _ImpressionImpl;
};

type ImpressionCached = {
  state: "loadingCached" | "cached";
  newImpressionId: string;
  cachedImpression: _ImpressionImpl;
  impression: _ImpressionImpl;
  metadata: Map<string, _RequestMetadata>;
};

type ImpressionLoading = {
  state: "loading";
  impression: _ImpressionImpl;
};

type ImpressionDone = {
  state: "done";
  impression: _ImpressionImpl;
};

type ImpressionState =
  | ImpressionNone
  | ImpressionCached
  | ImpressionLoading
  | ImpressionDone;

function loadingImpression(session: Session): _ImpressionImpl {
  const impression = new _ImpressionImpl({
    impressionType: "loading",
    sessionKeys: sessionKeys(session._.args),
    wireArgs: {},
    wireOutputs: {},
  });
  return impression;
}

/**
 * React hook to get both the impression and the on/off flags associated with a feature
 */
export function useImpression<Q extends Query<FeatureNames>>(
  query: Q | undefined,
  impressionId?: string,
  session?: Session
): {
  impression: Q extends Query<infer T> ? Impression<T> : never;
  flags: FlagsType<Q> | undefined;
  loading: boolean;
  error?: ErrorTypes;
} {
  const _sessionContext = useSession();
  session = session ?? _sessionContext;
  if (session == undefined) {
    throw new Error(
      "No session conext (SessionProvider), and no session passed in"
    );
  }

  // _session is recognized as constant through, whereas TS doesn't
  // know session will be non-null inside nested functions
  const _session = session;

  // putting into a ref so hook always returns the same loading impression when loading
  const _loadingImpression = useRef(loadingImpression(session));

  let useLoadingImpressionForCacheRead =
    (useContext(OptionContext)?.defaultPageType ?? _misc.defaultPageType) ==
      "SSG" && !_misc.ssr;

  const wireArgs = query?._.wireArgs as _WireArgs;

  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const errorState = useRef<ErrorTypes>();
  const impressionState = useRef<ImpressionState>({
    state: "none",
    impression: _loadingImpression.current,
  });

  const firstTime = useRef(true);
  const requestFinishTS = useRef<Date>();
  const wireArgsJson = JSON.stringify(wireArgs ? wireArgs : undefined);
  const prevSession = useRef(_session);
  const prevWireArgsJson = useRef(wireArgsJson);
  const prevFlushCount = useRef(_flushCount);
  const prevImpressionId = useRef(impressionId);

  let hasChange = false;

  // re-request as frequently as the cache expires
  // or if cache is busted
  // or if the session args change
  // or if the query changes
  // or if the impression id changes
  let nextCycle: Date | undefined = undefined;
  const now = new Date();
  if (
    requestFinishTS.current != undefined &&
    _session._.cache.outputExpirySeconds
  ) {
    nextCycle = addSeconds(
      requestFinishTS.current,
      _session._.cache.outputExpirySeconds
    );
  }

  const sessionChanged = !_argsMatch(
    prevSession.current._.args,
    _session._.args
  );

  if (
    sessionChanged ||
    (nextCycle != undefined && nextCycle < now) ||
    prevWireArgsJson.current != wireArgsJson ||
    prevFlushCount.current != _flushCount ||
    prevImpressionId.current != impressionId
  ) {
    // not using useEffect / dependency array for this b/c want
    // this code to reset the state in the same render cycle,
    // the rest of the non effect code in the hook can further update it

    hasChange = true;

    // update impression state
    impressionState.current = {
      state: "none",
      impression: _loadingImpression.current,
    };

    // update prev's
    requestFinishTS.current = undefined;
    prevSession.current = _session;
    prevWireArgsJson.current = wireArgsJson;
    prevFlushCount.current = _flushCount;
    prevImpressionId.current = impressionId;
    _loadingImpression.current = loadingImpression(session);
  }

  // get cached values
  if (query != undefined && impressionState.current.state == "none") {
    const { cachedImpression, metadata } = _getCachedImpression(
      session,
      wireArgs
    );

    if (
      cachedImpression != undefined &&
      impressionState.current.state == "none"
    ) {
      hasChange = true;
      const newImpressionId = impressionId ?? uuidv4();

      if (session._.ssrTransfer) {
        // We did an SSR cache transfer
        // We need to take care and make sure that the server and client render identically,
        // otherwise we will get a hydration error from react
        // we do this by delaying the render of things that were not transferred for this render
        let allFromSSR = true;

        for (const [_wireName, _wireArgs] of Object.entries(wireArgs)) {
          let matched = false;
          for (const ssrKey of session._.ssrKeys) {
            if (
              _wireName == ssrKey.featureName &&
              JSON.stringify(_wireArgs, sortReplacer) == ssrKey.strArgs
            ) {
              matched = true;
              break;
            }
          }
          if (!matched) {
            allFromSSR = false;
            break;
          }
        }

        useLoadingImpressionForCacheRead = !allFromSSR;
      }

      _updateSessionVariants(
        _session,
        undefined,
        newImpressionId,
        cachedImpression
      );

      if (useLoadingImpressionForCacheRead) {
        impressionState.current = {
          state: "loadingCached",
          newImpressionId,
          impression: _loadingImpression.current,
          cachedImpression,
          metadata,
        };
      } else {
        impressionState.current = {
          state: "cached",
          newImpressionId,
          impression: _updateImpressionIds(
            cachedImpression,
            newImpressionId,
            wireArgs
          ),
          cachedImpression,
          metadata,
        };
      }
    }
  }

  // let QA refresh update this component
  useEffect(() => {
    if (_isCausalRegistered()) {
      _registerForceUpdateFn(forceUpdate);
      return () => {
        _unRegisterForceUpdateFn(forceUpdate);
      };
    }
    return undefined;
  }, []);

  // fetch results
  useEffect(() => {
    _log.debug(1, "useImpression fetch results effect");

    async function request() {
      if (query != undefined) {
        _log.debug(1, "useImpression fetch results effect: request()");
        _log.debug(1, "request");

        const { impression, error } = await _session.requestImpression(
          query,
          impressionId
        );
        requestFinishTS.current = new Date();
        impressionState.current = {
          state: "done",
          impression: impression as unknown as _ImpressionImpl,
        };
        errorState.current = error;
        forceUpdate();
      }
    }

    if (query != undefined && impressionState.current.state == "none") {
      impressionState.current = {
        state: "loading",
        impression: _loadingImpression.current,
      };
      request();
      forceUpdate();
    }
  });
  useEffect(() => {
    if (
      query != undefined &&
      impressionState.current.state == "loadingCached"
    ) {
      const newImpressionId = impressionState.current.newImpressionId;
      const cachedImpression = impressionState.current.cachedImpression;
      const metadata = impressionState.current.metadata;

      impressionState.current = {
        state: "cached",
        newImpressionId,
        impression: _updateImpressionIds(
          cachedImpression,
          newImpressionId,
          wireArgs
        ),
        cachedImpression,
        metadata,
      };
      forceUpdate();
    }
  });

  // send beacons for cached impressions
  useEffect(() => {
    _log.debug(1, "useImpression useEffect: cached");
    if (impressionState.current.state == "cached") {
      _sendImpressionBeacon(
        _session,
        impressionState.current.cachedImpression,
        impressionState.current.newImpressionId
      );
      impressionState.current = {
        state: "done",
        impression: impressionState.current.impression,
      };
    }
  });

  // return current values
  const loading =
    impressionState.current.state == "none" ||
    impressionState.current.state == "loading" ||
    impressionState.current.state == "loadingCached";

  _log.debug(3, "useImpression returning. loading", loading);

  if (hasChange && !firstTime.current) {
    forceUpdate();
  }

  firstTime.current = false;
  if (loading) session._.loadingImpressionsCount += 1;

  const flags = _flagsFromImpression(impressionState.current.impression);

  if (_misc.testLogs != undefined && loading)
    _misc.testLogs.push({ log: "loadingImpression", data: undefined });

  return {
    loading,
    impression: impressionState.current
      .impression as unknown as ImpressionType<Q>,
    flags: flags as FlagsType<Q>,
    error: errorState.current,
  };
}

/**
 Converts Feature<A|B|C> into Feature<A> | Feature<B> | Feature<C>
 */
type DistributeFeature<F> = F extends Feature<infer T>
  ? T extends unknown
    ? Feature<T>
    : never
  : never;

/**
 * React hook to get a single feature.
 *  As compared to [[useImpression]] this only retrieves a single feature.
 *  If the request is loading it will returned undefined.
 *  It does NOT return an error state, so you need to be happy with the control values on error.
 */
export function useFeature<T extends FeatureNamesNoArgs>(
  featureReq: T | undefined,
  impressionId?: string,
  session?: Session
): DistributeFeature<Feature<T>> | undefined | "OFF";

/**
 * React hook to get a single feature.
 *  As compared to [[useImpression]] this only retrieves a single feature.
 *  If the request is loading it will returned undefined.
 *  It does NOT return an error state, so you need to be happy with the control values on error.
 */
export function useFeature<T extends FeatureNames>(
  featureReq: Query<T> | undefined,
  impressionId?: string,
  session?: Session
): DistributeFeature<Feature<T>> | undefined | "OFF";

export function useFeature<T extends FeatureNames>(
  featureReq: T | Query<T> | undefined,
  impressionId?: string,
  session?: Session
): DistributeFeature<Feature<T>> | undefined | "OFF" {
  let featureName: T | undefined;
  let query: Query<T> | undefined;
  if (featureReq == undefined) {
    featureName = undefined;
    query = undefined;
  } else if (typeof featureReq == "string") {
    featureName = featureReq;
    const queryArgs: QueryArgs<T> = {} as QueryArgs<T>;
    queryArgs[featureName] = {};
    query = createQuery(queryArgs);
  } else {
    query = featureReq;
    const keys = [...Object.keys(query._.wireArgs ?? {})];
    featureName = keys[0] as T | undefined;
    if (keys.length == 0) _log.warn("no feature requested for useFeature");
    if (keys.length > 1) {
      _log.warn(
        `More than on feature requested from useFeature, using ${featureName}. (all = ${keys}) `
      );
    }
  }

  const { impression, flags } = useImpression(query, impressionId, session);

  if (flags?.[featureName as unknown as keyof Flags<T>] === false) return "OFF";

  const impressionImpl = impression as _ImpressionImpl;
  if (impression == undefined) return undefined;
  const feature = impression[featureName as unknown as keyof Impression<T>];
  if (feature == undefined) return undefined;

  const featureOutputs =
    impressionImpl._.json.wireOutputs[featureName as FeatureNames];

  if (featureOutputs == "OFF") {
    _log.warn("should have already returned OFF");
    return "OFF";
  }

  const actualImpresionId =
    featureOutputs == "UNKNOWN" ? undefined : featureOutputs?._impressionId;

  return {
    ...(feature as unknown as Omit<
      DistributeFeature<Feature<T>>,
      "impressionId" | "Impression"
    >),
    featureName,
    impressionId: actualImpresionId,
    impression,
  } as DistributeFeature<Feature<T>>;
}

//#endregion
///TSClient
