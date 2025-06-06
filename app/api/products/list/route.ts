import connectDB from "@/lib/db";
import Product from "@/models/Product";
import { NextRequest, NextResponse } from "next/server";

// Define types
type Filters = Record<string, unknown>;
type PriceFilter = Record<string, { $gte?: number; $lte?: number }>;
type Sort = Record<string, 1 | -1>;

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const filters: Filters = {};

    // Category filter
    const category = searchParams.get("category");
    if (category && category !== "Category" && category !== "") {
      filters.category = category;
    }

    const search = searchParams.get("search");
    if (search && search !== "") {
      filters.title = { $regex: search, $options: "i" };
    }

    const page = Number(searchParams.get("page")) || 1;
    const limit = searchParams.has("limit")
      ? Number(searchParams.get("limit"))
      : Infinity;

    const skip = (page - 1) * limit;

    // Price range filter
    const min = searchParams.get("min");
    const max = searchParams.get("max");

    if (min || max) {
      const priceFilter: PriceFilter = {};

      if (min && !isNaN(Number(min))) {
        priceFilter["price.value"] = { $gte: Number(min) };
      }

      if (max && !isNaN(Number(max))) {
        if (priceFilter["price.value"]) {
          priceFilter["price.value"].$lte = Number(max);
        } else {
          priceFilter["price.value"] = { $lte: Number(max) };
        }
      }

      if (Object.keys(priceFilter).length > 0) {
        Object.assign(filters, priceFilter);
      }
    }

    // Sorting
    let sort: Sort = {};
    const sortParam = searchParams.get("sort");
    switch (sortParam) {
      case "ascPrice":
        sort = { price: 1 };
        break;
      case "descPrice":
        sort = { price: -1 };
        break;
      case "ascLastUpdated":
        sort = { updatedAt: 1 };
        break;
      case "descLastUpdated":
        sort = { updatedAt: -1 };
        break;
    }

    console.log("filters in api route are: ", filters);

    const products = await Product.find(filters)
      .sort(sort)
      .skip(skip)
      .limit(limit === Infinity ? 0 : limit);
    const totalProducts = await Product.countDocuments(filters);
    const totalPages = Math.ceil(totalProducts / limit);

    if (!products || products.length === 0) {
      return NextResponse.json({
        message: "No products found",
        data: [],
        status: 404,
      });
    }

    return NextResponse.json({
      message: "Products fetched successfully",
      data: products,
      status: 200,
      pagination:
        limit !== Infinity
          ? {
              totalProducts,
              totalPages,
              currentPage: page,
              productsPerPage: limit,
              hasNextPage: page < totalPages,
              hasPreviousPage: page > 1,
            }
          : undefined,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "Internal server error",
      data: null,
      status: 500,
    });
  }
}
