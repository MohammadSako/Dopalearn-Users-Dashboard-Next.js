"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import Link from "next/link";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
    <div className=" h-96 p-4 rounded-lg shadow-lg bg-white">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-row justify-between ">
          <p className="text-2xl font-bold">Manage your posts</p>
        </div>
        <div className="flex items-center rounded-lg bg-white dark:bg-gray-800  space-x-2">
          <Input
            className="flex-1 rounded-lg py-2 px-4 leading-none text-gray-800 dark:text-white bg-transparent focus:outline-none"
            placeholder="Search..."
            type="text"
          />
        </div>

        <div className="flex flex-row">
          <div>
            <Select>
              <SelectTrigger className="w-auto">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">date</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {!data && <NoData />}
        {data && <div className="mt-4 bg-slate-200">Data</div>}
      </div>
    </div>
  );
}

export default Posts;
