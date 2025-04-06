import { auth } from "@/lib/auth";
import connectDB from "@/lib/db";
import Address from "@/models/Address";
// import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const headers = request.headers;
    const userId = headers?.get("x-user-id");
    console.log("User ID from add-address route handler is:", userId);
    if (!userId) {
      return NextResponse.json({
        message: "Unauthorized requests",
        data: null,
        status: 401,
      });
    }
    await connectDB();
    const { address } = await request.json();
    const newAddress = await Address.create({
      ...address,
      userId,
    });
    return NextResponse.json({
      message: "Address successfully created",
      data: newAddress,
      status: 200,
    });
  } catch (error) {
    console.error("Internal Error while adding address: ", error);
    return NextResponse.json({
      message: "Internal server Error",
      data: null,
      status: 500,
    });
  }
}
