import React from 'react'

const Posts = (props) => {

    return (
        <div>
            {props.posts && props.posts.map(post => 
                <div>
                <li key={post.id}>{post.title}</li>
                <p>{post.category}</p>
                <p>{post.content}</p> 
                </div>)}

        </div>
    )
}

export default Posts