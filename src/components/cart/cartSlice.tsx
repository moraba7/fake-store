import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type cartItem = {
  id: number
  title: string
  price: number
  quantity: number
  totalPrice: number
  image: string
  category: string
  discount?: number
  discountedPrice?: number
}

type cartState = {
  items: cartItem[]
}

const initialState: cartState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<
        Omit<cartItem, 'totalPrice' | 'discountedPrice'> & {
          discount?: number
          quantity?: number
        }
      >
    ) => {
      const product = action.payload
      const basePrice = Number(product.price)
      const incomingDiscount = Number(product.discount ?? 0)
      const qty = Number(product.quantity ?? 1)
      const discountedUnitPrice = basePrice * (1 - incomingDiscount)
      const totalPrice = discountedUnitPrice * qty
      // const finalPrice = discount > 0 ? basePrice * (1 - discount) : basePrice
      const existing = state.items.find((i) => i.id === product.id)

      if (existing) {
        existing.quantity += qty
        if (!Number.isNaN(incomingDiscount) && incomingDiscount > 0) {
          existing.discount = incomingDiscount
        }
        existing.discountedPrice =
          existing.price * (1 - (existing.discount ?? 0))
        existing.totalPrice =
          (existing.discountedPrice ?? existing.price) * existing.quantity
      } else {
        state.items.push({
          id: product.id,
          title: product.title,
          image: product.image,
          category: product.category,
          price: basePrice,
          discount: incomingDiscount,
          discountedPrice: discountedUnitPrice,
          quantity: qty,
          totalPrice,
          // ...product,
          // price: basePrice,
          // discount,
          // discountedPrice: finalPrice
          // quantity: 1,
          // totalPrice: finalprice,
        })
      }
    },
    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      const id = action.payload.id
      const existing = state.items.find((item) => item.id === id)

      if (!existing) return

      if (existing.quantity > 1) {
        existing.quantity -= 1
        existing.discountedPrice =
          existing.price * (1 - (existing.discount ?? 0))
        existing.totalPrice =
          (existing.discountedPrice ?? existing.price) * existing.quantity
      } else {
        state.items = state.items.filter((item) => item.id !== id)
      }
    },

    removeCompletely: (state, action: PayloadAction<{ id: number }>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id)
    },

    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const item = state.items.find((i) => i.id === action.payload.id)
      if (item) {
        item.quantity = action.payload.quantity
        item.discountedPrice = item.price * (1 - (item.discount ?? 0))
        item.totalPrice = (item.discountedPrice ?? item.price) * item.quantity
      }
    },

    clearCart: (state) => {
      state.items = []
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  clearCart,
  updateQuantity,
  removeCompletely,
} = cartSlice.actions

export default cartSlice.reducer

// const product = {
//   '17145152797348238': {
//     id: 1,
//     count: 3,
//     name: 'shi',
//   },
//   2: {
//     id: 1,
//     count: 3,
//     name: 'shi',
//   },
// }
// const id = 1
// product[id].count - 1
