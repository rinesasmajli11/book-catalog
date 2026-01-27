"use client";

import Link from "next/link";
import Image from "next/image";
import FeaturesSlider from "@/components/FeaturesSlider/FeaturesSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import {
  BookOpen,
  Heart,
  LayoutDashboard,
  ShieldCheck,
  SlidersHorizontal,
  Users,
  BarChart3,
} from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const features = [
  {
    icon: BookOpen,
    title: "Curated Book Library",
    description:
      "A carefully structured library designed for effortless discovery and clarity.",
  },
  {
    icon: Heart,
    title: "Smart Favorites",
    description:
      "Save books you love and build a personal reading collection tailored to you.",
  },
  {
    icon: LayoutDashboard,
    title: "Personal Dashboard",
    description:
      "Track saved books, activity, and preferences from a clean control panel.",
  },
  {
    icon: SlidersHorizontal,
    title: "Advanced Filtering",
    description:
      "Filter by category, relevance, or popularity for precise navigation.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Admin Control",
    description:
      "Full content management with strong access control and data integrity.",
  },
  {
    icon: Users,
    title: "Role-Based Access",
    description:
      "Clear separation between users and administrators for scalability.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Understand engagement patterns and content performance with ease.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
  {/* Soft background glow */}
  <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-3xl" />
  <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-blue-300/10 rounded-full blur-3xl" />

  <div className="max-w-7xl mx-auto px-8 py-28 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

      {/* LEFT */}
      <div>
        <span className="inline-flex items-center gap-2 mb-6 text-sm font-semibold tracking-widest text-blue-600 uppercase">
          <span className="h-px w-10 bg-blue-600" />
          Book Catalog Platform
        </span>

        <h1 className="text-5xl md:text-6xl font-semibold leading-tight text-gray-900">
          Organize your books <br />
          <span className="text-blue-600">with clarity and elegance</span>
        </h1>

        <p className="mt-8 text-xl text-gray-600 max-w-xl leading-relaxed">
          BookCatalog is a refined digital platform that helps you explore,
          curate, and manage your book collection through a seamless and
          thoughtfully designed experience.
        </p>

        <div className="mt-12 flex flex-wrap gap-6">
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-10 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:shadow-xl transition-all"
          >
            Browse Books
          </Link>

          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center rounded-full border border-gray-300 px-10 py-4 text-lg font-semibold text-gray-700 hover:border-blue-300 hover:text-blue-600 transition"
          >
            Open Dashboard
          </Link>
        </div>
      </div>

      {/* RIGHT – IMAGE */}
      <div className="relative">
        <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-blue-200/40 via-transparent to-blue-300/30 blur-2xl" />

        <div className="relative w-full h-[420px] rounded-[28px] overflow-hidden border border-blue-100 shadow-[0_30px_80px_rgba(0,0,0,0.08)] bg-white">
          <Image
            src="/book-coverr.jpg"
            alt="Book cover"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  </div>
</section>


      {/* FEATURES – SWIPE / LUXURY */}
      <FeaturesSlider />

      <section className="py-28 bg-white">
  <div className="max-w-7xl mx-auto px-8">

    {/* HEADER */}
    <div className="max-w-2xl mb-20">
      <span className="inline-flex items-center gap-2 mb-6 text-sm font-semibold tracking-widest text-blue-600 uppercase">
        <span className="h-px w-8 bg-blue-600" />
        How It Works
      </span>

      <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
        A simple workflow <br />
        <span className="text-blue-600">designed for clarity</span>
      </h2>

      <p className="mt-6 text-xl text-gray-600 leading-relaxed">
        BookCatalog is built around a clean and intuitive flow that allows users
        and administrators to interact with the platform effortlessly.
      </p>
    </div>

    {/* STEPS */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-14">

      {/* STEP 1 */}
      <div className="relative bg-slate-50 rounded-3xl p-10 border border-blue-100 hover:shadow-lg transition">
        <span className="absolute -top-5 left-8 text-sm font-semibold text-white bg-blue-600 px-4 py-1 rounded-full">
          Step 01
        </span>

        <h3 className="mt-8 text-2xl font-semibold text-gray-900 mb-4">
          Explore the Library
        </h3>

        <p className="text-lg text-gray-600 leading-relaxed">
          Browse a structured catalog of books with refined navigation and
          advanced filtering options.
        </p>
      </div>

      {/* STEP 2 */}
      <div className="relative bg-slate-50 rounded-3xl p-10 border border-blue-100 hover:shadow-lg transition">
        <span className="absolute -top-5 left-8 text-sm font-semibold text-white bg-blue-600 px-4 py-1 rounded-full">
          Step 02
        </span>

        <h3 className="mt-8 text-2xl font-semibold text-gray-900 mb-4">
          Save & Organize
        </h3>

        <p className="text-lg text-gray-600 leading-relaxed">
          Add books to your favorites and manage your personal collection
          through a clean dashboard.
        </p>
      </div>

      {/* STEP 3 */}
      <div className="relative bg-slate-50 rounded-3xl p-10 border border-blue-100 hover:shadow-lg transition">
        <span className="absolute -top-5 left-8 text-sm font-semibold text-white bg-blue-600 px-4 py-1 rounded-full">
          Step 03
        </span>

        <h3 className="mt-8 text-2xl font-semibold text-gray-900 mb-4">
          Manage with Control
        </h3>

        <p className="text-lg text-gray-600 leading-relaxed">
          Administrators manage content securely with role-based access and
          clear data visibility.
        </p>
      </div>

    </div>
  </div>
</section>


      <section className="max-w-7xl mx-auto px-8 py-28">
  <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-white via-slate-50 to-slate-100 border border-blue-100 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">

    {/* Decorative gradient glow */}
    <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl" />

    {/* IMAGE */}
    <div className="absolute right-0 top-0 h-full w-[38%] hidden lg:block overflow-hidden">
      <Image
        src="/books.jpg"
        alt="Books collection"
        fill
        className="object-cover"
        priority
      />

      {/* Image overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/90" />
    </div>

    {/* CONTENT */}
    <div className="relative z-10 p-16 md:p-24 max-w-3xl">
      <span className="inline-flex items-center gap-2 mb-8 text-sm font-semibold tracking-widest text-blue-600 uppercase">
        <span className="h-px w-8 bg-blue-600" />
        Book Collection
      </span>

      <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
        Discover books that <br />
        <span className="text-blue-600">truly inspire you</span>
      </h2>

      <p className="mt-6 text-xl text-gray-600 leading-relaxed">
        Explore a refined book catalog designed for readers who value
        simplicity, structure, and elegance — all in one seamless experience.
      </p>

      <div className="mt-12 flex items-center gap-6">
        <Link
          href="/products"
          className="inline-flex items-center justify-center rounded-full bg-blue-600 px-10 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:shadow-xl transition-all"
        >
          View Books
        </Link>

        <Link
          href="/dashboard"
          className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition"
        >
          Open Dashboard →
        </Link>
      </div>
    </div>
  </div>
</section>



    </main>
  );
}
