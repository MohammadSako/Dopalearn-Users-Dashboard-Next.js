"use client";

import TotalFollowers from "./Total-followers";
import AgeChart from "./age-chart";
import CityChart from "./city-chart";
import CountryChart from "./country-chart";
import FollowerActivity from "./follower-activity";
import GenderChart from "./gender-chart";

function Followers() {
  const Metrics = [
    { name: "Video views", count: "3,564" },
    { name: "Profile views", count: "3,564" },
    { name: "Likes", count: "10" },
    { name: "Comments", count: "15" },
    { name: "Shares", count: "3" },
    { name: "Unique viewers", count: "2,556" },
  ];

  return (
    <div className="flex flex-col gap-4">
      <TotalFollowers />
      <div className="grid grid-cols-3 gap-4">
        <GenderChart />
        <AgeChart />
        <CountryChart />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <CityChart />
        </div>
        <div className="col-span-2">
          <FollowerActivity />
        </div>
      </div>
    </div>
  );
}

export default Followers;
