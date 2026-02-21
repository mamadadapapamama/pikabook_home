"use client";

import { useRef } from "react";

const MAILTO = "hello@pikabook.co";

export function ContactForm() {
  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = titleRef.current?.value ?? "";
    const body = bodyRef.current?.value ?? "";
    const url = `mailto:${MAILTO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3 text-left">
      <label htmlFor="contact-title" className="sr-only">
        Message title
      </label>
      <input
        ref={titleRef}
        id="contact-title"
        type="text"
        name="title"
        placeholder="Message title"
        className="rounded border border-zinc-300 px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400"
        required
        aria-required="true"
      />
      <label htmlFor="contact-body" className="sr-only">
        Message
      </label>
      <textarea
        ref={bodyRef}
        id="contact-body"
        name="body"
        placeholder="Message"
        rows={3}
        className="rounded border border-zinc-300 px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400"
        required
        aria-required="true"
      />
      <button
        type="submit"
        className="rounded bg-zinc-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700"
      >
        Submit
      </button>
    </form>
  );
}
