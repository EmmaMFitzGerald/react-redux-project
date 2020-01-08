import React from 'react'
import {connect} from 'react-redux'
import {editUser} from '../actions/editUser'


class UserEdit extends React.Component {

    state = {
       name: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let user = {...this.state, id: this.props.user.id}
        this.props.editUser(user)
        this.setState({
            name: ''
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label class="name">Name: </label>
                    <input type="text" class="form-control" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange}></input><br/>
                    <button class="btn btn-primary" type="submit" value="Submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {editUser})(UserEdit)