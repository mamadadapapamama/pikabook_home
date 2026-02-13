import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact us – Pikabook",
  description: "Get in touch with the Pikabook team.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <div className="mx-auto max-w-lg px-6 py-16">
        <Link href="/" className="text-sm text-zinc-500 underline hover:text-zinc-900">
          ← Back to home
        </Link>
        <h1 className="mt-8 text-2xl font-semibold text-zinc-900">Contact us</h1>
        <p className="mt-2 text-zinc-600">Send us a message and we’ll get back to you.</p>
        <ContactForm />
      </div>
    </div>
  );
}
