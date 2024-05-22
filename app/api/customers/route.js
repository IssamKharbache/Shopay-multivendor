import db from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    const customers = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        role: "USER",
      },
      include: {
        userProfile: true,
      },
    });
    return NextResponse.json(customers);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to get Users.",
        error,
      },
      { status: 500 }
    );
  }
};
