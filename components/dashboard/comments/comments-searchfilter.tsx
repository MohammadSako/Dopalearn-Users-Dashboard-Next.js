"use client"

import DatePicker from "@/components/ui/date-paker";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const filters = [
  { name: "All comments", items: ["All comments", "Not replied", "Replied"] },
  {
    name: "Posted by all",
    items: ["Posted by all", "Posted by followers", "Posted by non-followers"],
  },
  {
    name: "All follower counts",
    items: ["All follower counts", "<5K", "5K-10K", "10K-100K", ">100K"],
  },
];

const CommentsSearchFilter = () => {
  return (
    <>
      <div className="flex items-center rounded-lg bg-white dark:bg-gray-800  space-x-2">
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
            <SelectContent>
              {filter.items.map((item) => (
                <SelectItem value={item}>{item}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        ))}
        <DatePicker />
      </div>
    </>
  );
};

export default CommentsSearchFilter;
