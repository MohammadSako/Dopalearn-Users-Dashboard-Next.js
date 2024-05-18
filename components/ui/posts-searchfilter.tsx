"use client";

import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const filters = [
  { name: "Sort by", items: ["date", "name", "A-Z", "Z-A"] },
  { name: "All vidoes views", items: ["date", "name", "A-Z", "Z-A"] },
  { name: "All comments", items: ["date", "name", "A-Z", "Z-A"] },
  { name: "All likes", items: ["date", "name", "A-Z", "Z-A"] },
  { name: "All privacy", items: ["date", "name"] },
];

const PostsSearchFilter = () => {
  return (
    <>
      <div className="flex items-center rounded-lg bg-white dark:bg-gray-800  space-x-2">
        <Input
          className="flex-1 rounded-lg py-2 px-4 leading-none text-gray-800 dark:text-white bg-transparent focus:outline-none"
          placeholder="Search..."
          type="text"
        />
      </div>

      <div className="flex flex-row gap-4">
        {filters.map((filter) => (
          <Select key={filter.name}>
            <SelectTrigger className="w-auto" chevronIconClassName="w-8">
              <SelectValue placeholder={filter.name} />
            </SelectTrigger>
            <SelectContent>
              {filter.items.map((item) => (
                <SelectItem value="date">{item}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        ))}
      </div>
    </>
  );
};

export default PostsSearchFilter;
