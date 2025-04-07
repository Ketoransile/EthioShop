"use server";
import { stripe } from "@/lib/stripe";
import { CartItem } from "@/store/cart-store";
import { redirect } from "next/navigation";

export const checkoutAction = async (formData: FormData) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  console.log("formodata in checkoutaction", formData);
  // 1. Parse form data
  const itemsJson = formData.get("items");
  if (!itemsJson) throw new Error("No items in cart");

  const items = JSON.parse(itemsJson.toString());
  const name = formData.get("fullName")?.toString();
  const email = formData.get("email")?.toString();

  // 2. Validate and prepare line items
  const line_items = items.map((item: CartItem) => {
    if (!item.price || !item.name) {
      throw new Error("Invalid item data");
    }

    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          // Add more product data if needed
        },
        unit_amount: Math.round(item.price * 100), // Convert to cents
      },
      quantity: item.quantity || 1,
    };
  });

  // 3. Create Stripe checkout session
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items,
    mode: "payment",
    customer_email: email,
    metadata: {
      customer_name: name || "",
    },
    success_url: `${baseUrl}/success`,
    cancel_url: `${baseUrl}/cart`,
  });

  // 4. Redirect to Stripe checkout
  if (!session.url) throw new Error("Failed to create checkout session");
  redirect(session.url);
};
