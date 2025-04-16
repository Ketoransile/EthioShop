import { auth } from "@/lib/auth";
import connectDB from "../../../../lib/db";
import User from "@/models/User";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    console.log("session from get user route iss: ", session);
    console.log("Session:", session);
    console.log("Looking for user ID:", session?.user?.id);

    const userId = session?.user?.id;
    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    const user = await User.findOne({ _id: userId }).lean();

    console.log("USer from get user api is", user);
    if (!user) {
      return NextResponse.json(
        {
          message: "User was not found in the database",
          data: null,
          status: 404,
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "User data fetched successfully",
      data: user,
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal server error", data: null },
      { status: 500 }
    );
  }
}
