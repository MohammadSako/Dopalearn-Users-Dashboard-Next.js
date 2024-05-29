"use client"

import KeyMetricsComponents from "./keymetrics-components";
import KeyMetricsSearchFilter from "./keymetrics-searchfilter";
import VideoViews from "./keymetrics-videoviews";



function Keymetrics() {

  return (
    <div className="p-4 rounded-lg shadow-lg bg-white">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-row justify-between ">
          <p className="text-2xl font-bold">Key metrics</p>
        </div>

        <KeyMetricsSearchFilter />
        <KeyMetricsComponents />
        <VideoViews />
      </div>
    </div>
  );
}

export default Keymetrics;
