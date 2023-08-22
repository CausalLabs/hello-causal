import { cookies } from "next/dist/client/components/headers";
import { cache } from "react";
import { Session } from "./causal";

export function getDeviceId(): string {
  const cookie = cookies().get("deviceId");
  if (cookie == undefined) {
    console.error("cookie is undefined");
    return "invalid-id-no-cookie";
  }
  return cookie.value;
}

export function getSession() {
  return cache(() => {
    const deviceId = getDeviceId();
    const session = new Session({
      deviceId: deviceId,
      marketingChannel: "direct",
      userType: "New",
    });
    return session;
  })();
}
