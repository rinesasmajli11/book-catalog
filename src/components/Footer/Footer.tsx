"use client";

import Link from "next/link";
import { BookOpen, Mail, MapPin, Phone, Github, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden border-t border-slate-200 bg-white">
      {/* Background Glows - Luxury Touch */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-50/50 rounded-full blur-[100px] -z-10" />

      {/* Container - I njëjtë me Headerin (max-w-7xl dhe px-8) */}
      <div className="max-w-7xl mx-auto px-8 pt-20 pb-10">
        
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

          {/* BRAND COLUMN */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 shadow-lg group-hover:bg-blue-700 transition-all duration-500">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[23px] font-bold tracking-tight text-slate-900">BookCatalog</span>
                <span className="text-[12px] uppercase tracking-[0.2em] text-blue-600 font-bold">Premium Experience</span>
              </div>
            </Link>
            
            <p className="text-slate-500 leading-relaxed text-[18px] max-w-md">
              Discover a world of knowledge through our curated digital collection. 
              We bridge the gap between classic literature and modern accessibility.
            </p>

            <div className="flex gap-5">
              {[Twitter, Instagram, Github].map((Icon, i) => (
                <button key={i} className="h-11 w-11 flex items-center justify-center rounded-full border border-slate-200 text-slate-400 hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          {/* NAVIGATION LINKS */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-[14px] font-bold uppercase tracking-[0.15em] text-slate-900 border-l-2 border-blue-600 pl-3">
              Platform
            </h4>
            <ul className="space-y-4">
              {['Home', 'Library', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-slate-500 hover:text-blue-600 transition-colors duration-200 text-[17px] font-medium">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-[14px] font-bold uppercase tracking-[0.15em] text-slate-900 border-l-2 border-blue-600 pl-3">
              Get in Touch
            </h4>
            <div className="space-y-5">
              <div className="flex items-start gap-4 text-slate-500">
                <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <span className="text-[16px] leading-snug">Boulevard of Knowledge, Suite 101, <br />Digital City, 10000</span>
              </div>
              <div className="flex items-center gap-4 text-slate-500">
                <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-[16px]">+383 (49) 000 000</span>
              </div>
              <div className="flex items-center gap-4 text-slate-500">
                <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-[16px]">info@bookcatalog.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        {/* BOTTOM SECTION */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[14px] text-slate-400 font-medium tracking-wide">
            © {new Date().getFullYear()} BOOKCATALOG. ENGINEERED FOR EXCELLENCE.
          </p>
          
          <div className="flex items-center gap-8 text-[13px] font-bold text-slate-400 tracking-[0.1em] uppercase">
            <Link href="#" className="hover:text-blue-600 transition">Privacy</Link>
            <Link href="#" className="hover:text-blue-600 transition">Terms</Link>
            <Link href="#" className="hover:text-blue-600 transition">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}