"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  BsChatDotsFill,
  BsHeartFill,
  BsFillPlayFill,
  BsReplyFill,
  BsBookmarkFill,
} from "react-icons/bs";
 
const ContentVideoPosts = () => {
  const [data, setData] = useState(true);
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
      id: "id1",
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
      id: "id2",
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
      id: "id3",
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
      id: "id4",
    },
  ];

  
  const video_posts =
    "Shows videos from the last 7 days, in order of newest to oldest.";


  function NoData() {
    return (
      <div className="p-20 flex flex-col items-center text-center">
        <div>
          <p className="m-3 text-xl font-bold">No posts yet</p>
          <p className="m-3 text-sm text-dopalearngray">
            Your posted vidoes will appear here
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {!data && <NoData />}
      {data && (
        <div>
          <div className="p-2 space-y-2 text-muted-foreground">
            <p className="text-xs">{video_posts}</p>
            <p>
              <span className="text-lg font-semibold">{posts.length}</span>{" "}
              Posts
            </p>
            <p className="text-sm text-muted-foreground">
              Last 7 days <span>{posts.length}</span> posts vs. May 15 - May 21{" "}
            </p>
          </div>
          {posts.map((post) => (
            <div className="p-6 my-4  md:shadow-lg shadow-md rounded-lg">
              <div className="flex flex-col md:flex-row md:justify-between">
                <div className="flex lg:flex-row flex-row gap-2 justify-between">
                  <div className="h-32 rounded-md p-1">
                    <Image
                      src={post.image}
                      width={80}
                      height={100}
                      alt="BrainBoosters"
                    />
                  </div>
                  <div className="flex flex-col md:space-y-0 space-y-4">
                    <div className="lg:text-lg font-semibold text-sm md:basis-2/3">
                      {post.posts}
                    </div>
                    <Link href="/dashboard/analytics">
                      <p className="font-semibold md:text-base text-sm text-dopalearnblue">
                        View Analytics
                      </p>
                    </Link>

                    <div className="flex flex-row lg:gap-4 gap-2">
                      <div className="flex flex-row">
                        <div className="">
                          <BsFillPlayFill size={20} color="#9ca3af" />
                        </div>
                        <div>{post.views}</div>
                      </div>

                      <div className="flex flex-row space-x-1">
                        <div className="mt-1">
                          <BsHeartFill color="#9ca3af" />
                        </div>
                        <div>{post.likes}</div>
                      </div>

                      <div className="flex flex-row space-x-1">
                        <div className="mt-1">
                          <BsChatDotsFill color="#9ca3af" />
                        </div>
                        <div>{post.comments}</div>
                      </div>

                      <div className="flex flex-row  space-x-1">
                        <div className="">
                          <BsReplyFill size={20} color="#9ca3af" />
                        </div>
                        <div>{post.shared}</div>
                      </div>

                      <div className="flex flex-row space-x-1">
                        <div className="mt-1">
                          <BsBookmarkFill color="#9ca3af" />
                        </div>
                        <div>{post.bookmark}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:content-end">
                  <p className="text-sm font-medium text-muted-foreground">
                    {post.status}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ContentVideoPosts;
