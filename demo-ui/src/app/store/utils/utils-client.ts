import cookie from "react-cookies";
import { v4 as uuidv4 } from "uuid";

export function getOrMakeDeviceId(): string {
  let id;
  if (typeof window == "undefined") {
    console.log("window is undefined");
    id = "invalid-id-no-window";
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
