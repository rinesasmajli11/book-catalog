"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // 1. Importo këtë
import { useSession, signOut } from "next-auth/react";
import { useCart } from "@/contexts/CartContext";
import { BookOpen, Heart, LogOut, Shield } from "lucide-react";

export default function Header() {
  const { cartCount } = useCart();
  const { data: session, status } = useSession();
  const user = session?.user as any;
  
  const pathname = usePathname(); // 2. Merre rrugën aktuale

  // 3. Kontrollo nëse jemi në Dashboard ose Admin
  const isCompactMode = pathname.startsWith('/admin') || pathname.startsWith('/dashboard');

  return (
    <header className="sticky top-0 z-50 bg-[#f8fafc]/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between gap-4">

        {/* LOGO */}
        <Link href="/" className="group flex items-center gap-4 flex-shrink-0">
          <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-blue-200 shadow-sm">
            <BookOpen className="w-6 h-6 text-blue-700" />
          </div>

          <div className="flex flex-col leading-none">
            <span className="text-xl font-semibold tracking-tight text-gray-900">
              BookCatalog
            </span>
            <span className="text-xs tracking-widest uppercase text-gray-500">
              Digital Library
            </span>
          </div>
        </Link>

        {/* NAV */}
        {/* 4. NDRYSHIMI KËTU: gap-14 bëhet gap-6 dhe text-[17px] bëhet text-[14px] nëse është compact mode */}
        <nav className={`hidden lg:flex items-center font-medium text-gray-700 transition-all ${
          isCompactMode ? "gap-6 text-[14px]" : "gap-14 text-[17px]"
        }`}>
          {[
            { href: "/", label: "Home" },
            { href: "/products", label: "Library" },
            { href: "/about", label: "About the Platform" },
            { href: "/contact", label: "Get in Touch" },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="relative group whitespace-nowrap">
              <span className="group-hover:text-blue-700 transition">
                {item.label}
              </span>
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-blue-600 transition-all group-hover:w-full" />
            </Link>
          ))}

          <Link
            href="/cart"
            className="relative flex items-center gap-2 text-gray-700 hover:text-blue-700 transition"
          >
            <Heart className="w-4 h-4" />
            <span className="whitespace-nowrap">Favorites</span>
            {cartCount > 0 && (
              <span className="absolute -top-3 -right-4 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-blue-700 px-1.5 text-[11px] font-semibold text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>

        {/* USER */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {status === "loading" ? (
            <span className="text-sm text-gray-400">Loading…</span>
          ) : session ? (
            <>
              <Link
                href="/dashboard"
                className="hidden sm:inline-flex rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-800 hover:border-blue-300 hover:text-blue-700 transition"
              >
                Dashboard
              </Link>

              {user?.role === "admin" && (
                <Link
                  href="/admin"
                  className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-800 border border-purple-200 hover:bg-purple-100 transition"
                >
                  <Shield className="w-4 h-4" />
                  Admin
                </Link>
              )}

              <div className="flex items-center gap-2">
                <span className="hidden xl:inline-block rounded-full bg-white border px-3 py-2 text-xs font-medium text-gray-800 shadow-sm truncate max-w-[120px]">
                  {user?.name || user?.email}
                </span>

                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="p-2 text-gray-500 hover:text-red-600 transition"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            </>
          ) : (
            <Link
              href="/login"
              className="rounded-full bg-blue-700 px-8 py-3 text-sm font-semibold text-white shadow-lg hover:bg-blue-800 transition-all"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}