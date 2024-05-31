import CommunityBlogs from "@/components/frontend/uicomponents/CommunityBlogs";
import { getData } from "@/lib/getData";
import React from "react";

const page = async () => {
  const blogs = await getData("blogs");
  return (
    <div>
      <CommunityBlogs
        blogs={blogs}
        isAllBlogs={true}
        title="Read All Our Blogs"
      />
    </div>
  );
};

export default page;
