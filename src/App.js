import React from 'react';
import YouTubePlayer from './YouTubePlayer';

const App = () => {
  // Replace 'YOUR_VIDEO_ID' with the actual unlisted video ID
  const videoId = '0zw4Z-J2dHg';

  return (
    <div className="App">
      <h1>YouTube Video Player</h1>
      <YouTubePlayer videoId={videoId} />
    </div>
  );
};

export default App;
