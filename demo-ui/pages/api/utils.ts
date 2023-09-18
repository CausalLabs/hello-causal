export function getIServerUrl(): string {
  return process.env.CAUSAL_ISERVER ?? "http://localhost:3004/iserver/";
}

export function getCmdUrl(): string {
  return getIServerUrl() + "cmd";
}

export function getETLQueryURL(): string {
  return (
    (process.env.CAUSAL_QUERY_SERVER ?? "http://localhost:8081") + "/query"
  );
}

export default null;
