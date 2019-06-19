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
    itemName: 'Gaming Chair',
    details: 'Essentials by OFM Recliner 5000 , Gaming Suite-GM9605',
    quantity: 1,
    price: '102.96'


}

export const itemReducer = createReducer(initialState, {
    [types.DISCOUNT](state, action) {
        let value = Number(state.price)
        let disValue = value - (value * (10 / 100))
        return {
            ...state,
            price:disValue.toFixed(2)
        }
    },



})