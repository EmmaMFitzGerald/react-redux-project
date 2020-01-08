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
            content: ''
        })
    }

    render(){
        return (
            <div class="form-group">
                <form onSubmit={this.handleSubmit}>
                    <label for="formGroupExampleInput">Title: </label>
                    <input type='text' class="form-control" id="formGroupExampleInput" placeholder="Title" value={this.state.title} name='title' onChange={this.handleChange}></input><br/>
                    <label  for="exampleFormControlSelect1">Category: </label>
                    <select name='category' value={this.state.category} onChange={this.handleChange} id="category"
                    class="form-control" id="exampleFormControlSelect1"> 
                        <option>Comedy</option>
                        <option>True Crime</option>
                        <option>Current Affairs</option>
                        <option>Horror</option>
                        <option>Reality</option>
                        <option>Thriller</option>
                    </select><br/>
                    <label>Post:  </label>
                    <textarea placeholder="Post" name="content" value={this.state.content} onChange={this.handleChange}
                    class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    <button class="btn btn-primary"type="submit" value="Submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {addPost})(PostInput)