import React from "react";
import Link from "next/link";

const UploadButton = () => {
  return (
    <Link
      className="mb-2 flex justify-center h-16 items-end mt-2 bg-dopalearnblue p-4 md:h-16"
      href="/dashboard/uploadpage"
    >
      <div className="w-32 text-white md:w-60 text-2xl text-center">Upload</div>
    </Link>
  );
};

export default UploadButton;
