"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  "সর্বশেষ",
  "জাতীয়",
  "রাজনীতি",
  "ব্যবসা বাণিজ্য",
  "চাকরি",
  "বাংলাদেশ",
  "পশ্চিমবঙ্গ",
  "আন্তর্জাতিক",
  "শিক্ষাঙ্গন",
  "বিনোদন",
  "খেলা",
  "বিজ্ঞান ও তথ্যপ্রযুক্তি",
  "ধর্ম",
  "লাইফস্টাইল",
  "সাহিত্য",
  "আবহাওয়া",
  "ফ্যাক্টচেক",
];

const BREAKING = [
  "পর্যটন মেলা ২০২৬ শুরু বৃহস্পতিবার ঢাকায় অংশ নেবে ২০টির বেশি দেশ",
  "৩১ অক্টোবর প্রকাশ এইচএসসি ফলাফল জানবেন যেভাবে",
  "কর্মী নিয়োগ শুরু ১ এপ্রিল",
  "স্বৈরাচারের ফেরার পথ খুললে শহীদদের সঙ্গে গাদ্দারি হবে প্রধানমন্ত্রী",
];

const WEATHER_URL = "/";
const CONVERTER_URL = "/";
const ARCHIVE_URL = "/";

/* ---------- small icons ---------- */
const Svg = ({ children, className = "h-5 w-5", ...p }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...p}>
    {children}
  </svg>
);

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
    <path d="M12 2.6 1.8 11.4a1 1 0 0 0 .65 1.76H4.5V21a1 1 0 0 0 1 1h4.25v-6h4.5v6h4.25a1 1 0 0 0 1-1v-7.84h2.05a1 1 0 0 0 .65-1.76L12 2.6Z" />
  </svg>
);
const SearchIcon = () => (
  <Svg className="h-7 w-7" strokeWidth="2.5"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></Svg>
);
const MenuIcon = () => (
  <Svg className="h-8 w-8" strokeWidth="2.8"><path d="M4 6h16M4 12h16M4 18h16" /></Svg>
);
const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" /></svg>
);
const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><circle cx="12" cy="8" r="4.2" /><path d="M4 21c0-4.2 3.6-6.5 8-6.5s8 2.3 8 6.5v.5H4V21Z" /></svg>
);
const CloudIcon = () => (
  <Svg className="h-6 w-6 text-gray-400" strokeWidth="1.5"><path d="M17.5 17H7a4 4 0 1 1 .8-7.92A5.5 5.5 0 0 1 18.4 10.5 3.3 3.3 0 0 1 17.5 17Z" /><path d="M9 20l-.6 1.4M13 20l-.6 1.4M17 20l-.6 1.4" /></Svg>
);
const CalcIcon = () => (
  <Svg className="h-4 w-4" strokeWidth="1.8"><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M8 7h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01M8 18h.01M12 18h.01M16 18h.01" /></Svg>
);
const ArchiveIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M3 4h18a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm6 7a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2H9Z" /></svg>
);
const GlobeIcon = () => (
  <span className="relative inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ef4444,#991b1b)] ring-2 ring-gray-200">
    <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
  </span>
);

/* ---------- social ---------- */
const SOCIALS = [
  { name: "Facebook", href: "#", bg: "bg-[#1877f2]", icon: <path d="M14 8.5V7a1 1 0 0 1 1-1h1.5V3H14a4 4 0 0 0-4 4v1.5H8V12h2v9h4v-9h2.3l.7-3.5H14Z" fill="currentColor" stroke="none" /> },
  { name: "YouTube", href: "#", bg: "bg-[#ff0000]", icon: <><rect x="3" y="6" width="18" height="12" rx="3.5" fill="currentColor" stroke="none" /><path d="m10.5 9.5 4 2.5-4 2.5v-5Z" fill="#ff0000" stroke="none" /></> },
  { name: "Twitter", href: "#", bg: "bg-[#1d9bf0]", icon: <path d="M21 6.5a7 7 0 0 1-2 .6 3.4 3.4 0 0 0 1.5-1.9 6.8 6.8 0 0 1-2.2.9 3.5 3.5 0 0 0-6 3.2A10 10 0 0 1 4.1 5.7a3.5 3.5 0 0 0 1.1 4.7 3.4 3.4 0 0 1-1.6-.4 3.5 3.5 0 0 0 2.8 3.5 3.5 3.5 0 0 1-1.6.1 3.5 3.5 0 0 0 3.3 2.4A7 7 0 0 1 3 17.4 10 10 0 0 0 8.4 19c6.5 0 10-5.4 10-10v-.5A7 7 0 0 0 21 6.5Z" fill="currentColor" stroke="none" /> },
  { name: "Instagram", href: "#", bg: "bg-[linear-gradient(45deg,#f9a03f,#e1306c,#c13584)]", icon: <><rect x="4" y="4" width="16" height="16" rx="4.5" /><circle cx="12" cy="12" r="3.6" /><circle cx="17" cy="7" r=".6" fill="currentColor" /></> },
  { name: "LinkedIn", href: "#", bg: "bg-[#0a66c2]", icon: <path d="M6 10v8M6 6.5v.01M10.5 18v-8M10.5 13a3 3 0 0 1 6 0v5" strokeWidth="2.4" /> },
  { name: "TikTok", href: "#", bg: "bg-black", icon: <path d="M14 4v10.2a3 3 0 1 1-3-3M14 4c.3 2.2 1.8 3.7 4 4" strokeWidth="2.4" /> },
];

const SocialButton = ({ name, href, bg, icon }) => (
  <Link href={href} aria-label={name} className={`flex h-8 w-8 items-center justify-center rounded-full text-white transition hover:opacity-85 ${bg}`}>
    <Svg className="h-[18px] w-[18px]" strokeWidth="2">{icon}</Svg>
  </Link>
);

/* ---------- Navbar ---------- */
export default function Navbar({
  logoSrc = "", // e.g. "/logo.png" — if empty, text logo is rendered
  dateLine1 = "আজ, বৃহস্পতিবার, ২৯ অক্টোবর ২০২৬ | ০৪:৪৭ অপরাহ্ন",
  dateLine2 = "১৪ কার্তিক ১৪৩৩ (হেমন্ত) | ১৭ জমাদিউল আউয়াল ১৪৪৮ হিজরি",
  temp = "Dhaka 29",
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white font-[family-name:var(--font-bn)] text-gray-900 shadow-sm">
      {/* ================= TOP ROW ================= */}
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-3 py-3 sm:px-5 lg:py-4">
        {/* Logo + date */}
        <div className="flex min-w-0 items-center">
          <Link href="/" className="flex shrink-0 flex-col leading-none">
            {logoSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={logoSrc} alt="প্রথম সংবাদ" className="h-10 w-auto sm:h-12 lg:h-14" />
            ) : (
              <>
                <span className="flex items-end justify-between text-[8px] font-semibold text-red-600 sm:text-[9px]">
                  <span>দৈনিক</span>
                  <span>সত্য ও ন্যায়ের প্রতিচ্ছবি</span>
                </span>
                <span className="text-[34px] font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-[56px]">
                  প্রথম স<span className="text-red-600">ং</span>বাদ
                </span>
                <span className="flex items-center gap-1 text-[10px] text-gray-800 sm:text-[11px]">
                  <span className="h-px w-8 bg-gray-800 sm:w-10" />
                  prothomsangbad.com
                </span>
              </>
            )}
          </Link>

          {/* date (desktop only) */}
          <div className="ml-6 hidden border-l border-gray-200 pl-5 xl:block">
            <p className="text-[15px] font-semibold leading-tight">{dateLine1}</p>
            <p className="mt-1 text-[13px] leading-tight text-gray-500">{dateLine2}</p>
          </div>
        </div>

        {/* Right cluster */}
        <div className="flex items-center gap-3 sm:gap-5">
          <Link href={WEATHER_URL} className="hidden items-center gap-1.5 text-[15px] font-medium hover:text-red-600 xl:flex">
            <CloudIcon />
            <span>
              {temp} <sup className="text-[10px] font-normal">°C</sup>
            </span>
          </Link>

          <Link href={CONVERTER_URL} className="hidden items-center gap-1.5 text-[15px] font-semibold text-gray-700 hover:text-red-600 xl:flex">
            <CalcIcon /> কনভার্টার
          </Link>
          <Link href={ARCHIVE_URL} className="hidden items-center gap-1.5 text-[15px] font-semibold text-gray-700 hover:text-red-600 xl:flex">
            <ArchiveIcon /> আর্কাইভ
          </Link>

          <div className="hidden items-center gap-2.5 border-l border-r border-gray-200 px-5 2xl:flex">
            {SOCIALS.map((s) => (
              <SocialButton key={s.name} {...s} />
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button type="button" aria-label="Toggle dark mode" className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 sm:h-10 sm:w-10">
              <MoonIcon />
            </button>
            <button type="button" aria-label="Account" className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 sm:h-10 sm:w-10">
              <UserIcon />
            </button>
          </div>
        </div>
      </div>

      {/* ================= NAV ROW ================= */}
      <nav className="border-y border-gray-200 bg-white">
        <div className="mx-auto flex h-14 max-w-[1400px] items-stretch">
          <Link href="/" aria-label="Home" className="flex w-16 shrink-0 items-center justify-center border-r border-gray-200 text-gray-900 sm:w-[72px]">
            <HomeIcon />
          </Link>

          {/* one scrollable list for all screen sizes (17 items won't fit without scrolling) */}
          <ul className="flex flex-1 items-stretch overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {NAV_ITEMS.map((item) => (
              <li key={item} className="flex shrink-0 items-stretch border-r border-gray-200">
                <Link href="#" className="flex items-center whitespace-nowrap px-4 text-[16px] font-semibold text-gray-900 hover:text-red-600 lg:px-5 lg:text-[17px]">
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <button type="button" aria-label="Search" className="flex w-14 shrink-0 items-center justify-center border-l border-gray-200 text-gray-900 hover:text-red-600 sm:w-[72px] lg:w-24">
            <SearchIcon />
          </button>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex w-14 shrink-0 items-center justify-center border-l border-gray-200 text-gray-900 hover:text-red-600 sm:w-[72px] lg:w-24"
          >
            <MenuIcon />
          </button>
        </div>

        {/* drawer: shows the info hidden on smaller screens */}
        {open && (
          <div className="border-t border-gray-200 bg-white px-4 py-4 2xl:hidden">
            <div className="xl:hidden">
              <p className="text-[15px] font-semibold">{dateLine1}</p>
              <p className="mt-1 text-[13px] text-gray-500">{dateLine2}</p>
              <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 text-[15px] font-semibold text-gray-700">
                <Link href={WEATHER_URL} className="flex items-center gap-1.5"><CloudIcon /> {temp}°C</Link>
                <Link href={CONVERTER_URL} className="flex items-center gap-1.5"><CalcIcon /> কনভার্টার</Link>
                <Link href={ARCHIVE_URL} className="flex items-center gap-1.5"><ArchiveIcon /> আর্কাইভ</Link>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {SOCIALS.map((s) => (
                <SocialButton key={s.name} {...s} />
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* ================= BREAKING TICKER ================= */}
      <div className="relative flex h-11 items-stretch overflow-hidden bg-white">
        <style>{`@keyframes ps-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
        <div className="relative z-10 flex shrink-0 items-center bg-[#e8504f] px-4 text-[17px] font-bold text-white sm:px-6 lg:ml-[min(4vw,52px)] lg:px-7">
          সর্বশেষঃ
        </div>
        <div className="relative flex-1 overflow-hidden">
          <div
            className="flex h-full w-max items-center gap-16 whitespace-nowrap pl-6 hover:[animation-play-state:paused]"
            style={{ animation: "ps-marquee 60s linear infinite" }}
          >
            {[...BREAKING, ...BREAKING].map((t, i) => (
              <Link key={i} href="#" className="flex items-center gap-2 text-[17px] font-semibold text-gray-900 hover:text-red-600 sm:text-[18px]">
                <GlobeIcon />
                {t}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}