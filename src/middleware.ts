import { NextRequest, NextResponse } from "next/server";
import { checkSession } from "./middleware/checkSession";

export const middleware = (req: NextRequest) => {
  let checkSessionRes = checkSession(req);
  if (checkSessionRes) return checkSessionRes;

  return NextResponse.next();
};

export const config = {
  matcher: ["/profile/:path*"],
};
