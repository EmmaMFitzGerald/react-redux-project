import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchUsers} from '../actions/fetchUsers'
// import {fetchPosts} from '../actions/fetchPosts'
import Users from '../components/Users'
import User from '../components/User'
import UserInput from '../components/UserInput'
import Post from '../components/Post'


class UsersContainer extends React.Component {

    componentDidMount(){
        this.props.fetchUsers();
        // this.props.fetchPosts()
    }

    render(){
        return (
            <div>
            <Switch>
              <Route path='/users/new' component={UserInput}/>
              <Route exact path='/users/:id' render={(routerProps) => <User user={this.props.users.filter(user => user.id == routerProps.match.params.id)[0]}/>}/>
              <Route exact path='/' render={(routerProps) => <Users {...routerProps} users={this.props.users}/>}/>
              {/* <Route exact patch='/posts/:id' render={(routerProps) => <Post post={this.props.posts.filter(post => post.id == routerProps.match.params.id)[0]}/>}/> */}
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