//Pagination action

export const PREV_PAGE = 'PREV_PAGE';
export const NEXT_PAGE = 'NEXT_PAGE';
export const GO_PAGE = 'GO_PAGE';
export const COUNT_ITEM = 'COUNT_ITEM';


export const nextPage = () => {
    return {
        type: NEXT_PAGE
    }
};

export const prevPage = () => {
    return {
        type: PREV_PAGE
    }
};

export const goPage = (n) => {
    return {
        type: GO_PAGE,
        currentPage: n
    }
};

export const countItem = (n) => {
    return {
        type: COUNT_ITEM,
        totalItemsCount: n
    }
}