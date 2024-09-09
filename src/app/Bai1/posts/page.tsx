"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const router = useRouter();
  const [searchItem, setSearchItem] = useState("");
  const handleSubmit = () => {
    router.push(`/Bai1/posts?search=${encodeURIComponent(searchItem)}`);
  };

  return (
    <div>
      <input
        type="text"
        value={searchItem}
        onChange={(e: any) => setSearchItem(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        Tìm kiếm
      </button>
    </div>
  );
};

export default page;
