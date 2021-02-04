import CommentCard from "./CommentCard"

function CommentsList({comments}) {

   return (
      <div>
         <h2>{comments.length} Comments</h2>
         <CommentCard comments={comments} />
      </div>
   )
}

export default CommentsList