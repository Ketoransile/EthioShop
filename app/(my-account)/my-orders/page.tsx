"use client";

import OrderOverviewCard from "@/components/modular/order/OrderOverviewCard";
import { useEffect, useState } from "react";

// Fetch orders function
async function fetchOrders() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/order/get`, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const status = response.status;
      console.error(`Failed to fetch orders. Status: ${status}`);
      return {
        status,
        data: null,
        error: `Request failed with status ${status}`,
      };
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return {
      status: 500,
      data: null,
      error: error.message || "Unknown error",
    };
  }
}

// Orders Component
export default function MyOrders() {
  const [orders, setOrders] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      const orderData = await fetchOrders();

      if (
        orderData.status !== 200 ||
        !orderData.data ||
        orderData.data.length === 0
      ) {
        setError(orderData.error || "No orders found.");
        setLoading(false);
        return;
      }

      setOrders(orderData.data);
      setLoading(false);
    }

    fetchUserData();
  }, []);

  return (
    <div className="my-orders pt-20 w-full">
      <h1 className="text-2xl font-bold pb-4 ">
        My <span className="text-brandBg">Orders</span>
      </h1>
      {loading && <p>Loading orders...</p>} {/* Show loading state */}
      {error && <p style={{ color: "red" }}>{error}</p>}{" "}
      {/* Show error message */}
      {orders && !loading && !error ? (
        <div className="w-full flex flex-col gap-4  bg-gray-100 rounded-2xl min-h-screen p-10">
          {orders.map((order) => (
            <div key={order._id}>
              <OrderOverviewCard order={order} />
            </div>
          ))}
        </div>
      ) : (
        !loading && <p>No orders found.</p>
      )}
    </div>
  );
}
