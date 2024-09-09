"use client";
import { useRouter } from "next/navigation";
import React from "react";
import slugify from "slug";
const users = [
  {
    id: 1,
    name: "yu",
  },
  {
    id: 2,
    name: "shin",
  },
];
const page = () => {
  const router = useRouter();

  return (
    <div>
      Blog
      <br />
      {users.map((user) => {
        return (
          <button
            onClick={() => {
              router.push("/Bai9/" + slugify(user.name) + ".html");
            }}
          >
            {user.id}
          </button>
        );
      })}
    </div>
  );
};

export default page;
