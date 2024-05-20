"use client";

import { useState } from "react";
import PostsSearchFilter from "@/components/ui/posts-searchfilter";
import PostsList from "@/components/ui/posts-list";
import { Button } from "@/components/ui/button";

function Posts() {
  const [data, setData] = useState("");

  function NoData() {
    return (
      <div className="p-20 flex flex-col items-center text-center">
        <div>
          <p className="m-3 text-xl font-bold">No results found</p>
          <Button variant="ghost">Clear all</Button>
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
