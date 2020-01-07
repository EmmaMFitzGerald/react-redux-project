export const editPost = (data) => {
    return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${data.id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        method: 'PATCH',
        body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(post => dispatch({type: 'EDIT_POST', payload: post}))
  }
}