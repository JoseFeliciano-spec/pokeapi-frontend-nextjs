"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Pagination from "@mui/material/Pagination";

export default function PaginationControlled({ totalPages }: any) {
  const [page, setPage] = useState(1);
  const router = useRouter();
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    router.push(`?pageNo=${value}`);
  };

  return (
    <div className="w-full h-full flex justify-center items-center my-12">
      <Pagination
        count={parseInt(totalPages)}
        page={page}
        onChange={handleChange}
      />
    </div>
  );
}
