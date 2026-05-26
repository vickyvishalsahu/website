"use client";

import { useState } from "react";

const GLOBAL_MAX = 4000;

const RUNS = [
  {
    label: "First",
    emailsIn: "4,000",
    bars: [
      { label: "emails total", value: 4000, display: "4,000", color: "bg-emerald-200" },
      { label: "skipped (L1)", value: 0, display: "0", color: "bg-emerald-400" },
      { label: "skipped (L2)", value: 0, display: "0", color: "bg-violet-400" },
      { label: "LLM calls", value: 4000, display: "4,000", color: "bg-amber-400" },
    ],
    cost: "~$4.00 — full price, cold start",
    note: "pattern learner runs after this sync → rules written to DB",
  },
  {
    label: "Second",
    emailsIn: "200",
    bars: [
      { label: "emails total", value: 200, display: "200", color: "bg-emerald-200" },
      { label: "skipped (L1)", value: 78, display: "78", color: "bg-emerald-400" },
      { label: "skipped (L2)", value: 92, display: "92", color: "bg-violet-400" },
      { label: "LLM calls", value: 30, display: "30", color: "bg-amber-400" },
    ],
    cost: "~$0.03 — 98% cheaper than run 1",
    note: "cache hit rate: ~85% — still learning edge cases",
  },
  {
    label: "Third+",
    emailsIn: "~50/week",
    bars: [
      { label: "emails total", value: 50, display: "~50", color: "bg-emerald-200" },
      { label: "skipped (L1)", value: 30, display: "~30", color: "bg-emerald-400" },
      { label: "skipped (L2)", value: 15, display: "~15", color: "bg-violet-400" },
      { label: "LLM calls", value: 5, display: "~5", color: "bg-amber-400" },
    ],
    cost: "< $0.01/week — steady state",
    note: "cache fully trained — only genuine ambiguity reaches the LLM",
  },
];

export function SyncRunDiagram() {
  const [active, setActive] = useState(0);
  const run = RUNS[active];

  return (
    <div className="not-prose my-8 rounded-xl border border-zinc-200 bg-zinc-50 p-6 font-sans">
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <span className="text-sm text-zinc-500">Sync run:</span>
        {RUNS.map((r, i) => (
          <button
            key={r.label}
            onClick={() => setActive(i)}
            className={`cursor-pointer rounded-lg border px-4 py-1.5 text-sm font-medium transition-colors ${
              active === i
                ? "border-amber-500 text-zinc-900"
                : "border-zinc-300 text-zinc-500 hover:border-zinc-400 hover:text-zinc-700"
            }`}
          >
            {r.label}
          </button>
        ))}
      </div>

      <div className="mb-6 flex items-center gap-0 overflow-x-auto pb-2">
        <div className="flex flex-col items-center gap-2 shrink-0">
          <span className="text-xs text-zinc-400">emails in</span>
          <div className="rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-700 min-w-[80px] text-center">
            {run.emailsIn}
          </div>
        </div>

        <PipelineArrow />

        <div className="flex flex-col items-center gap-2 shrink-0">
          <span className="text-xs text-zinc-400">level 1</span>
          <div className="rounded-xl border-2 border-emerald-300 bg-emerald-50 px-5 py-2.5 text-center min-w-[110px]">
            <div className="text-sm font-bold text-emerald-700">Level 1</div>
            <div className="text-xs text-emerald-600">deterministic</div>
          </div>
        </div>

        <PipelineArrow />

        <div className="flex flex-col items-center gap-2 shrink-0">
          <span className="text-xs text-zinc-400">level 2</span>
          <div className="rounded-xl border-2 border-violet-300 bg-violet-50 px-5 py-2.5 text-center min-w-[110px]">
            <div className="text-sm font-bold text-violet-700">Level 2</div>
            <div className="text-xs text-violet-500">pattern cache</div>
          </div>
        </div>

        <PipelineArrow />

        <div className="flex flex-col items-center gap-2 shrink-0">
          <span className="text-xs text-zinc-400">level 3</span>
          <div className="rounded-xl border-2 border-amber-300 bg-amber-50 px-5 py-2.5 text-center min-w-[110px]">
            <div className="text-sm font-bold text-amber-700">Level 3</div>
            <div className="text-xs text-amber-600">LLM parse</div>
          </div>
        </div>
      </div>

      <hr className="border-zinc-200 mb-5" />

      <div className="space-y-3 mb-5">
        {run.bars.map((bar) => (
          <Bar key={bar.label} {...bar} />
        ))}
      </div>

      <hr className="border-zinc-200 mb-4" />

      <div className="flex gap-4 text-sm">
        <span className="shrink-0 text-zinc-500">approx. cost</span>
        <div>
          <span className="font-semibold text-zinc-900">{run.cost}</span>
          <p className="mt-0.5 text-zinc-400">{run.note}</p>
        </div>
      </div>
    </div>
  );
}

function PipelineArrow() {
  return (
    <div className="flex items-center self-end mb-4 mx-1 text-zinc-300 shrink-0">
      <div className="h-px w-5 bg-zinc-300" />
      <svg width="6" height="8" viewBox="0 0 6 8" fill="currentColor">
        <path d="M0 0L6 4L0 8V0Z" />
      </svg>
    </div>
  );
}

function Bar({
  label,
  value,
  display,
  color,
}: {
  label: string;
  value: number;
  display: string;
  color: string;
}) {
  const pct = (value / GLOBAL_MAX) * 100;

  return (
    <div className="flex items-center gap-3">
      <span className="w-28 shrink-0 text-right text-sm text-zinc-500">{label}</span>
      <div className="relative flex-1 h-6 rounded bg-zinc-100 overflow-hidden">
        <div
          className={`h-full rounded transition-all duration-500 ease-out ${color}`}
          style={{ width: value > 0 ? `max(${pct}%, 3px)` : "0%" }}
        />
      </div>
      <span className="w-14 shrink-0 text-sm text-zinc-600">{display}</span>
    </div>
  );
}
