"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/navigation";

export function NotificationBanner() {
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    setDismissed(sessionStorage.getItem("banner-dismissed") === "true");
  }, []);

  if (dismissed) return null;

  const handleDismiss = () => {
    setDismissed(true);
    sessionStorage.setItem("banner-dismissed", "true");
  };

  return (
    <div className="border-b border-amber-200 bg-amber-50">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-6 py-2">
        <p className="text-sm text-amber-900">
          New post:{" "}
          <Link
            href="/blog/end-of-a-chapter"
            className="font-medium underline decoration-amber-300 underline-offset-2 transition-colors hover:text-amber-700"
          >
            The end of a chapter, and what I&apos;m building next
          </Link>
        </p>
        <button
          onClick={handleDismiss}
          className="shrink-0 text-amber-400 transition-colors hover:text-amber-600"
          aria-label="Dismiss notification"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
