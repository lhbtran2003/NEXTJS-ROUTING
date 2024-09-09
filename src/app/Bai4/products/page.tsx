"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [categories, setCategories] = useState("");
  const [details, setDetails] = useState("");
  const handleSubmit = () => {
    router.push(
      `/Bai4/products?name=${encodeURIComponent(
        name
      )}&categories=${encodeURIComponent(categories)}`
    );
  };

  return (
    <div>
      <h1>name: {name}</h1>
      <h1>categories: {categories}</h1>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e: any) => setName(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="categories"
        value={categories}
        onChange={(e: any) => setCategories(e.target.value)}
      />
      <br />
      <br />
      <h1>details: {name}</h1>
      <button type="submit" onClick={handleSubmit}>
        Tìm kiếm
      </button>
    </div>
  );
};

export default page;
