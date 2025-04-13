// models/Product.js
import mongoose from "mongoose";

// Price Schema
const priceSchema = new mongoose.Schema({
  value: { type: Number, required: true },
  currency: { type: String, required: true },
});

// Product Schema
const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: null },
  brand: { type: String, required: true },
  price: { type: priceSchema, default: null },
  listPrice: { type: priceSchema, default: null },
  galleryThumbnails: { type: [String], required: true },
  highResolutionImages: { type: [String], required: true },
  thumbnailImage: { type: String, required: true },
  category: { type: String, required: true },
  stars: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

// Create the model
const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

// Export the model
export default Product;
