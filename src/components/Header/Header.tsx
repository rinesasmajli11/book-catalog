"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { useCart } from "@/contexts/CartContext";
import { BookOpen, Heart, LogOut, Shield, Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // Kontrollon menunë në mobile
  const { cartCount } = useCart();
  const { data: session, status } = useSession();
  const user = session?.user as any;
  const pathname = usePathname();

  const isCompactMode = pathname.startsWith('/admin') || pathname.startsWith('/dashboard');

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Library" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#f8fafc]/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-20 md:h-24 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="group flex items-center gap-3 md:gap-4 flex-shrink-0">
          <div className="relative flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-2xl bg-white border border-blue-200 shadow-sm">
            <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-blue-700" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-lg md:text-xl font-semibold tracking-tight text-gray-900">
              BookCatalog
            </span>
            <span className="text-[10px] md:text-xs tracking-widest uppercase text-gray-500">
              Digital Library
            </span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className={`hidden lg:flex items-center font-medium text-gray-700 ${
          isCompactMode ? "gap-6 text-[14px]" : "gap-10 text-[16px]"
        }`}>
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className="relative group whitespace-nowrap">
              <span className="group-hover:text-blue-700 transition">{item.label}</span>
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-blue-600 transition-all group-hover:w-full" />
            </Link>
          ))}
          
          <Link href="/cart" className="relative flex items-center gap-2 text-gray-700 hover:text-blue-700 transition">
            <Heart className="w-4 h-4" />
            <span>Favorites</span>
            {cartCount > 0 && (
              <span className="absolute -top-3 -right-3 flex h-5 w-5 items-center justify-center rounded-full bg-blue-700 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>

        {/* USER & BURGER BUTTON */}
        <div className="flex items-center gap-4">
          {/* Desktop User Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {status !== "loading" && (
              session ? (
                <div className="flex items-center gap-3">
                  <Link href="/dashboard" className="rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition">
                    Dashboard
                  </Link>
                  <button onClick={() => signOut()} className="p-2 text-gray-500 hover:text-red-600">
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <Link href="/login" className="rounded-full bg-blue-700 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-800 transition">
                  Login
                </Link>
              )
            )}
          </div>

          {/* BURGER ICON (Mobile Only) */}
          <button 
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div className={`lg:hidden fixed inset-x-0 top-[80px] bg-white border-b border-gray-200 shadow-xl transition-all duration-300 ease-in-out ${
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
      }`}>
        <nav className="flex flex-col p-6 gap-6 font-medium text-gray-800">
          {navLinks.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              onClick={() => setIsOpen(false)}
              className="text-lg hover:text-blue-700 border-b border-gray-50 pb-2"
            >
              {item.label}
            </Link>
          ))}
          
          <Link href="/cart" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-lg">
            <Heart className="w-5 h-5 text-blue-700" />
            Favorites ({cartCount})
          </Link>

          <hr className="border-gray-100" />

          {/* Login/Dashboard inside Burger Menu */}
          {status !== "loading" && (
            session ? (
              <div className="flex flex-col gap-4">
                <Link 
                  href="/dashboard" 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center rounded-xl bg-gray-100 py-4 font-bold"
                >
                  Go to Dashboard
                </Link>
                <button 
                  onClick={() => signOut()}
                  className="flex items-center justify-center gap-2 text-red-600 font-bold"
                >
                  <LogOut className="w-5 h-5" /> Sign Out
                </button>
              </div>
            ) : (
              <Link 
                href="/login" 
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center rounded-xl bg-blue-700 py-4 text-white font-bold shadow-lg"
              >
                Login to Account
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}