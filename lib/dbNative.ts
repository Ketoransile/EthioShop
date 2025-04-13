// import * as dotenv from "dotenv";
// dotenv.config({ path: "../.env" });
// import mongoose from "mongoose";

// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// async function connectDB() {
//   if (cached.conn) {
//     return cached.conn;
//   }
//   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//     };

//     cached.promise = mongoose
//       .connect(`${process.env.MONGODB_URL}`, opts)
//       .then((mongoose) => {
//         return mongoose.connection.getClient(); // Returns native MongoDB driver
//       });
//   }
//   cached.conn = await cached.promise;
//   console.log(cached.conn);
//   return cached.conn;
// }

// export default connectDB;

// import * as dotenv from "dotenv";
// import mongoose from "mongoose";
// dotenv.config({ path: "../.env" });

// const cached = (global as any).mongoose || { conn: null, promise: null };
// // dotenv.config();

// async function connectDB() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//     };

//     cached.promise = mongoose
//       .connect(process.env.MONGODB_URL as string, opts)
//       .then((mongoose) => {
//         console.log("Database connected successfully");
//         return mongoose.connection;
//       })
//       .catch((err) => {
//         console.error("MongoDB connection error:", err);
//         throw err;
//       });
//   }

//   try {
//     cached.conn = await cached.promise;
//   } catch (error) {
//     cached.promise = null;
//     throw error;
//   }

//   return cached.conn;
// }

// export default connectDB;
// import "dotenv/config";
// import mongoose from "mongoose";

// const cached = (global as any).mongoose || { conn: null, promise: null };
// // dotenv.config();

// async function connectDB() {
//   console.log("Attempting to connect to MongoDB...");

//   if (cached.conn) {
//     console.log("Using existing database connection");
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     console.log("Creating new database connection...");
//     const opts = {
//       bufferCommands: false,
//     };

//     cached.promise = mongoose
//       .connect(process.env.MONGODB_URL as string, opts)
//       .then((mongoose) => {
//         console.log("Database connected successfully");
//         return mongoose.connection;
//       })
//       .catch((err) => {
//         console.error("MongoDB connection error:", err);
//         throw err;
//       });
//   }

//   try {
//     console.log("Waiting for connection promise to resolve...");
//     cached.conn = await cached.promise;
//     console.log("Connection promise resolved successfully");
//   } catch (error) {
//     console.error("Connection promise failed:", error);
//     cached.promise = null;
//     throw error;
//   }

//   return cached.conn;
// }

// export { connectDB };
// import mongoose from "mongoose";

// const MONGODB_URL = process.env.MONGODB_URL;

// if (!MONGODB_URL) {
//   throw new Error("Please define the MONGODB_URL environment variable");
// }

// /**
//  * Cached connection for MongoDB.
//  */
// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// async function connectDB() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     console.log("Monogdb URI is: ", MONGODB_URL);
//     cached.promise = mongoose.connect(MONGODB_URL).then((mongoose) => {
//       return mongoose;
//     });
//   }
//   cached.conn = await cached.promise;
//   return cached.conn;
// }

// export default connectDB;
// import mongoose from "mongoose";
// import * as dotenv from "dotenv";
// dotenv.config({ path: "../.env" });

// const MONGODB_URL = process.env.MONGODB_URL;

// if (!MONGODB_URL) {
//   throw new Error("Please define the MONGODB_URL environment variable");
// }

// if (!global.mongoose) {
//   global.mongoose = { conn: null, promise: null };
// }

// let cached = global.mongoose;

// async function connectDB() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     try {
//       console.log("MongoDB URI is:", MONGODB_URL);
//       cached.promise = mongoose
//         .connect(MONGODB_URL)
//         .then((mongoose) => mongoose);
//     } catch (error) {
//       console.error("MongoDB connection error:", error);
//       throw error;
//     }
//   }

//   cached.conn = await cached.promise;
//   return cached.conn;
// }

// export default connectDB;
import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const globalAny = global;

let client: MongoClient | null = globalAny.mongoClient || null;

async function connectDBNative() {
  if (!client) {
    client = new MongoClient(process.env.MONGODB_URL as string, {
      serverSelectionTimeoutMS: 30000, // 30 seconds timeout
    });
    await client.connect();
    console.log("Connected to MongoDB (Native Driver)");
    globalAny.mongoClient = client; // Cache for hot-reloading in development
  }
  return client.db(); // ✅ Return the database instance
}

export default connectDBNative;
