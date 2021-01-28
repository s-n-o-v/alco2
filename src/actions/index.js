const itemsLoaded = (items) => {
    return {
        type: 'ITEMS_FETCH_SUCCESS',
        payload: items
    }
}

const itemsRequested = () => {
    return {
        type: 'ITEMS_FETCH_REQUEST'
    };
};

const itemsError = (error) => {
    return {
        type: 'ITEMS_FETCH_ERROR',
        payload: error
    };
};

const commentsLoaded = (comments) => {
    return {
        type: 'COMMENTS_FETCH_SUCCESS',
        payload: comments
    }
}

export {
    itemsLoaded,itemsRequested,itemsError, 
    commentsLoaded
}