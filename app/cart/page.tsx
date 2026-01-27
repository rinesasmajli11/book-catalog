"use client";

import Link from "next/link";
import { useCart } from "@/contexts/CartContext";
import { Book } from "@/types/book";

export default function CartPage() {
  const { cart, removeFromCart, clearCart, cartCount } = useCart();

  if (cartCount === 0) {
    return (
      <main className="min-h-screen">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold mb-6">My Favorites</h1>
          <div className="text-center py-16 bg-gray-50 rounded-lg">
            <p className="text-xl text-gray-600 mb-4">Your favorites list is empty</p>
            <p className="text-gray-500 mb-6">Start adding books to your favorites!</p>
            <Link
              href="/products"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Browse Books
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-bold">My Favorites</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">
              {cartCount} {cartCount === 1 ? "book" : "books"}
            </span>
            {cartCount > 0 && (
              <button
                onClick={clearCart}
                className="text-sm text-red-600 hover:text-red-700 underline"
              >
                Clear All
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.map((book) => (
            <CartItem key={book.id} book={book} onRemove={removeFromCart} />
          ))}
        </div>
      </div>
    </main>
  );
}

function CartItem({ book, onRemove }: { book: Book; onRemove: (id: string) => void }) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow bg-white">
      <div className="flex flex-col h-full">
        {book.coverImage ? (
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-full h-48 object-cover rounded mb-4"
          />
        ) : (
          <div className="w-full h-48 bg-gray-200 rounded mb-4 flex items-center justify-center">
            <span className="text-gray-400">No Cover</span>
          </div>
        )}
        
        <div className="flex-grow">
          <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
          <p className="text-gray-600 text-sm mb-2">by {book.author}</p>
          {book.description && (
            <p className="text-gray-500 text-sm mb-4 line-clamp-2">{book.description}</p>
          )}
        </div>

        <button
          onClick={() => onRemove(book.id)}
          className="mt-4 w-full bg-red-50 text-red-600 py-2 px-4 rounded-lg hover:bg-red-100 transition-colors text-sm font-medium"
        >
          Remove from Favorites
        </button>
      </div>
    </div>
  );
}
