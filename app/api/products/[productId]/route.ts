// import { auth } from "@/lib/auth";
import connectDB from "@/lib/db";
import Product from "@/models/Product";
// import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ productId: string }> }
) {
  const { productId } = await params;
  try {
    await connectDB();
    const product = await Product.findById(productId);
    if (!product) {
      return NextResponse.json({
        message: "Product not found",
        data: null,
        status: 404,
      });
    }
    return NextResponse.json({
      message: "Product found",
      data: product,
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json({
      message: "INternal Server error",
      data: null,
      status: 500,
    });
  }
}
