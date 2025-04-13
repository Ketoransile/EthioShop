import Product from "../models/Product.js";
import connectDB from "../lib/db.js";
import { productsDataSet } from "./productsDataSet.js";
async function insertProducts() {
  try {
    await connectDB();

    const count = await Product.countDocuments();
    if (count > 0) {
      console.log("Products already exist. Skipping insertion.");
      return;
    }

    const insertedProducts = await Product.insertMany(productsDataSet);
    console.log(`✅ Inserted ${insertedProducts.length} products successfully`);
  } catch (error) {
    console.error("❌ Error inserting products:", error);
  } finally {
    process.exit(0);
  }
}

insertProducts();
