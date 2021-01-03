const updateUsers = (state, action) => {
    if (state === undefined) {
        return {
            users: [],
            loading: false,
            error: null
        }
    }

    switch (action.type) {
        case 'USERS_FETCH_REQUEST':
            return {
                users: [],
                loading: true,
                error: false
            };
        case 'USERS_FETCH_SUCCESS':
            return {
                users: action.payload,
                loading: false,
                error: null
            };
        case 'USERS_FETCH_ERROR':
            return {
                users: [],
                loading: false,
                error: true
            };
        default:
            return state.users;
    }
}

export default updateUsers;