"use client";

import { useEffect, useState } from "react";

const CHINESE_LEVELS = ["beginner", "intermediate", "advanced"] as const;
const REASON_OPTIONS = [
  "Help my child learning Chinese",
  "For my own learning",
  "For my business",
  "Others",
] as const;

export function AndroidBetaForm() {
  const [reasonForTrying, setReasonForTrying] = useState<string>("");
  const [othersInput, setOthersInput] = useState("");
  const [nextUrl, setNextUrl] = useState("");

  useEffect(() => {
    setNextUrl(`${window.location.origin}/android-beta?submitted=1`);
  }, []);

  return (
    <form
      action="https://formspree.io/f/xlgwprar"
      method="POST"
      className="mt-8 space-y-6"
    >
      {nextUrl && <input type="hidden" name="_next" value={nextUrl} />}
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-zinc-700">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-zinc-900"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-zinc-700">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-zinc-900"
        />
      </div>
      <div>
        <label htmlFor="chinese-level" className="mb-1 block text-sm font-medium text-zinc-700">
          My Chinese level
        </label>
        <select
          id="chinese-level"
          name="chineseLevel"
          className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-zinc-900"
        >
          {CHINESE_LEVELS.map((level) => (
            <option key={level} value={level}>
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <fieldset>
        <legend className="mb-2 block text-sm font-medium text-zinc-700">Reason for trying Pikabook</legend>
        <div className="space-y-2">
          {REASON_OPTIONS.map((opt) => (
            <label key={opt} className="flex items-center gap-2">
              <input
                type="radio"
                name="reasonTrying"
                value={opt}
                checked={reasonForTrying === opt}
                onChange={() => setReasonForTrying(opt)}
                className="rounded border-zinc-300"
              />
              <span className="text-zinc-900">{opt}</span>
            </label>
          ))}
        </div>
        {reasonForTrying === "Others" && (
          <input
            type="text"
            name="reasonTryingOthers"
            placeholder="Please specify"
            value={othersInput}
            onChange={(e) => setOthersInput(e.target.value)}
            className="mt-3 w-full rounded-lg border border-zinc-300 px-3 py-2 text-zinc-900"
          />
        )}
      </fieldset>
      <button
        type="submit"
        className="w-full rounded-lg bg-black px-4 py-3 font-semibold text-white transition-opacity hover:opacity-90"
      >
        Submit
      </button>
    </form>
  );
}
