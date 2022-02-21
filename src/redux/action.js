
import {
     SORT_ALPHABATE,
     SEARCH_RESULT,
     FILTER_EXPLICIT,
     SORT_DATE,
     SORT_QUALITY,
} from './actionTypes';

export const searchResult = (result)=>{
    return {
        type: SEARCH_RESULT,
        payload: result,
    }
}

export const sortAlphabet = ()=>{
    return {
        type: SORT_ALPHABATE,
    }
}
export const sortDate = ()=>{
    return {
        type: SORT_DATE,
    }
}
export const filterExplicit = ()=>{
    return {
        type: FILTER_EXPLICIT,
    }
}
export const sortQuality = ()=>{
    return {
        type: SORT_QUALITY,
    }
}