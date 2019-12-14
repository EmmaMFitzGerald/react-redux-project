
export function fetchUsers(){

    fetch('http://localhost:3000/api/vi/users')
    .then(response => response.json())
    .then(data => dispatch)

}

