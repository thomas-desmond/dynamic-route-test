import { NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";

export async function GET(request: Request) {
  try {
    const products = [
      {
        id: 1,
        name: "Product 1",
        description: "Description for Product 1",
        price: 100,
        imageUrl: "https://via.placeholder.com/150",
        rating: 4,
        category: "Category 1",
      },
      {
        id: 2,
        name: "Product 2",
        description: "Description for Product 2",
        price: 200,
        imageUrl: "https://via.placeholder.com/150",
        rating: 3,
        category: "Category 2",
      },
      {
        id: 3,
        name: "Product 3",
        description: "Description for Product 3",
        price: 300,
        imageUrl: "https://via.placeholder.com/150",
        rating: 5,
        category: "Category 3",
      },
    ];
    return NextResponse.json(products, { status: 200 });
    
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json(
      { error: "Failed to fetch product details" },
      { status: 500 }
    );
  }
}
