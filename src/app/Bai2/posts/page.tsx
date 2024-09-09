"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const router = useRouter();
  const [items, setItems] = useState("");
  const handleSubmit = () => {
    router.push(`/Bai2/posts?search=${encodeURIComponent(items)}`);
  };
  return (
    <div>
      <h1>search value: {items}</h1>
      <input
        type="text"
        value={items}
        onChange={(e: any) => setItems(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        tìm kiếm
      </button>
    </div>
  );
};

export default page;
