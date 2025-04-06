import { Document } from "mongoose";

interface Price {
  value: number;
  currency: string;
}

export interface IProduct extends Document {
  _id: string;
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
