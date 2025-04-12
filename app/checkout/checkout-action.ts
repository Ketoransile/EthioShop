"use server";
// import { auth } from "@/lib/auth";
// import { stripe } from "@/lib/stripe";
// import { CartItem } from "@/store/cart-store";
// import { headers } from "next/headers";
// import { redirect } from "next/navigation";
// import { NextResponse } from "next/server";
// export const checkoutAction = async (formData: FormData) => {
//   const betterAuthSession = await auth.api.getSession({
//     headers: await headers(), // you need to pass the headers object.
//   });
//   const userId = betterAuthSession?.user?.id || null;
//   if (!userId) {
//     console.error("NO user id found, please login first");
//     return NextResponse.json({ Error: "Please login first" }, { status: 400 });
//   }

//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

//   const itemsJson = formData.get("items");
//   if (!itemsJson) throw new Error("No items in cart");

//   const items = JSON.parse(itemsJson.toString());
//   const fullName = formData.get("fullName")?.toString();
//   const email = formData.get("email")?.toString();
//   const address = formData.get("address")?.toString();
//   const apartment = formData.get("apartment")?.toString();
//   const city = formData.get("city")?.toString();
//   const phone = formData.get("phone")?.toString();

//   const line_items = items.map((item: CartItem) => ({
//     price_data: {
//       currency: "usd",
//       product_data: {
//         name: item.name,
//       },
//       unit_amount: Math.round(item.price * 100),
//     },
//     quantity: item.quantity || 1,
//   }));

//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ["card"],
//     line_items,
//     mode: "payment",
//     customer_email: email,
//     metadata: {
//       userId,
//       fullName,
//       email,
//       address,
//       apartment: apartment || "",
//       city,
//       phone,
//       products: JSON.stringify(
//         items.map((item: CartItem) => ({
//           productId: item.id,
//           name: item.name,
//           price: item.price,
//           quantity: item.quantity,
//         }))
//       ),
//     },
//     success_url: `${baseUrl}/success`,
//     cancel_url: `${baseUrl}/cart`,
//   });

//   if (!session.url) throw new Error("Failed to create checkout session");
//   redirect(session.url);
// };
import { auth } from "@/lib/auth";
import { stripe } from "@/lib/stripe";
import { CartItem } from "@/store/cart-store";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import Order from "@/models/Order"; // Import your Order model
import connectDB from "@/lib/db";

export const checkoutAction = async (formData: FormData) => {
  const betterAuthSession = await auth.api.getSession({
    headers: await headers(),
  });
  const userId = betterAuthSession?.user?.id || null;
  if (!userId) {
    console.error("NO user id found, please login first");
    return NextResponse.json({ Error: "Please login first" }, { status: 400 });
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const itemsJson = formData.get("items");
  if (!itemsJson) throw new Error("No items in cart");

  const items = JSON.parse(itemsJson.toString());
  console.log("Items from checkout-action.ts file is : ", items);
  const fullName = formData.get("fullName")?.toString();
  const email = formData.get("email")?.toString();
  const address = formData.get("address")?.toString();
  const apartment = formData.get("apartment")?.toString();
  const city = formData.get("city")?.toString();
  const phone = formData.get("phone")?.toString();

  // Calculate total amount
  const totalAmount = items.reduce((total: number, item: CartItem) => {
    return total + item.price * item.quantity;
  }, 0);

  // Save order data to the database
  const order = new Order({
    userId,
    fullName,
    email,
    address,
    apartment,
    city,
    phone,
    products: items.map((item: CartItem) => ({
      productId: item.id,
      imageUrl: item.imageUrl,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    })),
    totalAmount,
    paymentStatus: "unpaid",
  });
  await connectDB();
  const savedOrder = await order.save();
  const orderId = savedOrder._id;

  // Prepare line items for Stripe session
  const line_items = items.map((item: CartItem) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: item.name,
        images: [item.imageUrl], // Assuming item has imageUrl property
      },
      unit_amount: Math.round(item.price * 100),
    },
    quantity: item.quantity || 1,
  }));

  // Create Stripe checkout session
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items,
    mode: "payment",
    customer_email: email,
    metadata: {
      userId,
      orderId: orderId.toString(), // Store the orderId in metadata
    },
    // success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
    success_url: `${baseUrl}/success`,
    cancel_url: `${baseUrl}/cart`,
  });

  if (!session.url) throw new Error("Failed to create checkout session");
  redirect(session.url);
};
