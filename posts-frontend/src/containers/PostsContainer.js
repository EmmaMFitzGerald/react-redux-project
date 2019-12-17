import React from 'react'
import PostInput from '../components/PostInput'
import Posts from '../components/Posts'

class PostsContainer extends React.Component {

    render() {
        return (
            <div>
                <PostInput/>
                <Posts posts={this.props.user && this.props.user.posts}/>
            </div>
        )
    }
}

export default PostsContainer