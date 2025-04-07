import connectDB from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const headers = request.headers;
    const userId = headers?.get("x-user-id");
    console.log("User Id from create order route is ", userId);
    if (!userId) {
      return NextResponse.json({
        message: "Unauthorized",
        data: null,
        status: 401,
      });
    }
    await connectDB();
    // const;
  } catch (error) {
    console.error(error);
  }
}
