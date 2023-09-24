export function reduceAmount(itemCart : cartItem[]){
    return itemCart.reduce((total, currentValue)=>{
        return total + (currentValue.quantity * Number.parseInt(currentValue.price.amount))
    },0)
}