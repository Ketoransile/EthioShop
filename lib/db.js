import * as dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    const uri = process.env.MONGODB_URL;
    if (!uri) throw new Error("MONGODB_URL not set in .env");
    cached.promise = mongoose
      .connect(`${process.env.MONGODB_URL}`, opts)
      .then((mongoose) => {
        console.log("DB connnected successfully");
        return mongoose;
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
export default connectDB;
