
"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  "সর্বশেষ", "জাতীয়", "রাজনীতি", "ব্যবসা বাণিজ্য", "চাকরি",
  "বাংলাদেশ", "পশ্চিমবঙ্গ", "আন্তর্জাতিক", "শিক্ষাঙ্গন",
  "বিনোদন", "খেলা", "বিজ্ঞান ও তথ্যপ্রযুক্তি", "ধর্ম",
  "লাইফস্টাইল", "সাহিত্য", "আবহাওয়া", "ফ্যাক্টচেক",
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

const SOCIALS = [
  { name: "Facebook", href: "#", bg: "bg-[#1877f2]", icon: <path d="M14 8.5V7a1 1 0 0 1 1-1h1.5V3H14a4 4 0 0 0-4 4v1.5H8V12h2v9h4v-9h2.3l.7-3.5H14Z" fill="currentColor" stroke="none" /> },
  { name: "YouTube", href: "#", bg: "bg-[#ff0000]", icon: <><rect x="3" y="6" width="18" height="12" rx="3.5" fill="currentColor" stroke="none" /><path d="m10.5 9.5 4 2.5-4 2.5v-5Z" fill="#ff0000" stroke="none" /></> },
  { name: "Twitter", href: "#", bg: "bg-[#1d9bf0]", icon: <path d="M21 6.5a7 7 0 0 1-2 .6 3.4 3.4 0 0 0 1.5-1.9 6.8 6.8 0 0 1-2.2.9 3.5 3.5 0 0 0-6 3.2A10 10 0 0 1 4.1 5.7a3.5 3.5 0 0 0 1.1 4.7 3.4 3.4 0 0 1-1.6-.4 3.5 3.5 0 0 0 2.8 3.5 3.5 3.5 0 0 1-1.6.1 3.5 3.5 0 0 0 3.3 2.4A7 7 0 0 1 3 17.4 10 10 0 0 0 8.4 19c6.5 0 10-5.4 10-10v-.5A7 7 0 0 0 21 6.5Z" fill="currentColor" stroke="none" /> },
  { name: "Instagram", href: "#", bg: "bg-[linear-gradient(45deg,#f9a03f,#e1306c,#c13584)]", icon: <><rect x="4" y="4" width="16" height="16" rx="4.5" /><circle cx="12" cy="12" r="3.6" /><circle cx="17" cy="7" r=".6" fill="currentColor" /></> },
  { name: "LinkedIn", href: "#", bg: "bg-[#0a66c2]", icon: <path d="M6 10v8M6 6.5v.01M10.5 18v-8M10.5 13a3 3 0 0 1 6 0v5" strokeWidth="2.4" /> },
  { name: "TikTok", href: "#", bg: "bg-black", icon: <path d="M14 4v10.2a3 3 0 1 1-3-3M14 4c.3 2.2 1.8 3.7 4 4" strokeWidth="2.4" /> },
];

const Svg = ({ children, className = "h-4 w-4", ...p }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...p}>
    {children}
  </svg>
);

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M12 2.6 1.8 11.4a1 1 0 0 0 .65 1.76H4.5V21a1 1 0 0 0 1 1h4.25v-6h4.5v6h4.25a1 1 0 0 0 1-1v-7.84h2.05a1 1 0 0 0 .65-1.76L12 2.6Z" />
  </svg>
);

const SearchIcon = () => (
  <Svg className="h-5 w-5" strokeWidth="2.5">
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </Svg>
);

const MenuIcon = () => (
  <Svg className="h-6 w-6" strokeWidth="2.5">
    <path d="M4 6h16M4 12h16M4 18h16" />
  </Svg>
);

const GlobeIcon = () => (
  <span className="relative inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ef4444,#991b1b)] ring-1 ring-gray-200 dark:ring-gray-700">
    <span className="h-2 w-2 rounded-full bg-white/70" />
  </span>
);

const CloudIcon = () => (
  <Svg className="h-4 w-4 text-gray-400" strokeWidth="1.5">
    <path d="M17.5 17H7a4 4 0 1 1 .8-7.92A5.5 5.5 0 0 1 18.4 10.5 3.3 3.3 0 0 1 17.5 17Z" />
    <path d="M9 20l-.6 1.4M13 20l-.6 1.4M17 20l-.6 1.4" />
  </Svg>
);

const CalcIcon = () => (
  <Svg className="h-3.5 w-3.5" strokeWidth="1.8">
    <rect x="5" y="3" width="14" height="18" rx="2" />
    <path d="M8 7h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01M8 18h.01M12 18h.01M16 18h.01" />
  </Svg>
);

const ArchiveIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
    <path d="M3 4h18a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm6 7a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2H9Z" />
  </svg>
);

const SocialButton = ({ name, href, bg, icon }) => (
  <Link href={href} aria-label={name} className={`flex h-7 w-7 items-center justify-center rounded-full text-white transition hover:opacity-85 ${bg}`}>
    <Svg className="h-4 w-4" strokeWidth="2">{icon}</Svg>
  </Link>
);

function useDarkMode() {
  return useSyncExternalStore(
    (callback) => {
      window.addEventListener("storage", callback);
      window.addEventListener("theme-change", callback);
      return () => {
        window.removeEventListener("storage", callback);
        window.removeEventListener("theme-change", callback);
      };
    },
    () => localStorage.getItem("theme") === "dark",
    () => false
  );
}

export default function Navbar({
  dateLine1 = "আজ, বৃহস্পতিবার, ২৯ অক্টোবর ২০২৬ | ০৪:৪৭ অপরাহ্ন",
  dateLine2 = "১৪ কার্তিক ১৪৩৩ (হেমন্ত) | ১৭ জমাদিউল আউয়াল ১৪৪৮ হিজরি",
  temp = "Dhaka 29",
}) {
  const [open, setOpen] = useState(false);
  const darkMode = useDarkMode();

  const colors = {
    main: darkMode ? "bg-gray-950 text-gray-100" : "bg-white text-gray-900",
    nav: darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200",
    border: darkMode ? "border-gray-800" : "border-gray-200",
    muted: darkMode ? "text-gray-400" : "text-gray-500",
    secondary: darkMode ? "text-gray-300" : "text-gray-700",
  };

  return (
    <div className={`w-full font-[family-name:var(--font-bn)] transition-colors duration-300 ${colors.main}`}>
      <nav className={`border-y transition-colors duration-300 ${colors.nav}`}>
        <div className="mx-auto flex h-12 max-w-[1400px] items-stretch">
          <Link href="/" aria-label="Home" className={`flex w-12 shrink-0 items-center justify-center border-r transition hover:text-red-600 sm:w-14 ${colors.border}`}>
            <HomeIcon />
          </Link>

          <ul className="flex flex-1 items-stretch overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {NAV_ITEMS.map((item) => (
              <li key={item} className={`flex shrink-0 items-stretch border-r ${colors.border}`}>
                <Link href="#" className={`flex items-center whitespace-nowrap px-3 text-[14px] font-semibold transition hover:text-red-600 sm:px-3.5 sm:text-[15px] lg:px-4 ${darkMode ? "text-gray-200" : "text-gray-800"}`}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <button type="button" aria-label="Search" className={`flex w-11 shrink-0 items-center justify-center border-l transition hover:text-red-600 sm:w-14 lg:w-16 ${colors.border}`}>
            <SearchIcon />
          </button>

          <button type="button" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((v) => !v)} className={`flex w-11 shrink-0 items-center justify-center border-l transition hover:text-red-600 sm:w-14 lg:w-16 ${colors.border}`}>
            <MenuIcon />
          </button>
        </div>

        {open && (
          <div className={`border-t px-4 py-3 transition-colors duration-300 2xl:hidden ${colors.nav} ${colors.border}`}>
            <div className="xl:hidden">
              <p className="text-[14px] font-semibold">{dateLine1}</p>
              <p className={`mt-1 text-[15px] ${colors.muted}`}>{dateLine2}</p>

              <div className={`mt-3 flex flex-wrap items-center gap-x-5 gap-y-3 text-[14px] font-semibold ${colors.secondary}`}>
                <Link href={WEATHER_URL} className="flex items-center gap-1"><CloudIcon /> {temp}°C</Link>
                <Link href={CONVERTER_URL} className="flex items-center gap-1"><CalcIcon /> কনভার্টার</Link>
                <Link href={ARCHIVE_URL} className="flex items-center gap-1"><ArchiveIcon /> আর্কাইভ</Link>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {SOCIALS.map((s) => <SocialButton key={s.name} {...s} />)}
            </div>
          </div>
        )}
      </nav>

      <div className={`relative flex h-10 items-stretch overflow-hidden transition-colors duration-300 ${colors.main}`}>
        <style>{`
          @keyframes ps-marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>

        <div className="relative z-10 flex shrink-0 items-center bg-[#e8504f] px-3 text-[15px] font-bold text-white sm:px-5 lg:ml-[min(4vw,52px)] lg:px-6">
          সর্বশেষঃ
        </div>

        <div className="relative flex-1 overflow-hidden">
          <div className="flex h-full w-max items-center gap-12 whitespace-nowrap pl-5 hover:[animation-play-state:paused]" style={{ animation: "ps-marquee 60s linear infinite" }}>
            {[...BREAKING, ...BREAKING].map((t, i) => (
              <Link key={i} href="#" className={`flex items-center gap-2 text-[15px] font-semibold transition hover:text-red-600 sm:text-[16px] ${darkMode ? "text-gray-200" : "text-gray-800"}`}>
                <GlobeIcon />
                {t}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
