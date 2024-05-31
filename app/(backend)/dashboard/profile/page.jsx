import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import React from "react";

const page = async () => {
  const session = await getServerSession(authOptions);
  if (!session) return;
  const { user } = session;
  return (
    <div>
      <h2>Welcome {user?.name}</h2>
    </div>
  );
};

export default page;
