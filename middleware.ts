import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "./lib/auth";
import { getSessionCookie } from "better-auth/cookies";
export async function middleware(request: NextRequest) {
  const sessionToken = request.cookies.get("better-auth.session_token")?.value;

  console.log("Session token from cookie:", sessionToken);

  if (!sessionToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  // runtime: "nodejs",
  matcher: [
    "/profile",
    "/my-address",
    "/my-cancellations",
    "/my-orders",
    "/my-payment-option",
    "/cart",
    "/cart/checkout",
    "/wish-list",
    "/products",
    "/products/:productId",
  ],
};
