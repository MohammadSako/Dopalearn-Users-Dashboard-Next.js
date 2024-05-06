import React from "react";
import { Button } from "@/components/ui/button";
import { MdCloudUpload } from "react-icons/md";
import Link from "next/link";

function UploadPage() {
  return (
    <div className="grid justify-items-center  bg-white">
      <div className="grid justify-items-center rounded-lg border-2 shadow-lg p-10 h-auto w-full grow space-y-8">
        <h2 className="font-medium text-lg">Upload Your Video</h2>

        <div className="rounded-full bg-gray-100 p-3 ">
          <MdCloudUpload size={60} color="gray" />
        </div>

        <p>Drag and drop videos files to upload </p>

        <Button type="submit" className="bg-dopalearnblue">
          SELECT FILE
        </Button>
      </div>
      <p className="text-xs text-gray-800 my-8 text-center max-w-2xl">
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
