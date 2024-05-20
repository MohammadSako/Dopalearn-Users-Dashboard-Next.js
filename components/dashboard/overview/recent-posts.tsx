"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";

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
          <p className="text-2xl font-bold">Recent Posts</p>
          <Link href="/dashboard/posts">
            <MdArrowForwardIos size={16} color="#808080" className="mt-2" />
          </Link>
        </div>
        {!data && <NoData />}
        {data && <div className="mt-4 bg-slate-200">Data</div>}
      </div>
    </div>
  );
}

export default RecentPosts;
