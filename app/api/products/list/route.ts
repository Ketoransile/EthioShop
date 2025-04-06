import { auth } from "@/lib/auth";
import connectDB from "@/lib/db";
import Product from "@/models/Product";
import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const products = await Product.find({});
    if (!products) {
      return NextResponse.json({
        message: "No product found",
        data: null,
        status: 404,
      });
    }
    return NextResponse.json({
      message: "Products fetched successfully",
      data: products,
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "Internal error",
      data: null,
      status: 500,
    });
  }
}
