"use client";

import React from "react";
import { useForm } from "react-hook-form";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>();

  const [submitStatus, setSubmitStatus] = React.useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call
      await new Promise((res) => setTimeout(res, 700));

      console.log("Form submitted:", data);

      setSubmitStatus({
        type: "success",
        message:
          "Message received. Our curators will respond within 24–48 hours.",
      });
      reset();

      setTimeout(() => {
        setSubmitStatus({ type: null, message: "" });
      }, 5000);
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again in a moment.",
      });
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 mb-6 text-sm font-semibold tracking-widest text-blue-600 uppercase">
            <span className="h-px w-8 bg-blue-600" />
            Contact
          </span>

          <h1 className="text-5xl md:text-6xl font-semibold leading-tight text-gray-900">
            Let’s talk about <br />
            <span className="text-blue-600">your next great read</span>
          </h1>

          <p className="mt-8 text-xl text-gray-600 leading-relaxed">
            Have a question, suggestion, or a title you think belongs in our
            collection? Send us a note — we reply thoughtfully and promptly.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-8 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* LEFT: CONTACT INFO */}
          <aside className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-[28px] bg-white border border-blue-100 shadow-sm p-10">
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-300/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Contact details
                </h2>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  We’re happy to help with recommendations, partnerships, and
                  general inquiries.
                </p>

                <div className="mt-8 space-y-5">
                  <InfoRow
                    icon={<Mail className="w-5 h-5 text-blue-600" />}
                    title="Email"
                    value="hello@bookcatalog.com"
                  />
                  <InfoRow
                    icon={<Phone className="w-5 h-5 text-blue-600" />}
                    title="Phone"
                    value="+383 44 000 000"
                  />
                  <InfoRow
                    icon={<MapPin className="w-5 h-5 text-blue-600" />}
                    title="Location"
                    value="Prishtina, Kosovo"
                  />
                  <InfoRow
                    icon={<Clock className="w-5 h-5 text-blue-600" />}
                    title="Hours"
                    value="Mon–Fri, 09:00–17:00"
                  />
                </div>

                <div className="mt-10 rounded-2xl border border-blue-100 bg-slate-50 p-6">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    <span className="font-semibold text-gray-900">
                      Response time:
                    </span>{" "}
                    Usually within 24–48 hours. For urgent requests, include
                    “Urgent” in the subject of your message.
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT: FORM */}
          <div className="lg:col-span-3">
            <div className="relative overflow-hidden rounded-[28px] bg-white border border-blue-100 shadow-sm p-10 md:p-12">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl" />

              <div className="relative z-10">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Send a message
                </h2>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  Tell us what you’re looking for. The more detail you share,
                  the better we can help.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-7">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("name", {
                        required: "Name is required",
                        minLength: { value: 2, message: "Name must be at least 2 characters" },
                      })}
                      placeholder="Your full name"
                      className={`w-full rounded-2xl border bg-white px-5 py-3.5 text-gray-900 placeholder:text-gray-400 outline-none transition focus:ring-4 focus:ring-blue-100 ${
                        errors.name ? "border-red-400" : "border-gray-200 focus:border-blue-300"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      placeholder="you@example.com"
                      className={`w-full rounded-2xl border bg-white px-5 py-3.5 text-gray-900 placeholder:text-gray-400 outline-none transition focus:ring-4 focus:ring-blue-100 ${
                        errors.email ? "border-red-400" : "border-gray-200 focus:border-blue-300"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={7}
                      {...register("message", {
                        required: "Message is required",
                        minLength: { value: 10, message: "Message must be at least 10 characters" },
                      })}
                      placeholder="What can we help you with?"
                      className={`w-full rounded-2xl border bg-white px-5 py-3.5 text-gray-900 placeholder:text-gray-400 outline-none transition focus:ring-4 focus:ring-blue-100 resize-none ${
                        errors.message ? "border-red-400" : "border-gray-200 focus:border-blue-300"
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-2 text-sm text-red-500">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Status */}
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
                      <p className="font-medium leading-relaxed">
                        {submitStatus.message}
                      </p>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:shadow-xl transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                    {isSubmitting ? "Sending…" : "Send Message"}
                  </button>
                </form>

                <p className="mt-8 text-sm text-gray-500 leading-relaxed">
                  By submitting this form, you agree to be contacted regarding your inquiry.
                  We never share your details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoRow({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 border border-blue-100">
        {icon}
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-900">{title}</p>
        <p className="text-gray-600">{value}</p>
      </div>
    </div>
  );
}
