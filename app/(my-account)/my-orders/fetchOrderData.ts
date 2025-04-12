import connectDB from "@/lib/db";
import Order from "@/models/Order";

export async function fetchOrderData(userId) {
  await connectDB();
  const orders = await Order.find({ userId });
  return orders?.length ? orders : null;
}
