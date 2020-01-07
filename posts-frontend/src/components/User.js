import React from 'react'
import UserEdit from './UserEdit'
import PostsContainer from '../containers/PostsContainer'
import {Link} from 'react-router-dom'

const User = ({user}) => {

   
   return (
        <div>
              <h1>{user ? user.name : null}</h1>
              <PostsContainer user={user}/>
              <p>Edit Username:</p><UserEdit user={user} />
              <Link to='/'>Home</Link>
        </div>
    )
}

export default User