import mongoose from "mongoose";

const connection: { isConnected?: number } = {};

async function connectDB() {
  if (connection.isConnected) {
    console.log("DB already connected.");
    return;
  }

  // console.log("MONGODB_URL from .env.local is ", process.env.MONGODB_URL);

  try {
    const db = await mongoose.connect(process.env.MONGODB_URL!);
    connection.isConnected = db.connections[0].readyState;
    console.log("DB connected successfully!");
  } catch (error) {
    console.error("Error connecting to DB:", error);
    // Optionally, you might want to throw the error again or handle it differently
    throw error;
  }
}

export default connectDB;
