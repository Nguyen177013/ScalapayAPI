import * as constants from "./constants"
export const initialState: cartItem[] = [];

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
                state.push(action.payload);
            }
            return state;
        case constants.UPDATE_CART:
            const updateState = action.payload;
            state = updateState;
            return state;
        case constants.DELETE_CART:
            state = [];
            return state;
        default:
            return state;
    }
}