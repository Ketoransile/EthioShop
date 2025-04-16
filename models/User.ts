// import mongoose from "mongoose";
// import { string } from "zod";

// export interface IUser = {
//   username:String,

// }
// const userSchema = new mongoose.Schema(
//   {
//     username: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       trim: true,
//       lowercase: true,
//     },
//     password: {
//       type: String,
//       required: true,
//       minlength: 8,
//     },
//     cartItems: {
//       type: {},
//       default: {},
//     },
//   },
//   { timestamps: true }
// );

// const User = mongoose.models.user || mongoose.model("user", userSchema);
// export default User;
import mongoose, { Document, Schema, Model } from "mongoose";

// 1. Define the IUser interface
export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  cartItems: Record<string, any>; // or a better type based on your structure
  createdAt: Date;
  updatedAt: Date;
}

// 2. Define the schema
const userSchema: Schema<IUser> = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    cartItems: {
      type: Object, // or [Schema.Types.Mixed] if it's an array of arbitrary items
      default: {},
    },
  },
  { timestamps: true }
);

// 3. Create the model
const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
