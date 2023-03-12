import React, { useState } from "react";

type Props = {
  videoId: string;
};

const YouTubeDownloader: React.FC<Props> = ({ videoId }) => {
  const [downloadUrl, setDownloadUrl] = useState<string>("");

  const handleDownload = async () => {
    try {
      const response = await fetch(
        `https://youtube.com/get_video_info?video_id=${videoId}`
      );
      const data = await response.text();

      const videoInfo = data
        .split("&")
        .map((pair) => pair.split("="))
        .reduce((acc, [key, value]) => {
          acc[key] = decodeURIComponent(value);
          return acc;
        }, {} as Record<string, string>);

      const streamMap = videoInfo.url_encoded_fmt_stream_map
        .split(",")
        .map((stream) =>
          stream.split("&").reduce((acc, [key, value]) => {
            acc[key] = decodeURIComponent(value);
            return acc;
          }, {} as Record<string, string>)
        );

      const highestQualityStream = streamMap.reduce((acc, stream) =>
        acc.quality > stream.quality ? acc : stream
      );

      setDownloadUrl(highestQualityStream.url);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={handleDownload}>Download</button>
      {downloadUrl && <a href={downloadUrl}>Download Link</a>}
    </div>
  );
};

export default YouTubeDownloader;
