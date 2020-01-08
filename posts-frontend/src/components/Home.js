import React from 'react'
import {Link} from 'react-router-dom'


const Home = () => {
    
    return (
        <div class="jumbotron"><h1 class="display-4">Welcome to Podcast Review App</h1>
        <p class="lead">Where you can review your favourite podcasts!</p>
        <Link to="/users" class="btn btn-primary btn-sm">See all Users</Link>
        <Link to="/users/new" class="btn btn-primary btn-sm">Create New User</Link>
        </div>
    )
 }
 
 export default Home