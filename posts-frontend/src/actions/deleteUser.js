export const deleteUser = (userId) => {

    return dispatch => {
        fetch(`http://localhost:3000/api/v1/users/${userId}`,
        {method: 'DELETE'
    })  .then(response => response.json())
        .then(user => dispatch({type: 'DELETE_USER', payload: user}))
    }
}

