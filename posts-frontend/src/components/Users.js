import React from 'react'
import {Route, Link} from 'react-router-dom'
import User from './User'


const Users = (props) => {
    
    return (
        <div>
            {props.users.map(user => 
                <div key={user.id}> 
                <Link to={`/users/${user.id}`}>{user.name}</Link></div>)}
        </div>
    )
}

export default Users