const itemsLoaded = (items) => {
    return {
        type: 'ITEMS_FETCH_SUCCESS',
        payload: items
    }
}

const commentsLoaded = (comments) => {
    return {
        type: 'COMMENTS_FETCH_SUCCESS',
        payload: comments
    }
}

export {
    itemsLoaded,
    commentsLoaded
}