"use client"

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

const PostsList = ({ posts }) => {
  return (
    <>
      <Separator className="my-4" />
      <>
        <Table>
          <TableCaption>A list of your recent Videos</TableCaption>

          <TableHeader>
            <TableRow>
              <TableHead className="lg:w-[400px] text-gray-400">
                Posts
              </TableHead>
              <TableHead className="text-gray-400">Actions</TableHead>
              <TableHead className="text-gray-400 lg:table-cell hidden">
                Status
              </TableHead>
              <TableHead className="text-gray-400 lg:table-cell hidden">
                Privacy
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {posts.map((post) => (
              <TableRow key={post.id}>
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
                <TableCell className="lg:table-cell hidden">
                  <span className="text-gray-400 font-medium bg-gray-50 p-1 rounded-sm">
                    Posted
                  </span>{" "}
                  <span>{post.status}</span>
                </TableCell>
                <TableCell className="lg:table-cell hidden">
                  {post.privacy}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </>
    </>
  );
};

export default PostsList;
