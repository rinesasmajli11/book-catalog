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

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
        {/* Soft background glow */}
        <div className="absolute -top-40 -left-40 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-300/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* LEFT - CONTENT */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <span className="inline-flex items-center gap-2 mb-4 md:mb-6 text-xs md:text-sm font-semibold tracking-widest text-blue-600 uppercase justify-center lg:justify-start">
                <span className="h-px w-6 md:w-10 bg-blue-600" />
                Book Catalog Platform
              </span>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Organize your books <br className="hidden md:block" />
                <span className="text-blue-600">with clarity and elegance</span>
              </h1>

              <p className="mt-6 md:mt-8 text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                BookCatalog is a modern digital platform that helps you explore,
                curate, and manage your book collection through a seamless experience.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-all w-full sm:w-auto"
                >
                  Browse Books
                </Link>

                <Link
                  href="/dashboard"
                  className="inline-flex items-center justify-center rounded-full border border-gray-300 px-8 py-4 text-lg font-semibold text-gray-700 hover:border-blue-300 hover:text-blue-600 transition w-full sm:w-auto"
                >
                  Open Dashboard
                </Link>
              </div>
            </div>

            {/* RIGHT – IMAGE */}
            <div className="relative order-1 lg:order-2 px-4 md:px-0">
              <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-blue-200/40 via-transparent to-blue-300/30 blur-2xl" />
              <div className="relative w-full h-[300px] md:h-[420px] rounded-[28px] overflow-hidden border border-blue-100 shadow-xl bg-white">
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

      {/* FEATURES */}
      <FeaturesSlider />

      {/* HOW IT WORKS */}
      <section className="py-16 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {/* HEADER */}
          <div className="max-w-2xl mb-12 md:mb-20 text-center md:text-left">
            <span className="inline-flex items-center gap-2 mb-4 text-sm font-semibold tracking-widest text-blue-600 uppercase justify-center md:justify-start">
              <span className="h-px w-8 bg-blue-600" />
              How It Works
            </span>

            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight">
              A simple workflow <br className="hidden md:block" />
              <span className="text-blue-600">designed for clarity</span>
            </h2>
          </div>

          {/* STEPS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-14">
            {[ 
              { step: "01", title: "Explore the Library", desc: "Browse a structured catalog of books with refined navigation and filtering." },
              { step: "02", title: "Save & Organize", desc: "Add books to your favorites and manage your personal collection easily." },
              { step: "03", title: "Manage with Control", desc: "Administrators manage content securely with role-based access." }
            ].map((item, idx) => (
              <div key={idx} className="relative bg-slate-50 rounded-3xl p-8 md:p-10 border border-blue-100 hover:shadow-lg transition text-center md:text-left">
                <span className="absolute -top-4 left-1/2 md:left-8 -translate-x-1/2 md:translate-x-0 text-sm font-semibold text-white bg-blue-600 px-4 py-1 rounded-full">
                  Step {item.step}
                </span>
                <h3 className="mt-6 text-xl md:text-2xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-28">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-white via-slate-50 to-slate-100 border border-blue-100 shadow-xl">
          
          <div className="absolute right-0 top-0 h-full w-[38%] hidden lg:block overflow-hidden">
            <Image src="/books.jpg" alt="Books" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/90" />
          </div>

          <div className="relative z-10 p-8 md:p-16 lg:p-24 max-w-3xl text-center lg:text-left">
            <span className="inline-flex items-center gap-2 mb-6 text-sm font-semibold tracking-widest text-blue-600 uppercase justify-center lg:justify-start">
              <span className="h-px w-8 bg-blue-600" />
              Book Collection
            </span>

            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight">
              Discover books that <br className="hidden md:block" />
              <span className="text-blue-600">truly inspire you</span>
            </h2>

            <div className="mt-10 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <Link href="/products" className="bg-blue-600 text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition w-full sm:w-auto">
                View Books
              </Link>
              <Link href="/dashboard" className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition">
                Open Dashboard →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
