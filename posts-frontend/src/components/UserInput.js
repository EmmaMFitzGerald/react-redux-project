import React from 'react'
import {connect} from 'react-redux'
import {addUser} from '../actions/addUser'

class UserInput extends React.Component {

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
        this.props.addUser(this.state)
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name: </label>
                    <input type='text' placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange}></input><br/>
                    <button type="submit" value="Submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {addUser})(UserInput)