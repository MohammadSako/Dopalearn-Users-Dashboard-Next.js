"use client";

import ChartPie from "@/components/ui/chart-pie";

function GenderChart() {
  return (
    <div className="p-4 rounded-lg shadow-lg bg-white">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-row justify-between ">
          <p className="text-2xl font-bold">Gender</p>
        </div>
        <ChartPie />
      </div>
    </div>
  );
}

export default GenderChart;
