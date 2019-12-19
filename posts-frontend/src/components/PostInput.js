import React from 'react'
import {connect} from 'react-redux'
import {addPost} from '../actions/addPost'

class PostInput extends React.Component {

    state = {
        title: '',
        category: 'Comedy',
        content: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {    
        event.preventDefault()
        this.props.addPost(this.state, this.props.user.id)
        this.setState({
            title: '',
            category: 'Comedy',
            content: " "
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Title: </label>
                    <input type='text' placeholder="Title" value={this.state.title} name='title' onChange={this.handleChange}></input><br/>
                    <label>Category: </label>
                    <select name='category' value={this.state.category} onChange={this.handleChange}>
                        <option>Comedy</option>
                        <option>True Crime</option>
                        <option>Scary</option>
                        <option>Reality</option>
                        <option>Thriller</option>
                    </select><br/>
                    <label>Post:  </label>
                    <textarea placeholder="Post" value={this.state.post} name="content" onChange={this.handleChange}></textarea>
                    <button type="submit" value="Submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {addPost})(PostInput)