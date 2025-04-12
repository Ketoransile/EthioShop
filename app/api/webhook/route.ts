import { stripe } from "@/lib/stripe";
import Order from "@/models/Order";
import connectDB from "@/lib/db"; // Ensure DB connection is managed globally
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const sig = req.headers.get("Stripe-Signature");
  const body = await req.text(); // Get the raw body

  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    // Verify the webhook signature
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (error) {
    console.error(`Webhook error: ${error.message}`);
    return NextResponse.json(
      { error: "Webhook verification failed" },
      { status: 400 }
    );
  }

  // Handle the checkout session completed event
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    // Get the orderId from metadata
    const orderId = session.metadata?.orderId;
    if (!orderId) {
      console.error("Order ID missing in metadata.");
      return NextResponse.json({ error: "Order ID missing" }, { status: 400 });
    }

    try {
      // Ensure DB connection is established
      await connectDB(); // This ensures the DB connection is available

      // Fetch the order from DB
      const order = await Order.findById(orderId);

      if (!order) {
        console.error(`Order not found: ${orderId}`);
        return NextResponse.json({ error: "Order not found" }, { status: 404 });
      }

      // Update the order payment status after successful payment
      order.paymentStatus = "paid"; // Update status to 'paid' when payment is successful
      order.stripeSessionId = session.id; // Store the Stripe session ID for future reference
      await order.save();

      console.log("Order updated:", order);

      return NextResponse.json({ message: "Webhook handled successfully" });
    } catch (dbError) {
      console.error("Error updating order in DB:", dbError);
      return NextResponse.json(
        { error: "Error updating order" },
        { status: 500 }
      );
    }
  }

  // Handle other event types as needed
  return NextResponse.json(
    { message: "Event type not handled" },
    { status: 200 }
  );
}
