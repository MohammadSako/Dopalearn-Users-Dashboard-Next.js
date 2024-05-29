"use client"

import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContentTrendingVideos from "./content-trending-videos";
import ContentVideoPosts from "./content-video-posts";

function Contents() {
  return (
    <div className=" p-4 rounded-lg shadow-lg bg-white">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-row justify-between ">
          <p className="text-2xl font-bold">Content</p>
        </div>
        <Tabs defaultValue="video_posts" className="w-full ">
          <TabsList className="bg-white">
            <TabsTrigger
              value="video_posts"
              className="text-lg font-semibold rounded-none data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-dopalearnblue"
            >
              Video Posts
            </TabsTrigger>
            <TabsTrigger
              value="trending_videos"
              className="text-lg font-semibold rounded-none data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-dopalearnblue"
            >
              Trending Videos
            </TabsTrigger>
          </TabsList>
          <Separator className="my-4" />

          <TabsContent value="video_posts">
            <ContentVideoPosts />
          </TabsContent>

          <TabsContent value="trending_videos">
            <ContentTrendingVideos />
          </TabsContent>
        </Tabs>
      </div>
      <p className="text-sm text-gray-400 font-semibold mt-10">
        Data displays in UTC time zone
      </p>
    </div>
  );
}

export default Contents;
