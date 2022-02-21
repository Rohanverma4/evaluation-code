
import {
    SORT_ALPHABATE,
    SEARCH_RESULT,
    FILTER_EXPLICIT,
    SORT_DATE,
    SORT_QUALITY,
} from './actionTypes';

const init = {
    result: [],
}                 
export const reducer = (store = init, action) => {
    switch(action.type) {
        case SEARCH_RESULT:
            return { ...store, result: action.payload}
        case SORT_ALPHABATE:
            return { ...store, result: [...sortAlphabet(store.result)]}
        case SORT_QUALITY:
            return { ...store, result: [...sortQuality(store.result)]}
        case SORT_DATE:
            return { ...store, result: [...sortDate(store.result)]}
        case FILTER_EXPLICIT:
            return { ...store, result: [...filterExplicit(store.result)]}
        default:
            return store;
    }
};

const sortAlphabet = (arr) => {
    var sortedArr = arr.sort((x,y) => {
        return x.title > y.title ? 1 : x.title <= y.title ? -1 : 0;
    })
    return sortedArr
}


const sortDate = (arr) => {
    var sortedArr = arr.sort((x,y) => {
        return x.creation_date > y.creation_date ? 1 : x.creation_date <= y.creation_date ? -1 : 0;
    })
    return sortedArr
}


const sortQuality = (arr) => {
    var sortedArr = arr.sort((x,y) => {
        return x.quality > y.quality ? 1 : x.quality <= y.quality ? -1 : 0;
    })
    return sortedArr
}


const filterExplicit = (arr) => {
    var sortedArr = arr.filter((item) => item.explicit === true);
    
    return sortedArr
}