"use client";

import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useAdmin } from "@/contexts/AdminContext";
import { Book } from "@/types/book";
import {
  Plus,
  Pencil,
  Trash2,
  BookOpen,
  ShieldCheck,
  X,
} from "lucide-react";

type BookFormData = Omit<Book, "id">;

export default function AdminPanelClient() {
  const { books, addBook, updateBook, deleteBook } = useAdmin();
  const [editingBook, setEditingBook] = useState<Book | null>(null);
  const [showForm, setShowForm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<BookFormData>();

  const stats = useMemo(() => {
    const total = books.length;
    const priced = books.filter((b) => typeof b.price === "number" && b.price > 0).length;
    const withIsbn = books.filter((b) => !!b.isbn).length;
    return { total, priced, withIsbn };
  }, [books]);

  const openCreate = () => {
    setEditingBook(null);
    setShowForm(true);
    reset();
  };

  const openEdit = (book: Book) => {
    setEditingBook(book);
    setValue("title", book.title);
    setValue("author", book.author);
    setValue("description", book.description || "");
    setValue("price", book.price);
    setValue("isbn", book.isbn || "");
    setShowForm(true);
  };

  const closeForm = () => {
    setEditingBook(null);
    setShowForm(false);
    reset();
  };

  const onSubmit = (data: BookFormData) => {
    if (editingBook) updateBook(editingBook.id, data);
    else addBook(data);
    closeForm();
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this book?")) deleteBook(id);
  };

  return (
    <div className="space-y-10">
      {/* HEADER */}
      <div className="relative overflow-hidden rounded-[28px] border border-blue-100 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-10 shadow-sm">
        <div className="absolute -top-28 -left-28 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-28 -right-28 w-80 h-80 bg-blue-300/10 rounded-full blur-3xl" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 backdrop-blur px-5 py-2">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase">
                Admin Studio
              </span>
            </div>

            <h1 className="mt-6 text-4xl md:text-5xl font-semibold text-gray-900">
              Manage the BookCatalog collection
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl leading-relaxed">
              Add new titles, refine metadata, and keep the library clean and curated — the way a real platform should feel.
            </p>
          </div>

          <button
            onClick={openCreate}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:shadow-xl transition-all"
          >
            <Plus className="w-5 h-5" />
            Add new book
          </button>
        </div>

        {/* STATS */}
        <div className="relative z-10 mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <StatCard label="Total titles" value={String(stats.total)} />
          <StatCard label="With price" value={String(stats.priced)} />
          <StatCard label="With ISBN" value={String(stats.withIsbn)} />
        </div>
      </div>

      {/* FORM MODAL */}
      {showForm && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-6">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={closeForm}
          />
          <div className="relative w-full max-w-2xl rounded-[28px] border border-blue-100 bg-white shadow-[0_30px_90px_rgba(0,0,0,0.18)] overflow-hidden">
            <div className="flex items-center justify-between px-8 py-6 border-b border-gray-200 bg-slate-50">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {editingBook ? "Edit book" : "Add new book"}
                  </h2>
                  <p className="text-sm text-gray-600">
                    Keep details clear and consistent — luxury is in the structure.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={closeForm}
                className="h-10 w-10 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition flex items-center justify-center"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* TITLE */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("title", { required: "Title is required" })}
                    placeholder="e.g. The Great Gatsby"
                    className={`w-full rounded-2xl border bg-white px-5 py-3.5 text-gray-900 placeholder:text-gray-400 outline-none transition focus:ring-4 focus:ring-blue-100 ${
                      errors.title ? "border-red-400" : "border-gray-200 focus:border-blue-300"
                    }`}
                  />
                  {errors.title && (
                    <p className="mt-2 text-sm text-red-500">{errors.title.message}</p>
                  )}
                </div>

                {/* AUTHOR */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Author <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("author", { required: "Author is required" })}
                    placeholder="e.g. F. Scott Fitzgerald"
                    className={`w-full rounded-2xl border bg-white px-5 py-3.5 text-gray-900 placeholder:text-gray-400 outline-none transition focus:ring-4 focus:ring-blue-100 ${
                      errors.author ? "border-red-400" : "border-gray-200 focus:border-blue-300"
                    }`}
                  />
                  {errors.author && (
                    <p className="mt-2 text-sm text-red-500">{errors.author.message}</p>
                  )}
                </div>
              </div>

              {/* DESCRIPTION */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Description
                </label>
                <textarea
                  {...register("description")}
                  rows={4}
                  placeholder="A short editorial description that feels premium…"
                  className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-3.5 text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100 resize-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* PRICE */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Price
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    {...register("price", {
                      valueAsNumber: true,
                      min: { value: 0, message: "Price must be positive" },
                    })}
                    placeholder="0.00"
                    className={`w-full rounded-2xl border bg-white px-5 py-3.5 text-gray-900 placeholder:text-gray-400 outline-none transition focus:ring-4 focus:ring-blue-100 ${
                      errors.price ? "border-red-400" : "border-gray-200 focus:border-blue-300"
                    }`}
                  />
                  {errors.price && (
                    <p className="mt-2 text-sm text-red-500">{errors.price.message}</p>
                  )}
                </div>

                {/* ISBN */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    ISBN
                  </label>
                  <input
                    {...register("isbn")}
                    placeholder="e.g. 978-0743273565"
                    className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-3.5 text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:shadow-xl transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {editingBook ? "Update book" : "Add book"}
                </button>
                <button
                  type="button"
                  onClick={closeForm}
                  className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-8 py-4 text-lg font-semibold text-gray-800 hover:border-blue-200 hover:bg-slate-50 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* TABLE */}
      <div className="rounded-[28px] border border-blue-100 bg-white shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-8 py-6 border-b border-gray-200 bg-slate-50">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Library titles</h3>
            <p className="text-sm text-gray-600">
              Keep the collection consistent — clean metadata, clean experience.
            </p>
          </div>
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-700">
            {books.length} items
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white">
              <tr className="border-b border-gray-200">
                <th className="px-8 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-8 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Author
                </th>
                <th className="px-8 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-8 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  ISBN
                </th>
                <th className="px-8 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {books.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-8 py-14">
                    <div className="rounded-2xl border border-blue-100 bg-slate-50 p-10 text-center">
                      <p className="text-lg font-semibold text-gray-900">
                        No titles yet
                      </p>
                      <p className="mt-2 text-gray-600">
                        Add your first curated book to begin building the collection.
                      </p>
                      <button
                        onClick={openCreate}
                        className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:shadow-xl transition-all"
                      >
                        <Plus className="w-5 h-5" />
                        Add first book
                      </button>
                    </div>
                  </td>
                </tr>
              ) : (
                books.map((book) => (
                  <tr key={book.id} className="hover:bg-slate-50/70 transition">
                    <td className="px-8 py-5">
                      <div className="text-sm font-semibold text-gray-900">
                        {book.title}
                      </div>
                      {book.description && (
                        <div className="text-sm text-gray-600 line-clamp-1 max-w-[520px]">
                          {book.description}
                        </div>
                      )}
                    </td>

                    <td className="px-8 py-5 text-sm text-gray-900">
                      {book.author}
                    </td>

                    <td className="px-8 py-5 text-sm text-gray-900">
                      {typeof book.price === "number" ? (
                        <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                          ${book.price.toFixed(2)}
                        </span>
                      ) : (
                        <span className="text-gray-500">—</span>
                      )}
                    </td>

                    <td className="px-8 py-5 text-sm text-gray-600">
                      {book.isbn || "—"}
                    </td>

                    <td className="px-8 py-5 text-right">
                      <div className="inline-flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => openEdit(book)}
                          className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-800 hover:border-blue-200 hover:bg-slate-50 transition"
                        >
                          <Pencil className="w-4 h-4 text-blue-600" />
                          Edit
                        </button>

                        <button
                          type="button"
                          onClick={() => handleDelete(book.id)}
                          className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-100 transition"
                        >
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-6">
      <p className="text-sm font-semibold text-gray-500">{label}</p>
      <p className="mt-3 text-3xl font-semibold text-gray-900">{value}</p>
    </div>
  );
}
