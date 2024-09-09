"use client";
import React from "react";
import { NextPage } from "next";
import { usePathname } from "next/navigation";
const page: NextPage = () => {
  const pathname = usePathname();
  const type = pathname.split("/").slice(1);
  return <div>trang:{type.length > 0 ? type.join("/") : ""}</div>;
};

export default page;
