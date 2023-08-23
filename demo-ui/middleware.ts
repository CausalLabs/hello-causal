import { parse } from "cookie";
import { v4 as uuidv4 } from "uuid";
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest): NextResponse | void {
  const cookies = parse(req.headers.get("cookie") || "");

  if (!cookies.deviceId) {
    const deviceId = uuidv4();

    const response = NextResponse.redirect(req.nextUrl);
    response.cookies.set("deviceId", deviceId, {
      path: "/",
      httpOnly: false,
      maxAge: 60 * 60 * 24 * 365,
    });
    return response;
  }

  return NextResponse.next();
}
