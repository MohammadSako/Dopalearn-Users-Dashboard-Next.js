import React from "react";
import { Button } from "@/components/ui/button";
import { MdCloudUpload } from "react-icons/md";
import Link from "next/link";
import UploadInfo from "../ui/upload-info";

function UploadPage() {
  return (
    <div className="grid justify-items-center">
      <div className="md:border-2 shadow-lg p-10 h-auto w-full grow  bg-white md:rounded-lg ">
        <div className="grid justify-items-center border-dashed border-2 border-gray-300 rounded-lg bg-gray-100 py-10">
          <div className="rounded-full bg-gray-100 p-3  ">
            <MdCloudUpload size={60} color="gray" />
          </div>

          <p className="text-xl font-bold">Select videos to upload</p>
          <p>Or drag and drop them here.</p>

          <Button type="submit" className="bg-dopalearnblue mt-5">
            Select Videos
          </Button>
        </div>
        <div className="md:flex md:flex-row gap-2 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4 ">
            <UploadInfo />
          </div>
        </div>
      </div>

      <p className="container text-xs text-gray-800 my-8 text-center max-w-2xl">
        By submitting your videos to Dopalearn, you acknowledge that you agree
        to Dopalearn's Terms of Service and Community Guidelines. Please be sure
        not to violate others' copyright or privacy rights.{" "}
        <span className="text-dopalearnblue">
          <Link href="/">Learn more</Link>
        </span>
      </p>
    </div>
  );
}

export default UploadPage;
