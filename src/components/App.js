import video from "../data/video.js";
import VideoDisplay from "./VideoDisplay"

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <VideoDisplay 
        video={video}
        title={video.title} 
        url={video.embedUrl} 
        views={video.views} 
        createdAt={video.createdAt} 
        upvotes={video.upvotes} 
        downvotes={video.downvotes} 
      />
    </div>
  );
}

export default App;
