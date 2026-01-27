import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import {
  BookOpen,
  Heart,
  LayoutDashboard,
  ShieldCheck,
  Mail,
  User,
  ArrowRight,
} from "lucide-react";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/login");

  const user = session.user as any;

  const roleLabel = (user?.role || "user").toUpperCase();
  const isAdmin = user?.role === "admin";

  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-blue-100 bg-[#f8fafc]">
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] bg-blue-300/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 mb-6 text-sm font-semibold tracking-widest text-blue-600 uppercase">
                <span className="h-px w-8 bg-blue-600" />
                Dashboard
              </span>

              <h1 className="text-5xl md:text-6xl font-semibold leading-tight text-gray-900">
                Welcome back,{" "}
                <span className="text-blue-600">
                  {user?.name || "Reader"}
                </span>
              </h1>

              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Your personal space to manage favorites, explore curated titles,
                and keep everything organized — calmly and beautifully.
              </p>
            </div>

            {/* ROLE BADGE */}
            <div className="flex items-center gap-3">
              <span
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold border ${
                  isAdmin
                    ? "bg-purple-50 text-purple-800 border-purple-200"
                    : "bg-blue-50 text-blue-800 border-blue-200"
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                {roleLabel}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-8 space-y-10">
            {/* PRIMARY CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Account */}
              <div className="rounded-[28px] bg-white border border-blue-100 shadow-sm p-8 hover:shadow-md transition">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900">
                      Account
                    </h2>
                    <p className="mt-2 text-gray-600">
                      Your profile and access details.
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>
                </div>

                <div className="mt-8 space-y-4 text-sm">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Mail className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-500">Email:</span>
                    <span className="font-semibold text-gray-900">
                      {user?.email}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-700">
                    <User className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-500">Name:</span>
                    <span className="font-semibold text-gray-900">
                      {user?.name || "Not provided"}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-700">
                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-500">Role:</span>
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold border ${
                        isAdmin
                          ? "bg-purple-50 text-purple-800 border-purple-200"
                          : "bg-blue-50 text-blue-800 border-blue-200"
                      }`}
                    >
                      {roleLabel}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="rounded-[28px] bg-white border border-blue-100 shadow-sm p-8 hover:shadow-md transition">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900">
                      Quick actions
                    </h2>
                    <p className="mt-2 text-gray-600">
                      Jump back into your library.
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                    <LayoutDashboard className="w-5 h-5 text-blue-600" />
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <Link
                    href="/cart"
                    className="group inline-flex w-full items-center justify-between rounded-2xl border border-blue-200 bg-blue-50 px-5 py-4 text-gray-900 hover:bg-blue-100 transition"
                  >
                    <span className="inline-flex items-center gap-3 font-semibold">
                      <Heart className="w-5 h-5 text-blue-700" />
                      View Favorites
                    </span>
                    <ArrowRight className="w-5 h-5 text-blue-700 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/products"
                    className="group inline-flex w-full items-center justify-between rounded-2xl border border-gray-200 bg-white px-5 py-4 text-gray-900 hover:border-blue-200 hover:bg-slate-50 transition"
                  >
                    <span className="inline-flex items-center gap-3 font-semibold">
                      <BookOpen className="w-5 h-5 text-blue-700" />
                      Browse Books
                    </span>
                    <ArrowRight className="w-5 h-5 text-blue-700 transition-transform group-hover:translate-x-1" />
                  </Link>

                  {isAdmin && (
                    <Link
                      href="/admin"
                      className="group inline-flex w-full items-center justify-between rounded-2xl border border-purple-200 bg-purple-50 px-5 py-4 text-gray-900 hover:bg-purple-100 transition"
                    >
                      <span className="inline-flex items-center gap-3 font-semibold">
                        <ShieldCheck className="w-5 h-5 text-purple-700" />
                        Admin Panel
                      </span>
                      <ArrowRight className="w-5 h-5 text-purple-700 transition-transform group-hover:translate-x-1" />
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {/* INSIGHTS / REAL FEEL */}
            <div className="rounded-[32px] bg-white border border-blue-100 shadow-sm p-10">
              <h2 className="text-3xl font-semibold text-gray-900">
                Reading insights
              </h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                A quick overview of your activity — designed to feel calm and
                intentional.
              </p>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { label: "Favorites", value: "—", hint: "Saved titles" },
                  { label: "Recently viewed", value: "—", hint: "Last 7 days" },
                  { label: "Collections", value: "—", hint: "Curated lists" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-blue-100 bg-slate-50 p-6"
                  >
                    <p className="text-sm font-semibold text-gray-500">
                      {stat.label}
                    </p>
                    <p className="mt-3 text-3xl font-semibold text-gray-900">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm text-gray-600">{stat.hint}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-blue-100 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-8">
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-gray-900">
                    Pro tip:
                  </span>{" "}
                  Use Favorites to build a personal library you can return to
                  anytime — a curated list that matches your taste.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-4">
            <div className="rounded-[32px] bg-gradient-to-br from-white via-slate-50 to-slate-100 border border-blue-100 shadow-sm p-10">
              <h3 className="text-2xl font-semibold text-gray-900">
                Your BookCatalog space
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                This dashboard is designed to feel like a private reading room:
                minimal, focused, and always ready when you are.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Save titles you love",
                  "Return to your curated list",
                  "Discover new recommendations",
                  isAdmin ? "Manage titles with admin access" : "Explore the full library anytime",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white border border-blue-100 px-6 py-4 text-gray-800"
                  >
                    {item}
                  </div>
                ))}
              </div>

              {isAdmin && (
                <div className="mt-10 rounded-2xl border border-purple-200 bg-purple-50 p-6">
                  <p className="text-sm text-purple-800 leading-relaxed">
                    <span className="font-semibold">Admin access:</span> You can
                    create, update, and manage books through the Admin Panel.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
