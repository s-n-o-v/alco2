import updateComments from './comments';

const reducer = (state, action) => {
    return {
        items: updateItems(state, action),
        comments: updateComments(state, action),
        users: updateUsers(state, action)
    }
}

export default reducer;