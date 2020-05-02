import * as types from './actionTypes';

export const addToCart = (product) => {
    return {
        type: types.ADD_TO_CART,
        product: product
    }
}
export const decreaseCart = (product, index, changeValue) => {
    return {
        type: types.DECREASE_CART,
        product,
        index,
        changeValue
    }
}
export const closeForm = (index) => {
    return {
        type: types.CLOSE_FORM,
        index
    }
}