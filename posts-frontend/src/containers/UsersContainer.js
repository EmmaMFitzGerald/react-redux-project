import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchUsers} from '../actions/fetchUsers'
import Users from '../components/Users'
import User from '../components/User'
import UserInput from '../components/UserInput'
import Post from '../components/Post'
import Home from '../components/Home'

class UsersContainer extends React.Component {

    componentDidMount(){
        this.props.fetchUsers();
    }

    render(){
        return (
            <div>
            <Switch>
              <Route path='/users/new' component={UserInput}/>
              <Route exact path='/users/:id' render={(routerProps) => <User user={this.props.users.filter(user => user.id == routerProps.match.params.id)[0]}/>}/>
              <Route exact path='/users' render={(routerProps) => <Users {...routerProps} users={this.props.users}/>}/>
              <Route exact path='/posts/:id' render={(routerProps) => <Post post={this.props.users.map(u => u.posts).flat().filter(post => post.id == routerProps.match.params.id)[0]}/>}/>
              <Route exact path='/' component={Home}/>
            </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, {fetchUsers})(UsersContainer)