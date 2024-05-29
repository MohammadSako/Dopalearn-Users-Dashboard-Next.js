"use client"

import Link from "next/link";
import { useState } from "react";
import { IoLanguageOutline } from "react-icons/io5";

function LatestComments() {
  const [data, setData] = useState("");

  function NoData() {
    return (
      <div className="p-20 flex flex-col items-center text-center">
          <IoLanguageOutline size={50} color="#808080" />
        <div>
          <p className="m-3 text-xl font-bold">No comments yet</p>
          <p className="text-sm text-dopalearngray">Your latest comments will appear here.</p>
        </div>
      </div>
    );
  }

  return (
    <div className=" h-96 p-4 rounded-lg shadow-lg bg-white">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between ">
          <div className="flex flex-row gap-4 ">
            <Link href="#">
              <p className="text-2xl font-bold">Latest comments</p>
            </Link>
          </div>
        </div>
        {!data && <NoData />}
        {data && <div className="mt-4 bg-slate-200">Data</div>}
      </div>
    </div>
  );
}

export default LatestComments;
