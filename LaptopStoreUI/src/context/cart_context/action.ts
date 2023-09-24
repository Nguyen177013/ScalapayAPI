import * as constants from "./constants"

export function setCart(payload : cartItem){
    return {
        type: constants.ADD_CART,
        payload
    }
}
export function updateCart(payload : cartItem){
    return {
        type: constants.UPDATE_CART,
        payload
    }
}