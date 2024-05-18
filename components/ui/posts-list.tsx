"use client";

import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import {
  BsChatDots,
  BsChatDotsFill,
  BsTrash3,
  BsBarChart,
  BsHeartFill,
  BsFillPlayFill,
  BsReplyFill,
  BsBookmarkFill,
} from "react-icons/bs";

const PostsList = () => {
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
    },
  ];

  return (
    <>
      <Separator className="my-4" />
      <div>
        <Table>
          <TableCaption>A list of your recent Videos</TableCaption>

          <TableHeader>
            <TableRow>
              <TableHead className="lg:w-[400px] text-gray-400">
                Posts
              </TableHead>
              <TableHead className="text-gray-400">Actions</TableHead>
              <div className="lg:contents hidden">
                <TableHead className="text-gray-400">Status</TableHead>
              </div>
              <div className="lg:contents hidden">
                <TableHead className="text-gray-400">Privacy</TableHead>
              </div>
            </TableRow>
          </TableHeader>

          <TableBody>
            {posts.map((post) => (
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex lg:flex-row flex-col gap-2">
                    <div className="h-32 rounded-md p-1">
                      <Image
                        src={post.image}
                        width={80}
                        height={100}
                        alt="BrainBoosters"
                      />
                    </div>
                    <div className="flex flex-col lg:space-y-16 gap-2">
                      <div className="font-normal lg:text-base text-sm">
                        {post.posts}
                      </div>
                      <div className="font-normal lg:text-base text-sm lg:hidden">
                        {post.privacy}
                      </div>
                      <div className="font-normal lg:text-base text-sm lg:hidden">
                        {post.status}
                      </div>
                      <div className="flex flex-row flex-wrap lg:gap-4 gap-2">
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
                </TableCell>
                <TableCell>
                  <div className="flex xl:flex-row flex-col justify-between gap-6">
                    <BsBarChart size={18} />
                    <BsChatDots size={18} />
                    <BsTrash3 size={18} />
                  </div>
                </TableCell>
                <div className="lg:contents hidden">
                  <TableCell>
                    <span className="text-gray-400 font-medium bg-gray-50 p-1 rounded-sm">
                      Posted
                    </span>{" "}
                    <span>{post.status}</span>
                  </TableCell>
                </div>
                <div className="lg:contents hidden">
                  <TableCell>{post.privacy}</TableCell>
                </div>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default PostsList;
