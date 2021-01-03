import updateComments from './comments';
import updateUsers from './users';
import updateItems from './items';

const reducer = (state, action) => {
    return {
        items: updateItems(state, action),
        comments: updateComments(state, action),
        users: updateUsers(state, action)
    }
}

export default reducer;