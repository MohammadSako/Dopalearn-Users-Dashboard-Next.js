"use client";

import { Input } from "@/components/ui/input";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PostsSearchFilter from "@/components/ui/posts-searchfilter";
import PostsList from "@/components/ui/posts-list";

function Posts() {
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
    <div className=" p-4 rounded-lg shadow-lg bg-white">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-row justify-between ">
          <p className="text-2xl font-bold">Manage your posts</p>
        </div>

        <PostsSearchFilter />
        <PostsList />

        {/* {!data && <NoData />} */}
      </div>
    </div>
  );
}

export default Posts;
