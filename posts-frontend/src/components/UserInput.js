import React from 'react'

class UserInput extends React.Component {

    state = {
        title: '',
        category: '',
        content: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = () => {
        
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Title: </label>
                    <input type='text' placeholder="Title" value={this.state.title} name='title' onChange={this.handleChange}></input><br/>
                    <label>Category: </label>
                    <input type='text' placeholder="Category" value={this.state.category} name='category' onChange={this.handleChange}></input><br/>
                    <label>Post:  </label>
                    <textarea placeholder="Post" value={this.state.post} name="content" onChange={this.handleChange}></textarea>
                    <button type="submit" value="Submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default UserInput