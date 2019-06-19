import * as types from './type'



function createReducer(initialState, handlers) {
    return function reducer(state = initialState, action) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action)
        }
        else {
            return state
        }
    }
}



const initialState = {

    subToal:102.96,
    savings:3.85,
    tax:8.92,
    total:108.03,
    zip:85050
  

}

export const pricingReducer = createReducer(initialState, {
    


})