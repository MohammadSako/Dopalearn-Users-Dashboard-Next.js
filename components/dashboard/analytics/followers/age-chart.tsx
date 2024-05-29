"use client";

import { Chart } from "@/components/ui/chart";

function AgeChart() {
  return (
    <div className="p-4 rounded-lg shadow-lg bg-white">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-row justify-between ">
          <p className="text-2xl font-bold">Age</p>
        </div>
        <Chart />
      </div>
    </div>
  );
}

export default AgeChart;
