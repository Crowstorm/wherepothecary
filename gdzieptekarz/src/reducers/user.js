//user reducer
const userReducerDefState = {

}

const userReducer = (state = userReducerDefState, action) => {
    switch (action.type) {
        case 'USER_LOGGED_IN':
            return action.user
        default:
            return state
    }

}

export default userReducer