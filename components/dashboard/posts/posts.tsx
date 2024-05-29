"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import PostsSearchFilter from "./posts-searchfilter";
import PostsList from "./posts-list";

function Posts() {
  const [data, setData] = useState("");

  const posts = [
    {
      posts: "Turn screen time into learning time.",
      href: "/dashboard/posts",
      image: "/BrainBoosters.png",
      status: "May 1, 2024 6:29 PM",
      privacy: "Everyone",
      views: "5.0K",
      likes: "5",
      comments: "25",
      shared: "5",
      bookmark: "2",
      id:"id1"
    },
    {
      posts: "Teach toddlers math with Dopalearn",
      href: "/dashboard/posts",
      image: "/post.jpg",
      status: "Sep 20, 2023 3:05 PM",
      privacy: "Only me",
      views: "453",
      likes: "36",
      comments: "0",
      shared: "0",
      bookmark: "15",
      id:"id2"
    },
    {
      posts: "Turn screen time into learning time.",
      href: "/dashboard/posts",
      image: "/BrainBoosters.png",
      status: "May 1, 2024 6:29 PM",
      privacy: "Everyone",
      views: "5.0K",
      likes: "5",
      comments: "25",
      shared: "5",
      bookmark: "2",
      id:"id3"
    },
    {
      posts: "Teach toddlers math with Dopalearn",
      href: "/dashboard/posts",
      image: "/post.jpg",
      status: "Sep 20, 2023 3:05 PM",
      privacy: "Only me",
      views: "453",
      likes: "36",
      comments: "0",
      shared: "0",
      bookmark: "15",
      id:"id4"
    },
  ];

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
        <PostsList posts={posts} />

        {/* {!data && <NoData />} */}
      </div>
    </div>
  );
}

export default Posts;
