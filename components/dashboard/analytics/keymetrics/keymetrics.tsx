"use client"

import KeyMetricsComponents from "./keymetrics-components";
import KeyMetricsSearchFilter from "./keymetrics-searchfilter";
import VideoViews from "./keymetrics-videoviews";



function Keymetrics() {
  const Metrics = [
    { name: "Video views", count: "3,564" },
    { name: "Profile views", count: "3,564" },
    { name: "Likes", count: "10" },
    { name: "Comments", count: "15" },
    { name: "Shares", count: "3" },
    { name: "Unique viewers", count: "2,556" },
  ];

  return (
    <div className="p-4 rounded-lg shadow-lg bg-white">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-row justify-between ">
          <p className="text-2xl font-bold">Key metrics</p>
        </div>

        <KeyMetricsSearchFilter />
        <KeyMetricsComponents data={Metrics} />
        <VideoViews />
      </div>
    </div>
  );
}

export default Keymetrics;
