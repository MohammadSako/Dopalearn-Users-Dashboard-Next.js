"use client";

import ChartCountry from "@/components/ui/chart-country";

function CountryChart() {
  return (
    <div className="p-4 rounded-lg shadow-lg bg-white">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-row justify-between ">
          <p className="text-2xl font-bold">Counrty/region</p>
        </div>
        <ChartCountry />
      </div>
    </div>
  );
}

export default CountryChart;
