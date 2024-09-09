"use client";
import React from "react";
import { NextPage } from "next";
import { usePathname } from "next/navigation";
const page: NextPage = () => {
  const pathname = usePathname();
  const blog = pathname.split("/").slice(1);
  return (
    <div>bạn đang xem đường dẫn: {blog.length > 0 ? blog.join("/") : ""}</div>
  );
};

export default page;
