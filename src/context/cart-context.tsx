'use client'
import { createContext, ReactNode, useContext, useState } from 'react'

interface CartItem {
  productId: number
  quatity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (productId: number) => void
}

export const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addToCart(productId: number) {
    setCartItems((state) => {
      const productInCart = state.some((item) => item.productId === productId)

      if (productInCart) {
        return state.map((item) => {
          if (item.productId === productId) {
            return { ...item, quatity: item.quatity + 1 }
          } else {
            return item
          }
        })
      } else {
        return [...state, { productId, quatity: 1 }]
      }
    })
  }

  return (
    <CartContext.Provider
      value={{
        addToCart,
        items: cartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
