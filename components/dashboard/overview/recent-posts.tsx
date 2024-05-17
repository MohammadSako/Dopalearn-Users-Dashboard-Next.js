"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

function RecentPosts() {
  const [data, setData] = useState("");

  function NoData() {
    return (
      <div className="p-10 flex flex-col items-center text-center space-y-8">
        <p className="text-xl font-bold mt-5">No posts yet</p>
        <p className="text-sm text-dopalearngray">
          Your latest posted and scheduled videos will appear here
        </p>
        <Link href="/dashboard/uploadpage">
          <Button className="bg-dopalearnblue">Upload first video</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className=" h-96 p-4 rounded-lg shadow-lg bg-white">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between ">
          <div className="flex flex-row gap-4 ">
            <Link href="#">
              <p className="text-2xl font-bold">Recent Posts</p>
            </Link>
          </div>
        </div>
        {!data && <NoData />}
        {data && <div className="mt-4 bg-slate-200">Data</div>}
      </div>
    </div>
  );
}

export default RecentPosts;
