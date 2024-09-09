"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const page = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  console.log(search);
  return <div>search :{search}</div>;
};

export default page;
// "use client";
// import { useRouter } from "next/navigation";
// import React from "react";

// const page = () => {
//   const router = useRouter();
//   const handleSearch = () => {
//     const newSearch = "new Search";

//     router.push(`/?search=${encodeURIComponent(newSearch)}`);
//   };
//   return (
//     <div>
//       <button onClick={handleSearch}>search</button>
//     </div>
//   );
// };

// export default page;
