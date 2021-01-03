const updateItems = (state, action) => {
    if (state === undefined) {
        return {
            items: [],
            loading: false,
            error: null
        }
    }

    switch (action.type) {
        case 'ITEMS_FETCH_REQUEST':
            return {
                items: [],
                loading: true,
                error: false
            };
        case 'ITEMS_FETCH_SUCCESS':
            return {
                items: action.payload,
                loading: false,
                error: null
            };
        case 'ITEMS_FETCH_ERROR':
            return {
                items: [],
                loading: false,
                error: true
            };
        default:
            return state.items;
        }
}

export default updateItems;