"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BookOpen, Mail, Lock, ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react";

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginFormData>();

  const [submitStatus, setSubmitStatus] = React.useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (result?.error) {
        setError("root", {
          type: "manual",
          message: "Invalid email or password. Please try again.",
        });
        setSubmitStatus({
          type: "error",
          message: "We couldn’t sign you in. Please check your credentials.",
        });
      } else if (result?.ok) {
        setSubmitStatus({
          type: "success",
          message: "Welcome back. Redirecting to your dashboard…",
        });

        setTimeout(() => {
          router.push("/dashboard");
          router.refresh();
        }, 900);
      }
    } catch {
      setError("root", {
        type: "manual",
        message: "An error occurred. Please try again.",
      });
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again in a moment.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const demoAccounts = [
    { label: "Admin", email: "admin@test.com", pass: "admin123" },
    { label: "User", email: "user@test.com", pass: "user123" },
    { label: "Demo", email: "demo@bookcatalog.com", pass: "demo123" },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-1 -left-40 w-[520px] h-[520px] bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-[520px] h-[520px] bg-blue-300/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-8 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-start">

          {/* LEFT – Editorial content */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-blue-200 bg-white/70 backdrop-blur px-5 py-2">
              <div className="h-9 w-9 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase">
                BookCatalog Members
              </span>
            </div>

            <h1 className="mt-8 text-5xl font-semibold leading-tight text-gray-900">
              Enter your <span className="text-blue-600">private library</span>
            </h1>

            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Sign in to save favorites, return to curated picks, and continue
              discovering titles designed for modern readers — with a calm,
              premium experience.
            </p>

            <div className="mt-10 space-y-3 text-gray-700">
              <div className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />
                <p className="leading-relaxed">
                  Save books you love and build a private collection.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />
                <p className="leading-relaxed">
                  Access your dashboard anytime, across devices.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />
                <p className="leading-relaxed">
                  Enjoy a curated library — clarity over noise.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-lg font-semibold text-blue-600 hover:text-blue-700 transition"
              >
                Explore the collection <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* RIGHT – Premium card */}
          <div className="lg:justify-self-end w-full max-w-md">
            <div className="relative overflow-hidden rounded-[32px] border border-blue-100 bg-white/80 backdrop-blur shadow-[0_25px_70px_rgba(0,0,0,0.08)]">
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />

              <div className="relative z-10 p-10">
                <h2 className="text-3xl font-semibold text-gray-900">
                  Sign in
                </h2>
                <p className="mt-3 text-gray-600">
                  Use your account credentials to continue.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-6">
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>

                    <div
                      className={`flex items-center gap-3 rounded-2xl border bg-white px-4 py-3.5 transition focus-within:ring-4 focus-within:ring-blue-100 ${
                        errors.email ? "border-red-400" : "border-gray-200 focus-within:border-blue-300"
                      }`}
                    >
                      <Mail className="w-5 h-5 text-blue-600" />
                      <input
                        type="email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                        className="w-full bg-transparent outline-none text-gray-900 placeholder:text-gray-400"
                        placeholder="you@example.com"
                      />
                    </div>

                    {errors.email && (
                      <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Password <span className="text-red-500">*</span>
                    </label>

                    <div
                      className={`flex items-center gap-3 rounded-2xl border bg-white px-4 py-3.5 transition focus-within:ring-4 focus-within:ring-blue-100 ${
                        errors.password ? "border-red-400" : "border-gray-200 focus-within:border-blue-300"
                      }`}
                    >
                      <Lock className="w-5 h-5 text-blue-600" />
                      <input
                        type="password"
                        {...register("password", {
                          required: "Password is required",
                          minLength: { value: 6, message: "Password must be at least 6 characters" },
                        })}
                        className="w-full bg-transparent outline-none text-gray-900 placeholder:text-gray-400"
                        placeholder="Enter your password"
                      />
                    </div>

                    {errors.password && (
                      <p className="mt-2 text-sm text-red-500">{errors.password.message}</p>
                    )}
                  </div>

                  {/* Root error */}
                  {errors.root && (
                    <div className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-800">
                      <AlertTriangle className="w-5 h-5 mt-0.5" />
                      <p className="text-sm font-medium">{errors.root.message}</p>
                    </div>
                  )}

                  {/* Submit status */}
                  {submitStatus.type && (
                    <div
                      className={`flex items-start gap-3 rounded-2xl border p-4 ${
                        submitStatus.type === "success"
                          ? "border-green-200 bg-green-50 text-green-800"
                          : "border-red-200 bg-red-50 text-red-800"
                      }`}
                    >
                      {submitStatus.type === "success" ? (
                        <CheckCircle2 className="w-5 h-5 mt-0.5" />
                      ) : (
                        <AlertTriangle className="w-5 h-5 mt-0.5" />
                      )}
                      <p className="text-sm font-medium leading-relaxed">
                        {submitStatus.message}
                      </p>
                    </div>
                  )}

                  {/* Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:shadow-xl transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "Signing in…" : "Sign In"}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>

                {/* Demo credentials – premium */}
                <div className="mt-10 pt-8 border-t border-gray-200">
                  <p className="text-sm font-semibold text-gray-900">
                    Test accounts
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    Use any of these demo credentials to explore the platform.
                  </p>

                  <div className="mt-5 grid grid-cols-1 gap-3">
                    {demoAccounts.map((acc) => (
                      <div
                        key={acc.label}
                        className="rounded-2xl border border-blue-100 bg-slate-50 px-5 py-4"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-gray-900">
                            {acc.label}
                          </span>
                          <span className="text-xs font-semibold text-blue-600">
                            Credentials
                          </span>
                        </div>
                        <p className="mt-2 text-xs font-mono text-gray-700">
                          {acc.email} / {acc.pass}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="mt-8 text-center space-y-3">
                  <p className="text-sm text-gray-600">
                    Don&apos;t have an account?{" "}
                    <Link
                      href="/register"
                      className="font-semibold text-blue-600 hover:text-blue-700 underline"
                    >
                      Create one
                    </Link>
                  </p>
                  <Link
                    href="/"
                    className="text-sm font-semibold text-blue-600 hover:text-blue-700 underline"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>

            <p className="mt-6 text-center text-xs text-gray-500 leading-relaxed">
              Secure access • Reader-first experience • Curated library platform
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
