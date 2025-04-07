import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("Stripe key is not set");
}
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
