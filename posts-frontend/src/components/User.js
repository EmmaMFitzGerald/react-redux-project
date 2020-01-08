import React from 'react'
import UserEdit from './UserEdit'
import PostsContainer from '../containers/PostsContainer'

const User = ({user}) => {

   
   return (
        <div>
              <h1>{user ? user.name : null}</h1>
              <PostsContainer user={user}/>
              <p>Edit Username:</p><UserEdit user={user} />
        </div>
    )
}

export default User