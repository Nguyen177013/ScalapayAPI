import { useContext } from "react";
import { CartContext } from "../context/cart_context/cartContext";
const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw Error("cartContext must be used inside an CartContextProvider");
    }
    return context;
}
export default useCartContext;