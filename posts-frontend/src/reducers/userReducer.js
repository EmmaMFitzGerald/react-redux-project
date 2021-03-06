export default function userReducer(state = { users:[] }, action){
    switch(action.type){
        case 'FETCH_USERS':
            return {users: action.payload}
        case 'FETCH_POSTS':
            return {posts: action.payload}
        case 'ADD_USER':
            return {...state, users: [...state.users, action.payload]}
        case 'ADD_POST':
            return {...state, users: state.users.map(user => {
                if (user.id === action.payload.id){
                    return action.payload
                } else {
                    return user
                }
            })}
        case 'DELETE_POST':
            return {...state, users: state.users.map(user => {
                if (user.id === action.payload.id){
                    return action.payload
                } else {
                    return user
                }
            })}
        case 'DELETE_USER':
             return {users: state.users.filter(u => u.id !== action.payload.id)}
        case 'EDIT_USER':
            return {...state, users: state.users.map(user => {
                if (user.id === action.payload.id){
                    return action.payload
                } else {
                    return user
                }
            })}
        default:
            return state
    }
}   