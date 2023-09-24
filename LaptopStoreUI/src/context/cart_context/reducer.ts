import * as constants from "./constants"
const cartString = sessionStorage.getItem("cart");
let cartData : cartItem[] = [];
if(cartString !=null){
    cartData = JSON.parse(cartString);
}
export const initialState: cartItem[] = cartData;

export function cartReducer(state: cartItem[], action: actionType) {
    switch (action.type) {
        case constants.ADD_CART:
            let isDuplicate: boolean = false;
            state.map(item => {
                if (item.gtin == action.payload.gtin) {
                    item.quantity++;
                    isDuplicate = true;
                    return;
                }
            })
            if (!isDuplicate) {
                state = [...state, action.payload]
            }
            sessionStorage.setItem("cart",JSON.stringify(state));
            return state;
        case constants.UPDATE_CART:
            state = state.map(item =>{
                if(item.gtin == action.payload.gtin){
                    return {...item, quantity: action.payload.quantity}
                }
                return item;
            })
            sessionStorage.setItem("cart",JSON.stringify(state));
            return state;
        case constants.DELETE_CART:
            state = [];
            return state;
        default:
            return state;
    }
}