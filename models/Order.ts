import mongoose, { Document, Model, Schema } from "mongoose";

interface IProductItem {
  productId: string;
  imageUrl: string;
  name: string;
  price: number;
  quantity: number;
}

export interface IOrder extends Document {
  userId: string;
  fullName: string;
  address: string;
  apartment?: string | null;
  city: string;
  phone: string;
  email: string;
  products: IProductItem[];
  totalAmount: number;
  paymentStatus: string;
  stripeSessionId?: string;
}

const orderSchema = new Schema(
  {
    userId: { type: String, required: true, ref: "User" },
    fullName: { type: String, required: true },
    address: { type: String, required: true },
    apartment: { type: String },
    city: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },

    products: [
      {
        productId: { type: String, required: true },
        imageUrl: { type: String },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
      },
    ],

    totalAmount: { type: Number, required: true },
    paymentStatus: {
      type: String,
      required: true,
      enum: ["paid", "unpaid", "failed"],
    },
    stripeSessionId: { type: String }, // You can also use `paymentIntentId` depending on Stripe flow
  },
  { timestamps: true }
);

const Order: Model<IOrder> =
  mongoose.models.Order || mongoose.model<IOrder>("Order", orderSchema);

export default Order;
