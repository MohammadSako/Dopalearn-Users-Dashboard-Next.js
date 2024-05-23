"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import KeyMetricsSearchFilter from "@/components/ui/keymetrics-searchfilter";
import KeyMetricsComponents from "@/components/ui/keymetrics-components";

function Keymetrics() {
  const [data, setData] = useState("");

  function NoData() {
    return (
      <div className="p-20 flex flex-col items-center text-center">
        <div>
          <p className="m-3 text-xl font-bold">No results found</p>
          <Button variant="outline">Clear all</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 rounded-lg shadow-lg bg-white">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-row justify-between ">
          <p className="text-2xl font-bold">Key metrics</p>
        </div>

        <KeyMetricsSearchFilter />
        <KeyMetricsComponents />

      </div>
    </div>
  );
}

export default Keymetrics;
