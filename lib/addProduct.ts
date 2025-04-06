import Product from "../models/Product.js";
import { productsFromAmazon } from "./AmazonDataSet.js";
import connectDB from "./dbNative.js";

async function insertProducts() {
  try {
    await connectDB();

    const count = await Product.countDocuments();
    if (count > 0) {
      console.log("Products already exist. Skipping insertion.");
      return;
    }

    const insertedProducts = await Product.insertMany(productsFromAmazon);
    console.log(`✅ Inserted ${insertedProducts.length} products successfully`);
  } catch (error) {
    console.error("❌ Error inserting products:", error);
  } finally {
    process.exit(0);
  }
}

insertProducts();
