import React from "react";
import { Button } from "@/components/ui/button";
import { MdCloudUpload, MdOutlineVideocam, MdVideoFile  } from "react-icons/md";

import Link from "next/link";

function UploadPage() {
  return (
    <div className="grid justify-items-center">
      <div className="border-2 shadow-lg p-10 h-auto w-full grow  bg-white rounded-lg ">
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
        <div className="flex flex-row mt-5">
          <div className="basis-1/4 flex flex-row gap-2">
            <MdOutlineVideocam size={33} color="#4b5563" className="-mt-1"/>
            <div className="flex flex-col">
              <h3 className="text-md font-bold">Size and duration</h3>
              <div className="text-sm font-normal text-gray-600">
                <p>Maximum size: 200 MB, video</p>
                <p>duration: 30 minutes</p>
              </div>
            </div>
          </div>
          <div className="basis-1/4 flex flex-row gap-2">
            <MdVideoFile size={33} color="#4b5563" className="-mt-1"/>
            <div className="flex flex-col">
              <h3 className="text-md font-bold">Size and duration</h3>
              <div className="text-sm font-normal text-gray-600">
                <p>Maximum size: 200 MB, video</p>
                <p>duration: 30 minutes</p>
              </div>
            </div>
          </div>
          <div className="basis-1/4 flex flex-row gap-2">
            <MdOutlineVideocam size={33} color="#4b5563" className="-mt-1"/>
            <div className="flex flex-col">
              <h3 className="text-md font-bold">Size and duration</h3>
              <div className="text-sm font-normal text-gray-600">
                <p>Maximum size: 200 MB, video</p>
                <p>duration: 30 minutes</p>
              </div>
            </div>
          </div>
          <div className="basis-1/4 flex flex-row gap-2">
            <MdOutlineVideocam size={33} color="#4b5563" className="-mt-1"/>
            <div className="flex flex-col">
              <h3 className="text-md font-bold">Size and duration</h3>
              <div className="text-sm font-normal text-gray-600">
                <p>Maximum size: 200 MB, video</p>
                <p>duration: 30 minutes</p>
              </div>
            </div>
          </div>
       
        </div>
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
