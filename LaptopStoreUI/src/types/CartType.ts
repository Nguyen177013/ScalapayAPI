type cartItem = {
    gtin: string,
    quantity: number,
    name: string,
    category: string,
    sku: number
    price: {
      currency: "EUR",
      amount: number
    }
  }
  type totalAmount = {
    currency: "EUR",
    amount: number
  }
  type consumer  = {
    phoneNumber: string,
    givenNames: string,
    surname: string,
    email: string
  }
  type shipping = {
    phoneNumber: string,
    countryCode: string,
    name: string,
    postcode: string,
    suburb: string,
    line1: string
  }
  type merchant = {
    redirectCancelUrl:"http://127.0.0.1:5173/",
    redirectConfirmUrl:"redirectConfirmUrl"
  }