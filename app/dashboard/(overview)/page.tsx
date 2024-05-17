import React from "react";
import KeyMetrics from "@/components/dashboard/overview/keymetrics";
import LatestComments from "@/components/dashboard/overview/latest-comments";
import RecentPosts from "@/components/dashboard/overview/recent-posts";
import UserAccount from "@/components/dashboard/overview/user-account";

function Home() {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-4">
      <div className="flex lg:flex-row md:flex-col flex-col-reverse gap-4">
        <div className="basis-4/6 space-y-4">
          <KeyMetrics />
          <LatestComments />
        </div>
        <div className="basis-2/6 space-y-4">
          <UserAccount />
          <RecentPosts />
        </div>
      </div>
    </div>
  );
}

export default Home;
