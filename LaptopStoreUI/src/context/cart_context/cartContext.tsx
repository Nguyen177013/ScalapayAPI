import { createContext, useReducer, Dispatch } from "react";
import { cartReducer, initialState } from "./reducer";
type contextType = {
    state: cartItem[];
    dispatch: Dispatch<any>
}
type Props = {
    children: React.ReactNode;
}
export const CartContext  = createContext<contextType | null>(null);
const CartContextProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    return (
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    );
}
export default CartContextProvider;