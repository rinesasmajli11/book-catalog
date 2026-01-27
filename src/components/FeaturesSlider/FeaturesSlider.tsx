"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { BookOpen, Star, Shield } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Curated Collection",
    description:
      "A carefully selected library focused on quality, clarity, and timeless reads.",
  },
  {
    icon: Star,
    title: "Personal Favorites",
    description:
      "Save and revisit your favorite books anytime across all devices.",
  },
  {
    icon: Shield,
    title: "Private & Secure",
    description:
      "Your personal library experience is protected and distraction-free.",
  },
];

export default function FeaturesSlider() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-8">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl p-8 h-full border border-blue-200 hover:border-blue-400 shadow-sm hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {item.title}
                  </h3>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
