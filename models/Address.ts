import mongoose, { Document, Schema } from "mongoose";
export interface IAddress extends Document {
  userId: string;
  fullName: string;
  phoneNumber: string;
  streetAddress: string;
  aprtmentFloor: string;
  city: string;
  email: string;
}
const addressSchema = new Schema<IAddress>({
  userId: { type: String, required: true },
  fullName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  streetAddress: { type: String, required: true },
  aprtmentFloor: { type: String, required: true },
  city: { type: String, required: true },
  email: { type: String, required: true },
});

const Address: mongoose.Model<IAddress> =
  mongoose.models.address || mongoose.model<IAddress>("address", addressSchema);
export default Address;
