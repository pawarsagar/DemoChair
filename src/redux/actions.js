import { DISCOUNT } from "./type";


export function dispatchToReducer(type, data) {
    return {
        type,
        data
    }
}


export function discount() {
    return (dispatch, getState) => {
        dispatch(dispatchToReducer(DISCOUNT, 10))
    }
}