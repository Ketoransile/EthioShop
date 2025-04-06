// import mongoose from "mongoose";

// // Price Schema to handle the price object with value and currency
// const priceSchema = new mongoose.Schema({
//   value: { type: Number, required: true }, // Make value required
//   currency: { type: String, required: true }, // Make currency required
// });

// // Product Schema to handle the product data
// const productSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String, default: null }, // Optional field, can be null
//   brand: { type: String, required: true },
//   price: { type: priceSchema, default: null }, // Embedded price schema
//   listPrice: { type: priceSchema, default: null }, // Embedded listPrice schema
//   galleryThumbnails: { type: [String], required: true }, // Array of strings (image URLs)
//   highResolutionImages: { type: [String], required: true }, // Array of strings (image URLs)
//   thumbnailImage: { type: String, required: true }, // Single string (URL of thumbnail image)
//   stars: { type: Number, required: true }, // Number of stars (rating)
//   inStock: { type: Boolean, required: true }, // Availability status
// });

// // Create the Product model using the schema
// const Product =
//   mongoose.models.Product || mongoose.model("Product", productSchema);

// // Export the Product model
// export default Product;
// models/Product.ts
import mongoose, { Document, Schema, Model } from "mongoose";

// 1. Define the types
interface Price {
  value: number;
  currency: string;
}

interface IProduct extends Document {
  title: string;
  description?: string | null;
  brand: string;
  price: Price | null;
  listPrice: Price | null;
  galleryThumbnails: string[];
  highResolutionImages: string[];
  thumbnailImage: string;
  stars: number;
  inStock: boolean;
}

// 2. Define the schema
const priceSchema = new Schema<Price>({
  value: { type: Number, required: true },
  currency: { type: String, required: true },
});

const productSchema = new Schema<IProduct>({
  title: { type: String, required: true },
  description: { type: String, default: null },
  brand: { type: String, required: true },
  price: { type: priceSchema, default: null },
  listPrice: { type: priceSchema, default: null },
  galleryThumbnails: { type: [String], required: true },
  highResolutionImages: { type: [String], required: true },
  thumbnailImage: { type: String, required: true },
  stars: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

// 3. Create and export the model with correct type
const Product: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>("Product", productSchema);

export default Product;
