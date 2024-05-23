"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "./separator";
import { Button } from "./button";

const filters = [
  {
    name: "Sort by",
    items: ["Post time", "Video views", "Comments", "Likes"],
    sub_name: "Order",
    sub_items: ["Newest to oldest", "Oldest to newest"],
  },
  {
    name: "All vidoes views",
    items: ["All vidoes views", "<1K", "1K-10K", "10K-100K", ">100K"],
    button: "Apply",
  },
  {
    name: "All comments",
    items: ["All comments", "<1K", "1K-10K", "10K-100K", ">100K"],
    button: "Apply",
  },
  {
    name: "All likes",
    items: ["All comments", "<1K", "1K-10K", "10K-100K", ">100K"],
    button: "Apply",
  },
  {
    name: "All privacy",
    items: ["All comments", "Everyone", "Only me", "Friends"],
    button: "Apply",
  },
];

const PostsSearchFilter = () => {
  return (
    <>
      <div className="flex items-center hover:bg-sky-100 rounded-lg bg-white dark:bg-gray-800  space-x-2">
        <Input
          className="flex-1 rounded-lg py-2 px-4 leading-none text-gray-800 dark:text-white bg-transparent focus:outline-none"
          placeholder="Search..."
          type="text"
        />
      </div>

      <div className="flex flex-row flex-wrap gap-4">
        {filters.map((filter) => (
          <Select key={filter.name}>
            <SelectTrigger
              className="w-auto hover:bg-sky-100"
              chevronIconClassName="ml-2"
            >
              <SelectValue placeholder={filter.name} />
            </SelectTrigger>
            <SelectContent className="w-48 ">
              <p className="text-xs text-dopalearngray">{filter.name}</p>
              {filter.items.map((item) => (
                <SelectItem value={item}>{item}</SelectItem>
              ))}
              <Separator className="my-2" />
              <p className="text-xs text-dopalearngray">{filter.sub_name}</p>
              {filter.sub_items?.map((sub_item) => (
                <SelectItem value={sub_item}>{sub_item}</SelectItem>
              ))}
              <div className="flex justify-end">
                {filter.button && (
                  <Button
                    variant="default"
                    className="bg-dopalearnblue h-8 rounded m-1"
                  >
                    {filter.button}
                  </Button>
                )}
              </div>
            </SelectContent>
          </Select>
        ))}
      </div>
    </>
  );
};

export default PostsSearchFilter;
