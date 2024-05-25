import db from "@/lib/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const sellerData = await request.json();
    //check if the user already exists
    const alreadyExists = await db.user.findUnique({
      where: {
        id: sellerData.userId,
      },
    });
    if (!alreadyExists) {
      NextResponse.json(
        { data: null, Message: "No user found " },
        { status: 404 }
      );
    }
    //update the user verification
    const updatedUser = await db.user.update({
      where: {
        id: sellerData.userId,
      },
      data: {
        emailVerified: true,
      },
    });

    const newSeller = await db.sellerProfile.create({
      data: {
        code: sellerData.farmerCode,
        adress: sellerData.adress,
        contactPerson: sellerData.contactPerson,
        contactPhone: sellerData.contactPhone,
        email: sellerData.email,
        profileimageUrl: sellerData.profileImageUrl,
        name: sellerData.name,
        notes: sellerData.notes,
        phone: sellerData.phone,
        terms: sellerData.terms,
        isActive: sellerData.isActive,
        landSize: parseFloat(sellerData.landSize),
        products: sellerData.products,
        mainCrop: sellerData.mainCrop,
        userId: sellerData.userId,
      },
    });
    console.log(newSeller);
    return NextResponse.json(newSeller);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: "Failed creating new seller try again ",
      },
      { status: 500 }
    );
  }
};

export const GET = async (request) => {
  try {
    const farmerProfile = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        role: "FARMER",
      },
      include: {
        farmerProfile: true,
      },
    });
    return NextResponse.json(farmerProfile);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to get farmers.",
        error,
      },
      { status: 500 }
    );
  }
};
