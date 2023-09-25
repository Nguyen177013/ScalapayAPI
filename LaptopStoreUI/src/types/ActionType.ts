type actionType = {
    type:string,
    payload: cartItem & cartItem[]
}

type responseType = {
    token:string,
    expires: string,
    checkoutUrl: string
}