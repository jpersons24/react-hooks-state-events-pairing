import React, {useState} from "react"
import CommentsList from "./CommentsList"

function VideoDisplay({ video, title, url, views, createdAt, upvotes, downvotes}) {
   const [upVote, setUpVote] = useState(upvotes)
   const [downVote, setDownVote] = useState(downvotes)
   const [isHidden, setIsHidden] = useState(false)

   function handleUpvoteClick(event) {
      setUpVote(upVote + 1)
   }

   function handleDownvoteClick(event) {
      setDownVote(downVote - 1)
   }

   function handleBtnClick(event) {
      console.log(isHidden)
      setIsHidden(isHidden => !isHidden)
   }
   
   return (
      <div>
         <iframe
        width="919"
        height="525"
        src={url}
        frameBorder="0"
        allowFullScreen
        title={title}
         />
         <h1>{title}</h1>
         <p>{views} Views | Uploaded {createdAt}</p>
         <button onClick={handleUpvoteClick}>{upVote} 👍</button><button onClick={handleDownvoteClick}>{downVote} 👎</button> 
         <br></br>
         <br></br>
         <button onClick={handleBtnClick}>{isHidden ? "Hide Comments" : "Show Comments"}</button>
         {isHidden ? <CommentsList comments={video.comments} /> : null}
      </div>
   )
}

export default VideoDisplay