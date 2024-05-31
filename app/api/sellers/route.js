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
        { data: null, Message: "User not found , register first " },
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
        code: sellerData.code,
        adress: sellerData.physicalAddress,
        contactPerson: sellerData.contactPerson,
        contactPhone: sellerData.contactPhone,
        profileimageUrl: sellerData.imageUrl,
        firstName: sellerData.firstName,
        lastName: sellerData.lastName,
        notes: sellerData.notes,
        phone: sellerData.phone,
        terms: sellerData.terms,
        isExperienced: sellerData.isExperienced,
        mainProduct: sellerData.mainProduct,
        products: sellerData.products,
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
    const sellerProfile = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        role: "SELLER",
      },
      include: {
        sellerProfile: true,
      },
    });
    return NextResponse.json(sellerProfile);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to get Sellers.",
        error,
      },
      { status: 500 }
    );
  }
};
