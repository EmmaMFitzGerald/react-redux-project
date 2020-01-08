import React from 'react'
import {connect} from 'react-redux'
import {editPost} from '../actions/editPost'


class PostEdit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: props.title || "",
            category: props.category || "",
            content: props.content || ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {   
        debugger 
        event.preventDefault()
        this.props.editPost(this.state, this.props.post.user_id)
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

export default connect(null, {editPost})(PostEdit)