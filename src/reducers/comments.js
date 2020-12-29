const updateCommens = (state, action) => {
    if (state === undefined) {
        return {
            comments: [],
            loading: false,
            error: null
        }
    }

    switch (action.type) {
        case 'COMMENTS_FETCH_REQUEST':
            return {
                comments: [],
                loading: true,
                error: false
            };
        case 'COMMENTS_FETCH_SUCCESS':
            return {
                comments: action.payload,
                loading: false,
                error: null
            };
        case 'COMMENTS_FETCH_ERROR':
            return {
                comments: [],
                loading: false,
                error: true
            };
        default:
            return state.comments;
        }
}