import React from 'react'
import {connect} from 'react-redux'
import {deletePost} from '../actions/deletePost'


const Posts = (props) => {

    const handleDelete = (post) => {
        props.deletePost(post.id, post.user_id)
    }

    

    return (
        <div>
            {props.posts && props.posts.map(post => 
                <div>
                <li key={post.id}>{post.title}</li>
                <p>{post.category}</p>
                <p>{post.content}</p><button onClick={() => handleDelete(post)}>Delete</button>
                </div>)}

        </div>
    )
}

export default connect(null, {deletePost})(Posts)