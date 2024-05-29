"use client"

import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContentTrendingVideos from "./content-trending-videos";
import ContentVideoPosts from "./content-video-posts";

function Contents() {
  //APIs
  const posts = [
    {
      posts: "Turn screen time into learning time.",
      href: "/dashboard/posts",
      image: "/BrainBoosters.png",
      status: "May 1, 2024 6:29 PM",
      privacy: "Everyone",
      views: "5.0K",
      likes: "5",
      comments: "25",
      shared: "5",
      bookmark: "2",
      id: "id1",
    },
    {
      posts: "Teach toddlers math with Dopalearn",
      href: "/dashboard/posts",
      image: "/post.jpg",
      status: "Sep 20, 2023 3:05 PM",
      privacy: "Only me",
      views: "453",
      likes: "36",
      comments: "0",
      shared: "0",
      bookmark: "15",
      id: "id2",
    },
    {
      posts: "Turn screen time into learning time.",
      href: "/dashboard/posts",
      image: "/BrainBoosters.png",
      status: "May 1, 2024 6:29 PM",
      privacy: "Everyone",
      views: "5.0K",
      likes: "5",
      comments: "25",
      shared: "5",
      bookmark: "2",
      id: "id3",
    },
    {
      posts: "Teach toddlers math with Dopalearn",
      href: "/dashboard/posts",
      image: "/post.jpg",
      status: "Sep 20, 2023 3:05 PM",
      privacy: "Only me",
      views: "453",
      likes: "36",
      comments: "0",
      shared: "0",
      bookmark: "15",
      id: "id4",
    },
  ];
  const trends = [
    {
      posts: "Teach toddlers math with Dopalearn",
      href: "/dashboard/posts",
      image: "/post.jpg",
      status: "Sep 20, 2023 3:05 PM",
      privacy: "Only me",
      views: "453",
      likes: "36",
      comments: "0",
      shared: "0",
      bookmark: "15",
      id: "id4",
    },
    {
      posts: "Turn screen time into learning time.",
      href: "/dashboard/posts",
      image: "/BrainBoosters.png",
      status: "May 1, 2024 6:29 PM",
      privacy: "Everyone",
      views: "5.0K",
      likes: "5",
      comments: "25",
      shared: "5",
      bookmark: "2",
      id: "id1",
    },
  ];
  const video_posts =
    "Shows videos from the last 7 days, in order of newest to oldest.";
  const video_trending =
    "The top 9 videos with the fastest growth in view numbers over the past 7 days.";

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
            <ContentVideoPosts posts={posts} info={video_posts} />
          </TabsContent>

          <TabsContent value="trending_videos">
            <ContentTrendingVideos posts={trends} info={video_trending} />
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
