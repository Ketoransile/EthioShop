// import mongoose, { Document, Model, Schema } from "mongoose";

// export interface IOrder extends Document {
//   fullName: string;
//   address: string;
//   aptFloor?: string | null;
//   city: string;
//   phone: string;
//   email: string;
//   paymentInfo: {
//     firstName: string;
//     lastName: string;
//     cardNumber: number;
//     expiryDate: string;
//     cvv: number;
//   };
// }

// const orderSchema = new Schema(
//   {
//     fullName: {
//       type: String,
//       required: true,
//     },
//     address: { type: String, required: true },
//     aptFloor: {
//       type: String,
//     },
//     city: { type: String, required: true },
//     phone: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     paymentInfo: {
//       firstName: { type: String, required: true },
//       lastName: { type: String, required: true },
//       cardNumber: { type: Number, required: true },
//       expiryDate: { type: String, required: true },
//       cvv: { type: Number, required: true },
//     },
//   },
//   { timestamps: true }
// );
// const Order: Model<IOrder> =
//   mongoose.models.order || mongoose.model<IOrder>("order", orderSchema);
// export default Order;
import mongoose, { Document, Model, Schema } from "mongoose";

interface IProductItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

export interface IOrder extends Document {
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
    fullName: { type: String, required: true },
    address: { type: String, required: true },
    apartment: { type: String },
    city: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },

    products: [
      {
        productId: { type: String, required: true },
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
