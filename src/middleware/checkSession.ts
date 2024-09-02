import { NextRequest, NextResponse } from "next/server";

export const checkSession = async (req: NextRequest) => {
  const token = req.cookies.get("sessionId");

  console.log("token", token);

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  const data = await response.json();
  console.log(data);

  if (!response.ok) {
    response.headers.set("x-auth-error", "true");
    return response;
  }

  return NextResponse.next();
};
