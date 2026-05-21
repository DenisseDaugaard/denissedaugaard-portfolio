"use client";

import { useActionState } from "react";
import { Toaster } from "react-hot-toast";
import { handleSubmit } from "./action";
import RevealOnScroll from "../projects/RevealOnScroll";

export default function ContactForm() {
  const initialState = {
    values: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    errors: {},
    serverMessage: {},
    success: false,
  };

  const [state, formAction, isPending] = useActionState(
    handleSubmit,
    initialState
  );

  const inputClass =
    "mt-2 w-full rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-cyan-200 focus:bg-white/[0.09]";

  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
      <Toaster position="bottom-right" reverseOrder={false} />
      <RevealOnScroll delay={0.2}>
        <div className="grid gap-10 rounded-lg border border-white/10 bg-white/[0.04] p-6 lg:grid-cols-[0.8fr_1.2fr] lg:p-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-5xl">
              Let&apos;s build something useful
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/70">
              I am open to junior web developer roles, internships, and project conversations. Send a message and I will get back to you.
            </p>
          </div>

          <form noValidate className="grid gap-4" action={formAction}>
            <div>
              <label htmlFor="name" className="font-semibold text-white/86">
                Full name
              </label>
              <input
                id="name"
                className={inputClass}
                type="text"
                name="name"
                placeholder="Your name"
                defaultValue={state?.values?.name ?? ""}
              />
              {state?.errors?.name && (
                <p className="mt-2 text-sm text-pink-200">{state.errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="font-semibold text-white/86">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your email"
                className={inputClass}
                defaultValue={state?.values?.email ?? ""}
              />
              {state?.errors?.email && (
                <p className="mt-2 text-sm text-pink-200">{state.errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="subject" className="font-semibold text-white/86">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="Subject"
                className={inputClass}
                defaultValue={state?.values?.subject ?? ""}
              />
              {state?.errors?.subject && (
                <p className="mt-2 text-sm text-pink-200">
                  {state.errors.subject}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="font-semibold text-white/86">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                className={`${inputClass} resize-none`}
                rows="5"
                defaultValue={state?.values?.message ?? ""}
              />
              {state?.errors?.message && (
                <p className="mt-2 text-sm text-pink-200">
                  {state.errors.message}
                </p>
              )}
            </div>

            {state?.serverMessage?.error && (
              <p className="rounded-lg border border-pink-200/25 bg-pink-200/10 px-4 py-3 text-sm text-pink-100">
                {state.serverMessage.error}
              </p>
            )}

            {state?.serverMessage?.success && (
              <p className="rounded-lg border border-cyan-200/25 bg-cyan-200/10 px-4 py-3 text-sm text-cyan-100">
                {state.serverMessage.success}
              </p>
            )}

            <button
              className="mt-2 inline-flex justify-center rounded-lg bg-cyan-300 px-5 py-3 font-bold text-slate-950 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
              disabled={isPending}
              type="submit"
            >
              {isPending ? "Sending..." : "Send message"}
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
}
