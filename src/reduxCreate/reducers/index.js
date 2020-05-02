import { combineReducers } from 'redux';
import addToCart from './addToCart';

const myReducer = combineReducers(
    {
        addToCart
    }
)
export default myReducer;