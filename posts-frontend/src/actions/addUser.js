export const addUser = (data) => {
    debugger
    return(dispatch) => {
    fetch('http://localhost:3000/api/v1/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application.json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    })
  }
}
