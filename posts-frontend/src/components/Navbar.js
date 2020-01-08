import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
    
    return (
        <div> 
            <nav class="navbar navbar-light bg-light">
            <Link to="/users" class="navbar-brand">See all Users</Link>
            <p>Podcast Review App</p>
            <Link to="/users/new" class="navbar-brand">Create User</Link>
            </nav>
        </div>
    )
 }
 
 export default Navbar