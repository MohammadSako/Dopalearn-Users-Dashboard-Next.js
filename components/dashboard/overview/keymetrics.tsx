"use client";

import Link from "next/link";
import { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";

function KeyMetrics() {
  const [data, setData] = useState("");

  function NoData() {
    return (
      <div className="p-20 flex flex-col items-center text-center">
        <div>
          <p className="m-3 text-xl font-bold">No insights available</p>
          <p className="text-sm text-dopalearngray">
            You haven't created any posts yet. Check back after you've uploaded
            your first public video.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className=" h-96 p-4 rounded-lg shadow-lg bg-white">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between ">
          <div className="flex flex-row gap-4 ">
            <Link href="/dashboard/analytics/keymetrics">
              <p className="text-2xl font-bold">Key metrics</p>
            </Link>
            <Link href="#">
              <p className="text-sm font-medium mt-2 text-dopalearngray">
                Last 7 days
              </p>
            </Link>
          </div>
          <Link href="#">
            <div className="flex flex-row gap-1">
              <p className="text-md font-medium text-dopalearngray">Show all</p>
              <div className="mt-1 text-dopalearngray">
                <MdArrowForwardIos size={16} />
              </div>
            </div>
          </Link>
        </div>
        {!data && <NoData />}
        {data && <div className="mt-4 bg-slate-200">Data</div>}
      </div>
    </div>
  );
}

export default KeyMetrics;
