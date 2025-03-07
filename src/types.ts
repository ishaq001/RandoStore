export type TItem = {
  name: string
  id: number
  img: string
  price: string
}

export type TItemLIst = {
  addToCart: (item: TItem) => void
}

export type TCheckout = {
  cart: TItem[]
  removeFromCart: (itemIndex: number) => void
}
