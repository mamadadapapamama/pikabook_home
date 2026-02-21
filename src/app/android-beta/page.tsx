import type { Metadata } from "next";
import Link from "next/link";
import { AndroidBetaForm } from "@/components/AndroidBetaForm";

export const metadata: Metadata = {
  title: "Join the open beta – Pikabook",
  description: "Register your interest for the Pikabook open beta.",
};

type Props = { searchParams?: Promise<{ submitted?: string }> };

export default async function AndroidBetaPage({ searchParams }: Props) {
  const params = searchParams ? await searchParams : {};
  const submitted = params?.submitted === "1";

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <div className="mx-auto max-w-lg px-6 py-16">
        <Link href="/" className="text-sm text-zinc-500 underline hover:text-zinc-900">
          ← Back to home
        </Link>
        <h1 className="mt-8 text-2xl font-bold text-zinc-900">Join the open beta</h1>
        <p className="mt-3 text-zinc-600">
          Please register your interest with us - we will send you the open beta link as soon as it&apos;s ready.
        </p>
        {submitted && (
          <div className="mt-4 rounded-lg bg-green-50 p-4 text-green-800">
            <p>Thanks for registering. We&apos;ll be in touch shortly.</p>
            <Link
              href="/"
              className="mt-3 inline-block rounded-lg bg-green-700 px-4 py-2 text-sm font-medium text-white hover:bg-green-800"
            >
              Back to home
            </Link>
          </div>
        )}
        <AndroidBetaForm />
      </div>
    </div>
  );
}
