"use client"

import { useCart } from "@/lib/cart-context"

export default function ShopPage() {
  const { addItem, items, total } = useCart()

  const products = [
    { id: 1, name: "Laptop", price: 800 },
    { id: 2, name: "Mouse", price: 20 },
    { id: 3, name: "Keyboard", price: 50 }
  ]

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Shop
      </h1>

      <div className="space-y-4">
        {products.map((p) => (
          <div key={p.id} className="border p-4">
            <h2>{p.name}</h2>
            <p>${p.price}</p>

            <button
              onClick={() => addItem(p)}
              className="bg-green-500 text-white px-3 py-1 mt-2"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h2 className="font-bold">
          Cart Items: {items.length}
        </h2>

        <p>Total: ${total}</p>
      </div>
    </div>
  )
}