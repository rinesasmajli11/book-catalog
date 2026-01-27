"use client";

import Image from "next/image";
import { Heart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useAdmin } from "@/contexts/AdminContext";
import { Book } from "@/types/book";

const bookImages = ["/book1.jpg", "/book2.jpg", "/books.jpg"];

export default function ProductsPage() {
  const { addToCart, isInCart } = useCart();
  const { books } = useAdmin();

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 py-24">

        {/* HEADER */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-semibold text-gray-900">
            Browse the Collection
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            A curated selection of books chosen for clarity, depth, and lasting value.
          </p>
        </div>

        {/* GRID – 4 BOOKS PER ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {books.slice(0, 12).map((book, index) => (
            <BookCard
              key={book.id}
              book={book}
              image={bookImages[index % bookImages.length]}
              onToggleFavorite={addToCart}
              isFavorite={isInCart(book.id)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

function BookCard({
  book,
  image,
  onToggleFavorite,
  isFavorite,
}: {
  book: Book;
  image: string;
  onToggleFavorite: (book: Book) => void;
  isFavorite: boolean;
}) {
  return (
    <div className="group relative rounded-[22px] border border-blue-100 bg-white overflow-hidden transition-all hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]">

      {/* BOOK COVER */}
      <div className="relative h-[320px] w-full bg-gradient-to-br from-slate-100 to-slate-200">
        <Image
          src={image}
          alt={book.title}
          fill
          className="object-contain p-8 transition-transform duration-500 group-hover:scale-[1.04]"
        />

        {/* FAVORITE */}
        <button
          onClick={() => onToggleFavorite(book)}
          className={`absolute top-4 right-4 flex items-center justify-center rounded-full p-2 backdrop-blur-md transition ${
            isFavorite
              ? "bg-red-600 text-white shadow-md"
              : "bg-white/80 text-gray-600 hover:text-red-500"
          }`}
        >
          <Heart className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`} />
        </button>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-1">
          {book.title}
        </h3>

        <p className="text-sm text-gray-500 mb-3">
          {book.author}
        </p>

        {book.description && (
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-4">
            {book.description}
          </p>
        )}

        {book.price && (
          <p className="text-base font-semibold text-blue-600">
            ${book.price.toFixed(2)}
          </p>
        )}
      </div>
    </div>
  );
}
