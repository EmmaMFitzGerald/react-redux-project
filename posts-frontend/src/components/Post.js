import React from 'react'
import PostEdit from './PostEdit'


const Post = ({post}) => {
    
    return post ? (
         <div>
            <p>Edit Post:</p><PostEdit title={post.title} category={post.category} content={post.content}/>
         </div>
     ) : null
 }
 
 export default Post