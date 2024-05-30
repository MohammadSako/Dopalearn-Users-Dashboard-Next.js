"use client"

import ChartCity from "@/components/ui/chart-city";

function CityChart() {
  return (
    <div className="p-4 rounded-lg shadow-lg bg-white">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-row justify-between ">
          <p className="text-2xl font-bold">City</p>
        </div>
        <ChartCity />
      </div>
    </div>
  );
}

export default CityChart;
