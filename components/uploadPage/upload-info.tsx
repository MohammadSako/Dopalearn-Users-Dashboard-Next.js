import {
  BsFiletypeMp4,
  BsCameraVideo,
  BsAspectRatio,
  BsBadgeHd,
} from "react-icons/bs";

const Icons = [
  {
    title: "Size and duration",
    info: "Maximum size: 200 MB, video duration: 30 minutes",
    icon: BsCameraVideo,
  },
  {
    title: "File formats",
    info: `Recommended: ".mp4". Other major formats are supported.`,
    icon: BsFiletypeMp4,
  },
  {
    title: "Video resolutions",
    info: "Minimum resolution: 720p. 2k and 4k are supported.",
    icon: BsBadgeHd,
  },
  {
    title: "Aspect ratios",
    info: "Recommended: 16:9 for landscape, 9:16 for vertical.",
    icon: BsAspectRatio,
  },
];

export default function UploadInfo() {
  return (
    <>
      {Icons.map((icon) => {
        const LinkIcon = icon.icon;
        return (
          <div className="flex flex-row mt-5">
            <div>
              <LinkIcon size={30} color="#4b5563" className="mr-2" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-md font-bold">{icon.title}</h3>
              <div className="text-sm font-normal text-gray-600">
                <p>{icon.info}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
