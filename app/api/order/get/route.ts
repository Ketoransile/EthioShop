import { auth } from "@/lib/auth";
import connectDB from "@/lib/db";
import Order from "@/models/Order";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // const headersList = await headers();
    // const userId = headersList.get("x-userId");
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    console.log("session from route/ts: ", session);
    const userId = session?.user?.id;
    if (!userId)
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    await connectDB();
    const orders = await Order.find({ userId });
    if (!orders || orders.length === 0) {
      return NextResponse.json({
        message: "No orders found",
        data: null,
        status: 404,
      });
    }
    return NextResponse.json({
      message: "Orders are fetched successfully",
      data: orders,
      status: 200,
    });
  } catch (error) {
    console.error("Error while fetching orders", error);
    return NextResponse.json({
      message: "Error occurred while fetching orders",
      data: null,
      status: 500,
    });
  }
}
