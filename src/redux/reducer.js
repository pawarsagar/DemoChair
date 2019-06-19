import { combineReducers, } from 'redux'


import { pricingReducer } from './pricingReducer';

import { itemReducer } from './itemReducers';



const reducer = combineReducers({
    pricing: pricingReducer,
    itemDetails: itemReducer

})
export default reducer