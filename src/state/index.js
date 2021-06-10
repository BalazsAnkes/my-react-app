export const defaultState = {
    tabItems: [{
        label: 'description',
        contentId: 1
    }, {
        label: 'details',
        contentId: 2
    }],
    tabContents: [{
        id: 1,
        content: 'product.description'
    }, {
        id: 2,
        content: 'product.details'
    }],
    colors: [{
        label: 'black',
        image: 'ath-msr7-black.jpg'
    }, {
        label: 'brown',
        image: 'ath-msr7-brown.jpg'
    }]
};

export const activeState = {
    tabContentId: defaultState.tabContents[0].id,
    image: defaultState.colors[0].image
};

export const setDetail = (setState) => (currentState) => (contentId) => {
    setState({
        ...currentState,
        tabContentId: contentId
    });
};

export const setImage = (setState) => (currentState) => (image) => {
    setState({
        ...currentState,
        image
    });
};
