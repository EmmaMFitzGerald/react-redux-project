import React from 'react'
import PostsContainer from '../containers/PostsContainer'


const User = (props) => {

   console.log(props.users)

   let user = props.users.filter(user => user.id == props.match.params.id)[0]
   
   return (
        <div>
              <h1>{user ? user.name : null}</h1>
              <PostsContainer user={user}/>
        </div>
    )
}

export default User