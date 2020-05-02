import * as types from '../action/actionTypes';
let cart = []
let addToCart = (state = cart, action) => {
    switch (action.type) {
        case types.ADD_TO_CART: {
            if (state.length > 0 && state.find(item => item.id === action.product.id)) { action.product.quatity = action.product.quatity + 1; }
            else {
                action.product.quatity = 1;
                state.push(action.product);
            }

            return [...state];
        }
        case types.DECREASE_CART:
            console.log(action);
            {
                const getProduct = state.find(item => item.id === action.product.id);
                if (getProduct) getProduct.quatity = getProduct.quatity + action.changeValue;
                if (getProduct.quatity === 0)
                    state.splice(action.index, 1);
                return [...state];
            }
        case types.CLOSE_FORM: {
            state.splice(action.index, 1);
            return [...state];
        }
        default: return state;
    }
}

export default addToCart;