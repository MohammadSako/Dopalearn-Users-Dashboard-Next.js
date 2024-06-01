"use client"

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const UploadButton = () => {
  const pathname = usePathname();
const link = "/dashboard/uploadpage"
  return (
    <Link
      href="/dashboard/uploadpage"
      className={clsx(
        "mb-2 flex justify-center h-16 items-end mt-2 bg-dopalearnblue p-4 md:h-16",
        {
          " text-dopalearnblue bg-blue-300": pathname === link,
        }
      )}
    >
      <div className="w-32 text-white md:w-60 text-2xl text-center">Upload</div>
    </Link>
  );
};

export default UploadButton;
