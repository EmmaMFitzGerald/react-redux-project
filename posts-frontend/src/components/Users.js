import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {deleteUser} from '../actions/deleteUser'



const Users = (props) => {

    const handleDelete = (user) => {
        props.deleteUser(user.id)
    }
    
    return (
        <div>
            <ul class="list-group list-group-flush">All Users</ul>
            {props.users.map(user => 
                <div key={user.id}> 
                <li class="list-group-item"><Link to={`/users/${user.id}`} class="list-group-item">{user.name}</Link><button onClick={() => handleDelete(user)} class="btn btn-danger btn-sml">Delete</button></li></div>)}
        </div>
    )
}

export default connect(null, {deleteUser})(Users)