import React, { Suspense } from "react";
import KeyMetrics from "@/components/dashboard/overview/keymetrics";
import LatestComments from "@/components/dashboard/overview/latest-comments";
import RecentPosts from "@/components/dashboard/overview/recent-posts";
import UserAccount from "@/components/dashboard/overview/user-account";
import {
  AccountSkeleton,
  RecentPostsSkeleton,
  KeymetricsSkeleton,
} from "@/components/ui/skeletons";

function Home() {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-4">
      <div className="flex lg:flex-row md:flex-col flex-col-reverse gap-4">
        <div className="basis-4/6 space-y-4">
          <Suspense fallback={<KeymetricsSkeleton />}>
            <KeyMetrics />
          </Suspense>
          <Suspense fallback={<KeymetricsSkeleton />}>
            <LatestComments />
          </Suspense>
        </div>
        <div className="basis-2/6 space-y-4">
          <Suspense fallback={<AccountSkeleton />}>
            <UserAccount />
          </Suspense>
          <Suspense fallback={<RecentPostsSkeleton />}>
            <RecentPosts />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default Home;
