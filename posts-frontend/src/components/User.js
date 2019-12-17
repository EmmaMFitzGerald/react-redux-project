import React from 'react'
import {Redirect} from 'react-router-dom'

const User = (props) => {

   console.log(props.users)

   let user = props.users[props.match.params.id - 1]
   
   return (
        <li>
              {user ? user.name : null}
        </li>
    )
}

export default User