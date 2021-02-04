function CommentCard({comments}) {

   const displayComments = comments.map(comment => {
      return (
         <div key={comment.id}>
            <h4>{comment.user}</h4>
            <p>{comment.comment}</p>
         </div>
      )
   })

   return (
      <div>
         {displayComments}
      </div>
   )
}

export default CommentCard