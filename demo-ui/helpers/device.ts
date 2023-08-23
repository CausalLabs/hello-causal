import Cookies from "cookies";
import { IncomingMessage, ServerResponse } from "http";
import cookie from "react-cookies";
import { v4 as uuidv4 } from "uuid";

/**
 * Creates a cookie that lasts between browser visits. We are providing some sample functionality here.
 * In production code, you would replace this with whatever logic you currently use to persistently identify browsers.
 *
 * @param context the context of the current session.
 */
export function getOrMakeDeviceId(context?: {
  req?: IncomingMessage;
  res?: ServerResponse;
}): string {
  if (context?.req && context?.res) {
    const cookies = new Cookies(context.req, context.res);
    const deviceId = cookies.get("deviceId");
    if (deviceId !== undefined) {
      return deviceId;
    }

    const id = uuidv4();
    const date = new Date();
    date.setFullYear(2050);
    cookies.set("deviceId", id, { expires: date, httpOnly: false });
    return id;
  } else {
    let id;
    if (typeof window == "undefined") {
      id = "next-build";
    } else {
      const device = cookie.load("deviceId");
      if (device !== undefined) return device;

      id = uuidv4();
      const date = new Date();
      date.setFullYear(2050);
      cookie.save("deviceId", id, { expires: date });
    }
    return id;
  }
}
