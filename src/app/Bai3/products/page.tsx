"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [categories, setCategories] = useState("");
  const handleSubmit = () => {
    router.push(
      `/Bai3/products?name=${encodeURIComponent(
        name
      )}&categories=    ${encodeURIComponent(categories)}`
    );
  };
  return (
    <div>
      <input
        type="text"
        placeholder="tên sản phẩm"
        value={name}
        onChange={(e: any) => setName(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="thể loại sản phẩm"
        value={categories}
        onChange={(e: any) => setCategories(e.target.value)}
      />
      <br />
      <br />
      <button type="submit" onClick={handleSubmit}>
        Tìm kiếm
      </button>
    </div>
  );
};

export default page;
