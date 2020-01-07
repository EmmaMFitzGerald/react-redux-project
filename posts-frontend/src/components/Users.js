import React from 'react'
import {connect} from 'react-redux'
import {Route, Link} from 'react-router-dom'
import {deleteUser} from '../actions/deleteUser'
import User from './User'


const Users = (props) => {

    const handleDelete = (user) => {
        props.deleteUser(user.id)
    }
    
    return (
        <div>
            <p className="users">All Users</p>
            {props.users.map(user => 
                <div key={user.id}> 
                <Link to={`/users/${user.id}`} className='user-name'>{user.name}</Link><button onClick={() => handleDelete(user)}>Delete</button></div>)}
            <p><Link to='/users/new' className="users">Create New User</Link></p>
        </div>
    )
}

export default connect(null, {deleteUser})(Users)