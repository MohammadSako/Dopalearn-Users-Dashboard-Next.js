"use client";

import { ImArrowUp, ImArrowDown } from "react-icons/im";
import { Separator } from "@/components/ui/separator";
import FollowersSearchFilter from "@/components/ui/followers-searchfilter";
import Chart from "@/components/ui/chart";

function TotalFollowers() {
  return (
    <div className="p-4 rounded-lg shadow-lg bg-white">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-row justify-between ">
          <p className="text-2xl font-bold">Total Followers</p>
        </div>
        <FollowersSearchFilter />
        <div className="flex flex-col space-y-2">
          <div>
            <p>4,555 in total</p>
          </div>
          <div className="flex flex-row space-x-2 text-muted-foreground text-sm ">
            <ImArrowUp className="mt-0.5" />
            <p>-3 (0%) vs. Apr 19 - Apr 25</p>
          </div>
        </div>
        <Chart />
        <Separator />
      </div>
    </div>
  );
}

export default TotalFollowers;
