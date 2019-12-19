export default function userReducer(state = { users:[] }, action){
    switch(action.type){
        case 'FETCH_USERS':
            return {users: action.payload}
        case 'ADD_ACCOUNT':
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
            debugger;
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