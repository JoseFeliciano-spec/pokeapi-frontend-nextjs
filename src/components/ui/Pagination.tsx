"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import Pagination from "@mui/material/Pagination";

export default function PaginationControlled({ totalPages }: any) {
  const [page, setPage] = useState(1);

  const searchParams = useSearchParams();
  const pageNo = searchParams.get("pageNo");
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    router.push(`?pageNo=${value}`);
  };

  useEffect(() => {
    if (pageNo !== null && parseInt(pageNo) > 0) {
      setPage(parseInt(pageNo));
    }
  }, []);

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
