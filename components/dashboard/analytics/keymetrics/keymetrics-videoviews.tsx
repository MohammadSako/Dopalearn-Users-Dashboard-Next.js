import { useState } from "react"

function NoData() {
  return (
    <div className="p-20 flex flex-col items-center text-center">
      <div>
        <p className="m-3 text-xl font-bold text-muted-foreground">No results found</p>
      </div>
    </div>
  );
}
function VideoViews() {
  const [data, setData] = useState(false);

  return (
    <div className="p-2">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-row justify-between ">
          <p className="text-sm font-bold">Video views</p>
        </div>

        {!data && <NoData />}
      </div>
    </div>
  );
}

export default VideoViews;
