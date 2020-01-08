import React from 'react'

const Post = ({post}) => {
    
    return post ? (
         <div>
            <p>{post.title}</p>
            <p>{post.category}</p>
            <p>{post.content}</p>
         </div>
     ) : null
 }
 
 export default Post