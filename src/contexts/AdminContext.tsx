"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Book } from "@/types/book";

interface AdminContextType {
  books: Book[];
  addBook: (book: Omit<Book, "id">) => void;
  updateBook: (id: string, book: Partial<Book>) => void;
  deleteBook: (id: string) => void;
  getBook: (id: string) => Book | undefined;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

const STORAGE_KEY = "bookcatalog_admin_books";

// Initial demo books
const initialBooks: Book[] = [
  {
    id: "1",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A classic American novel set in the Jazz Age, exploring themes of wealth, love, and the American Dream.",
    price: 12.99,
    isbn: "978-0-7432-7356-5",
  },
  {
    id: "2",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "A gripping tale of racial injustice and childhood innocence in the American South.",
    price: 14.99,
    isbn: "978-0-06-112008-4",
  },
  {
    id: "3",
    title: "1984",
    author: "George Orwell",
    description: "A dystopian novel about totalitarian surveillance and thought control.",
    price: 13.99,
    isbn: "978-0-452-28423-4",
  },
];

export function AdminProvider({ children }: { children: ReactNode }) {
  const [books, setBooks] = useState<Book[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load books from localStorage on mount
  useEffect(() => {
    try {
      const storedBooks = localStorage.getItem(STORAGE_KEY);
      if (storedBooks) {
        setBooks(JSON.parse(storedBooks));
      } else {
        // Initialize with demo books if no stored data
        setBooks(initialBooks);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(initialBooks));
      }
    } catch (error) {
      console.error("Error loading books from localStorage:", error);
      setBooks(initialBooks);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  // Save books to localStorage whenever they change
  useEffect(() => {
    if (isHydrated) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
      } catch (error) {
        console.error("Error saving books to localStorage:", error);
      }
    }
  }, [books, isHydrated]);

  const addBook = (bookData: Omit<Book, "id">) => {
    const newBook: Book = {
      ...bookData,
      id: Date.now().toString(),
    };
    setBooks((prev) => [...prev, newBook]);
  };

  const updateBook = (id: string, bookData: Partial<Book>) => {
    setBooks((prev) =>
      prev.map((book) => (book.id === id ? { ...book, ...bookData } : book))
    );
  };

  const deleteBook = (id: string) => {
    setBooks((prev) => prev.filter((book) => book.id !== id));
  };

  const getBook = (id: string) => {
    return books.find((book) => book.id === id);
  };

  return (
    <AdminContext.Provider
      value={{
        books,
        addBook,
        updateBook,
        deleteBook,
        getBook,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error("useAdmin must be used within an AdminProvider");
  }
  return context;
}
