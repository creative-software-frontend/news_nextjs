"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AreaFilter } from "./SaradeshSection";

/* ---------- data ---------- */
const OPINIONS = [
  { id: 1, category: "ব্যবসা বাণিজ্য", title: "পর্যটন মেলা ২০২৬ শুরু বৃহস্পতিবার ঢাকায় অংশ নেবে ২০টির বেশি দেশ", quote: "কৃত্রিম বুদ্ধিমত্তা (এআই), প্রযুক্তিগত উদ্ভাবন ও টেকসই পর্যটন উন্নয়নকে গুরুত্ব...", href: "#", image: "" },
  { id: 2, category: "ফলাফল", title: "৩১ অক্টোবর প্রকাশ এইচএসসি ফলাফল জানবেন যেভাবে", quote: "এইচএসসি ও সমমান পরীক্ষার ফলাফল প্রকাশের তারিখ পুনর্নির্ধারণ করা হয়েছে।", href: "#", image: "" },
  { id: 3, category: "জাতীয়", title: "জাপান সফরে তারেক রহমান বিনিয়োগ ও বাণিজ্যে গুরুত্ব", quote: "জাপানের প্রধানমন্ত্রী সানায়ে তাকাইচির আমন্ত্রণে চার দিনের রাষ্ট্রীয় সফরে জাপান...", href: "#", image: "" },
  { id: 4, category: "জাতীয়", title: "ঢাকাই মসলিনের বিশ্ববাজারে প্রবেশ নতুন সম্ভাবনা", quote: "বাংলার ঐতিহ্যবাহী বুননশিল্প আবারও বিশ্ববাজারে নিজের অবস্থান তৈরি করছে...", href: "#", image: "" },
  { id: 5, category: "ঘূর্ণিঝড়", title: "ঘূর্ণিঝড় অর্ণবের আশঙ্কায় চার সমুদ্রবন্দরে সতর্ক সংকেত", quote: "বঙ্গোপসাগরে অবস্থানরত গভীর নিম্নচাপটি আরও পশ্চিম দিকে অগ্রসর হয়ে...", href: "#", image: "" },
  { id: 6, category: "এশিয়া", title: "টোকিওতে ২৭ অক্টোবর তারেক রহমান ও তাকাইচির বৈঠক", quote: "দুই দেশের নেতার বৈঠকে বিনিয়োগ ও কর্মসংস্থান নিয়ে আলোচনা হবে...", href: "#", image: "" },
  { id: 7, category: "জাতীয়", title: "শাহজালাল বিমানবন্দরে লাইভ ব্যাগেজ মনিটরিংয়ে সন্তুষ্ট যাত্রীরা", quote: "লাইভ ব্যাগেজ মনিটরিং ব্যবস্থা চালুর ফলে যাত্রীদের ভোগান্তি কমেছে...", href: "#", image: "" },
  { id: 8, category: "জাতীয়", title: "রাজশাহীতে আখচাষীদের ১২ কোটি টাকা প্রণোদনা দিলেন প্রধানমন্ত্রী", quote: "রাজশাহী অঞ্চলের ৩৮ হাজার আখচাষী এই প্রণোদনা পাবেন...", href: "#", image: "" },
  { id: 9, category: "শ্রম", title: "জাপানের সঙ্গে কর্মসংস্থান চুক্তি কর্মী নিয়োগ শুরু ১ এপ্রিল", quote: "জাপানে কর্মী পাঠাতে নতুন চুক্তি স্বাক্ষরিত হয়েছে...", href: "#", image: "" },
];

const POLL = {
  question: "সংসদ সদস্যদের সরকারি গাড়ি এবং মন্ত্রীদের মাসিক বেতন ন্যূনতম ১০ লাখ টাকা ও সংসদ সদস্যদের ৫ লাখ টাকা করা উচিত বলে...",
  image: "",
  options: [
    { id: "yes", label: "হ্যাঁ", votes: 124 },
    { id: "no", label: "না", votes: 312 },
    { id: "none", label: "মন্তব্য নাই", votes: 45 },
  ],
};

const MORE_OPINION_HREF = "#";
const MORE_POLL_HREF = "#";
const PER_PAGE = 3;

/* ---------- helpers ---------- */
const bn = (n) => n.toLocaleString("bn-BD");

/* ---------- icons ---------- */
const PenIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5Z" />
  </svg>
);

const VoteIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
    <rect x="3" y="12" width="18" height="9" rx="1.5" />
    <path d="M7 12V9M17 12V9M9 6l3-3 3 3M12 3v9" />
  </svg>
);

const ChartIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <rect x="4" y="11" width="4" height="9" rx="1" />
    <rect x="10" y="4" width="4" height="16" rx="1" />
    <rect x="16" y="14" width="4" height="6" rx="1" />
  </svg>
);

/* ---------- thumbnail ---------- */
function Thumb({ image, alt, sizes, className = "" }) {
  return (
    <div className={`relative overflow-hidden bg-gray-200 dark:bg-[#171717] ${className}`}>
      {image ? (
        <Image src={image} alt={alt} fill sizes={sizes} className="object-cover transition-transform duration-500 group-hover:scale-110" />
      ) : (
        <div className="h-full w-full bg-[linear-gradient(135deg,#e5e7eb,#d1d5db)] transition-transform duration-500 group-hover:scale-110 dark:bg-[linear-gradient(135deg,#262626,#171717)]" />
      )}
    </div>
  );
}

/* ---------- column header ---------- */
function ColumnHeader({ title, dot, href }) {
  return (
    <div className="flex items-center justify-between border-b border-gray-100 pb-3 dark:border-gray-800">
      <h2 className="flex items-center gap-2.5 text-[20px] font-extrabold text-gray-900 dark:text-white">
        <span className={`h-2 w-2 rounded-full ${dot}`} />
        {title}
      </h2>
      <Link
        href={href}
        className="rounded-full border border-gray-200 bg-white px-3 py-1 text-[12px] font-bold text-[#e8504f] transition hover:bg-[#e8504f] hover:text-white dark:border-gray-800 dark:bg-black dark:hover:bg-[#e8504f]"
      >
        সব &rsaquo;
      </Link>
    </div>
  );
}

/* ================= COLUMN 1: মতামত ================= */
function OpinionCard({ category, title, quote, href, image }) {
  return (
    <Link
      href={href}
      className="group flex gap-3 rounded-xl border border-gray-200 bg-gray-50 p-3 transition-colors hover:border-[#e8504f] dark:border-gray-800 dark:bg-[#0a0a0a] dark:hover:border-red-500"
    >
      <div className="relative h-[86px] w-[76px] shrink-0">
        <Thumb image={image} alt={title} sizes="76px" className="h-full w-full rounded-md" />
        <span className="absolute -bottom-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#e8504f] text-white ring-2 ring-gray-50 dark:ring-[#0a0a0a]">
          <PenIcon />
        </span>
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="line-clamp-2 text-[15px] font-bold leading-snug text-gray-900 transition-colors group-hover:text-[#e8504f] dark:text-gray-100 dark:group-hover:text-red-500">
          <span className="text-[12px] font-semibold text-[#e8504f]">{category}</span>
          <span className="mx-1.5 text-gray-300 dark:text-gray-700">|</span>
          {title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-[12px] italic leading-relaxed text-gray-500 transition-colors group-hover:text-[#e8504f] dark:text-gray-400 dark:group-hover:text-red-400">
          &ldquo;{quote}&rdquo;
        </p>
      </div>
    </Link>
  );
}

function OpinionColumn() {
  const pages = [];
  for (let i = 0; i < OPINIONS.length; i += PER_PAGE) {
    pages.push(OPINIONS.slice(i, i + PER_PAGE));
  }

  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || pages.length < 2) return;
    const t = setTimeout(() => setPage((p) => (p + 1) % pages.length), 6000);
    return () => clearTimeout(t);
  }, [page, paused, pages.length]);

  return (
    <div
      className="flex min-w-0 flex-col border border-gray-200 border-t-4 border-t-[#e8504f] bg-white p-5 dark:border-gray-800 dark:border-t-[#e8504f] dark:bg-black"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <ColumnHeader title="মতামত" dot="bg-[#e8504f]/70" href={MORE_OPINION_HREF} />

      <div className="mt-5 flex flex-col gap-4">
        {pages[page].map((o) => (
          <OpinionCard key={o.id} {...o} />
        ))}
      </div>

      <div className="mt-5 flex items-center justify-center gap-2">
        {pages.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Page ${i + 1}`}
            onClick={() => setPage(i)}
            className={`h-2 rounded-full transition-all ${
              i === page ? "w-7 bg-[#e8504f]" : "w-2 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600"
            }`}
          />
        ))}
      </div>

      <div className="mt-5 flex min-h-[90px] flex-1 flex-col border border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-[#0a0a0a]">
        <span className="py-1.5 text-center text-[11px] font-semibold text-gray-500 dark:text-gray-400">বিজ্ঞাপন</span>
      </div>
    </div>
  );
}

/* ================= COLUMN 2: অনলাইন জরিপ ================= */
function PollColumn() {
  const [options, setOptions] = useState(POLL.options);
  const [selected, setSelected] = useState("");
  const [voted, setVoted] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const total = options.reduce((s, o) => s + o.votes, 0);
  const percent = (v) => (total ? Math.round((v / total) * 100) : 0);

  const submit = () => {
    if (!selected || voted) return;
    setOptions((prev) => prev.map((o) => (o.id === selected ? { ...o, votes: o.votes + 1 } : o)));
    setVoted(true);
    setShowResults(true);
  };

  return (
    <div className="flex min-w-0 flex-col border border-gray-200 border-t-4 border-t-[#43974f] bg-white p-5 dark:border-gray-800 dark:border-t-[#43974f] dark:bg-black">
      <ColumnHeader title="অনলাইন জরিপ" dot="bg-[#43974f]/70" href={MORE_POLL_HREF} />

      <div className="relative mt-5 h-[200px] overflow-hidden rounded-xl bg-gray-200 dark:bg-[#171717] sm:h-[220px]">
        {POLL.image ? (
          <Image src={POLL.image} alt="" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
        ) : (
          <div className="h-full w-full bg-[linear-gradient(135deg,#d1d5db,#9ca3af)] dark:bg-[linear-gradient(135deg,#262626,#171717)]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        <p className="absolute inset-x-0 bottom-0 line-clamp-3 p-4 text-[15px] font-bold leading-snug text-white">{POLL.question}</p>
      </div>

      <div className="mt-5 flex flex-col gap-3">
        {options.map((o) => {
          const active = selected === o.id;
          const pct = percent(o.votes);

          return (
            <label
              key={o.id}
              className={`relative flex cursor-pointer items-center gap-3 overflow-hidden rounded-lg border px-4 py-3 text-[14px] font-medium transition-colors ${
                active
                  ? "border-[#43974f] bg-green-50 text-gray-900 dark:bg-[#0f1a11] dark:text-white"
                  : "border-gray-200 bg-gray-50 text-gray-800 hover:border-[#43974f] dark:border-gray-800 dark:bg-[#0a0a0a] dark:text-gray-200 dark:hover:border-[#43974f]"
              } ${voted ? "cursor-default" : ""}`}
            >
              {showResults && (
                <span className="absolute inset-y-0 left-0 bg-[#43974f]/15 transition-all duration-700" style={{ width: `${pct}%` }} />
              )}

              <input
                type="radio"
                name="poll"
                value={o.id}
                checked={active}
                disabled={voted}
                onChange={() => setSelected(o.id)}
                className="sr-only"
              />

              <span className={`relative flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${active ? "border-[#43974f]" : "border-gray-300 dark:border-gray-600"}`}>
                {active && <span className="h-2.5 w-2.5 rounded-full bg-[#43974f]" />}
              </span>

              <span className="relative flex-1">{o.label}</span>

              {showResults && (
                <span className="relative text-[13px] font-bold text-[#43974f]">
                  {bn(pct)}% <span className="font-normal text-gray-500 dark:text-gray-400">({bn(o.votes)})</span>
                </span>
              )}
            </label>
          );
        })}
      </div>

      {showResults && <p className="mt-3 text-center text-[12px] text-gray-500 dark:text-gray-400">মোট ভোট: {bn(total)}</p>}
      {voted && <p className="mt-1 text-center text-[12px] font-semibold text-[#43974f]">আপনার ভোট দেওয়া হয়েছে, ধন্যবাদ!</p>}

      <div className="mt-5 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={submit}
          disabled={!selected || voted}
          className="flex h-11 items-center justify-center gap-2 rounded-md bg-[#43974f] text-[14px] font-bold text-white transition hover:bg-[#387f42] disabled:cursor-not-allowed disabled:opacity-50"
        >
          <VoteIcon /> আপনার ভোট
        </button>

        <button
          type="button"
          onClick={() => setShowResults((s) => !s)}
          className="flex h-11 items-center justify-center gap-2 rounded-md border-2 border-[#43974f] bg-white text-[14px] font-bold text-[#43974f] transition hover:bg-[#43974f] hover:text-white dark:bg-black dark:hover:bg-[#43974f]"
        >
          <ChartIcon /> ফলাফল
        </button>
      </div>
    </div>
  );
}

/* ---------- main export ---------- */
export default function Review() {
  const router = useRouter();

  const handleAreaSearch = ({ division, district, upazila }) => {
    const q = new URLSearchParams({
      division,
      ...(district && { district }),
      ...(upazila && { upazila }),
    });

    router.push(`/area?${q.toString()}`);
  };

  return (
    <section className="w-full bg-white font-[family-name:var(--font-bn)] dark:bg-black">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-6 px-3 py-6 sm:px-5 md:grid-cols-2 lg:grid-cols-3">
        <OpinionColumn />
        <PollColumn />

        {/* Third column: Area Filter replaces TabsColumn */}
        <div className="min-w-0 md:col-span-2 lg:col-span-1">
          <AreaFilter onSearch={handleAreaSearch} />
        </div>
      </div>
    </section>
  );
}