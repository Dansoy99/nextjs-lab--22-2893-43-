"use client"

import { createContext, useContext, useState } from "react"

interface Item {
  id: number
  name: string
  price: number
}

interface CartContextType {
  items: Item[]
  total: number
  addItem: (item: Item) => void
  removeItem: (id: number) => void
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: any) {
  const [items, setItems] = useState<Item[]>([])

  function addItem(item: Item) {
    setItems((prev) => [...prev, item])
  }

  function removeItem(id: number) {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }

  const total = items.reduce((sum, item) => sum + item.price, 0)

  return (
    <CartContext.Provider
      value={{ items, total, addItem, removeItem }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error("useCart must be used inside CartProvider")
  }

  return context
}