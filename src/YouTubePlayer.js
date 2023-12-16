import React, { useState, useEffect } from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';

const YouTubePlayer = ({ videoId }) => {
  const [videoInfo, setVideoInfo] = useState(null);

  useEffect(() => {
    const fetchVideoInfo = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=AIzaSyBD4JoaSV9Uu5BqNNYBiRSWGifbFSAPxq4`
        );
        setVideoInfo(response.data.items[0].snippet);
      } catch (error) {
        console.error('Error fetching video:', error);
      }
    };

    if (videoId) {
      fetchVideoInfo();
    }
  }, [videoId]);

  if (!videoInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{videoInfo.title}</h2>
      <p>{videoInfo.description}</p>
      <YouTube videoId={videoId} />
      {/* You can add your custom video player here */}
    </div>
  );
};

export default YouTubePlayer;
