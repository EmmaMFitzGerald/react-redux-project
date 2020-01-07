import React from 'react'
import PostEdit from './PostEdit'


const Post = ({post}) => {
    
    return (
         <div>
               <p>Edit Username:</p><PostEdit post={post} />
         </div>
     )
 }
 
 export default Post