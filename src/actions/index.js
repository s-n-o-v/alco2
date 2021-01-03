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

const fetchItems = (alcoService, dispatch) => () => {
    dispatch(itemsRequested());

    const _items = [
        {
            id: 1,
            name: "Item Hui",
            img: "http://placehold.it/700x400",
            cat: 1,
            descr: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.",
            rate: 2,
            comments: [
                {
                    name: "Edgar",
                    comment: "tro-lo-lo",
                    rate: 4
                },
                {
                    name: "Frank",
                    comment: "eric lol",
                    rate: 4
                },
                {
                    name: "Andrey",
                    comment: "everybody dance",
                    rate: 4
                },
            ],
            total: 23
        },
        {
            id: 2,
            name: "Item Two",
            img: "http://placehold.it/700x400",
            cat: 2,
            descr: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
            rate: 4,
            comments: [
                {
                    name: "Edgar",
                    comment: "tro-lo-lo",
                    rate: 4
                },
                {
                    name: "Frank",
                    comment: "eric lol",
                    rate: 4
                },
                {
                    name: "Andrey",
                    comment: "everybody dance",
                    rate: 4
                },
            ],
            total: 3
        },
        {
            id: 3,
            name: "Item Tree",
            img: "http://placehold.it/700x400",
            cat: 3,
            descr: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
            rate: 4,
            comments: [
                {
                    name: "Edgar",
                    comment: "tro-lo-lo",
                    rate: 4
                },
                {
                    name: "Frank",
                    comment: "eric lol",
                    rate: 4
                },
                {
                    name: "Andrey",
                    comment: "everybody dance",
                    rate: 4
                },
            ],
            total: 11
        },
        {
            id: 4,
            name: "Item Four",
            img: "http://placehold.it/700x400",
            cat: 1,
            descr: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
            rate: 4,
            comments: [
                {
                    name: "Edgar",
                    comment: "tro-lo-lo",
                    rate: 4
                },
                {
                    name: "Frank",
                    comment: "eric lol",
                    rate: 4
                },
                {
                    name: "Andrey",
                    comment: "everybody dance",
                    rate: 4
                },
            ],
            total: 3
        },
        {
            id: 5,
            name: "Item Five",
            img: "http://placehold.it/700x400",
            cat: 1,
            descr: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
            rate: 4,
            comments: [
                {
                    name: "Edgar",
                    comment: "tro-lo-lo",
                    rate: 4
                },
                {
                    name: "Frank",
                    comment: "eric lol",
                    rate: 4
                },
                {
                    name: "Andrey",
                    comment: "everybody dance",
                    rate: 4
                },
            ],
            total: 3
        },
        {
            id: 6,
            name: "Item Six",
            img: "http://placehold.it/700x400",
            cat: 1,
            descr: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
            rate: 4,
            comments: [
                {
                    name: "Edgar",
                    comment: "tro-lo-lo",
                    rate: 4
                },
                {
                    name: "Frank",
                    comment: "eric lol",
                    rate: 4
                },
                {
                    name: "Andrey",
                    comment: "everybody dance",
                    rate: 4
                },
            ],
            total: 3
        },
    ];

    setTimeout(()=>{
        dispatch(itemsLoaded(_items));
    }, 1000);
};

const commentsLoaded = (comments) => {
    return {
        type: 'COMMENTS_FETCH_SUCCESS',
        payload: comments
    }
}

export {
    itemsLoaded,itemsRequested,itemsError,fetchItems,
    commentsLoaded
}