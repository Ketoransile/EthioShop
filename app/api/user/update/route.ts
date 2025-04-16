import { auth } from "@/lib/auth";
import connectDB from "@/lib/db";
import User from "@/models/User";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  console.log("Session from update user route is ", session);
  const userId = session?.user?.id;
  if (!userId) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  await connectDB();
  const user = await User.findById(userId);
  if (!user) {
    return NextResponse.json(
      {
        message: "User was not found in the database",
      },
      { status: 404 }
    );
  }
}
