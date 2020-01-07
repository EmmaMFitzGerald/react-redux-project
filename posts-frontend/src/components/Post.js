import React from 'react'
import PostEdit from './PostEdit'


const Post = ({post}) => {
    return post ? (
         <div>
             <p>{post.title}</p>
               <p>Edit Username:</p><PostEdit post={post} />
         </div>
     ) : null
 }
 
 export default Post