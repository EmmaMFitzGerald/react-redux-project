import React from 'react'
import {Redirect} from 'react-router-dom'
import UserEdit from './UserEdit'
import PostsContainer from '../containers/PostsContainer'


const User = (props) => {

   let user = props.users.filter(user => user.id == props.match.params.id)[0]
   
   return (
        <div>
              <h1>{user ? user.name : null}</h1>
              <PostsContainer user={user}/>
              <p>Edit Username</p><UserEdit user={user} />
        </div>
    )
}

export default User