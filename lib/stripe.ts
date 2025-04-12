import Stripe from "stripe";
const secretKey = process.env.STRIPE_SECRET_KEY;
console.log("Stripe secret key", secretKey);
if (!process.env.STRIPE_SECRET_KEY) {
  console.error("Stripe key is not set");
}
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
