type cartItem = {
  gtin: string,
  quantity: number,
  name: string,
  category: string,
  sku: string
  price: {
    currency: "EUR",
    amount: string
  },
  imageUrl: string
}
type totalAmount = {
  currency: "EUR",
  amount: string
}
type consumer = {
  phoneNumber: string,
  givenNames: string,
  surname: string,
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
  redirectCancelUrl: "https://portal.integration.scalapay.com/success-url",
  redirectConfirmUrl: "https://portal.integration.scalapay.com/failure-url"
}