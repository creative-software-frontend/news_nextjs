
"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";

const WEATHER_URL = "/";
const CONVERTER_URL = "/";
const ARCHIVE_URL = "/";

const SOCIALS = [
  {
    name: "Facebook",
    href: "#",
    bg: "bg-[#1877f2]",
    icon: <path d="M14 8.5V7a1 1 0 0 1 1-1h1.5V3H14a4 4 0 0 0-4 4v1.5H8V12h2v9h4v-9h2.3l.7-3.5H14Z" fill="currentColor" stroke="none" />,
  },
  {
    name: "YouTube",
    href: "#",
    bg: "bg-[#ff0000]",
    icon: (
      <>
        <rect x="3" y="6" width="18" height="12" rx="3.5" fill="currentColor" stroke="none" />
        <path d="m10.5 9.5 4 2.5-4 2.5v-5Z" fill="#ff0000" stroke="none" />
      </>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    bg: "bg-[#1d9bf0]",
    icon: <path d="M21 6.5a7 7 0 0 1-2 .6 3.4 3.4 0 0 0 1.5-1.9 6.8 6.8 0 0 1-2.2.9 3.5 3.5 0 0 0-6 3.2A10 10 0 0 1 4.1 5.7a3.5 3.5 0 0 0 1.1 4.7 3.4 3.4 0 0 1-1.6-.4 3.5 3.5 0 0 0 2.8 3.5 3.5 3.5 0 0 1-1.6.1 3.5 3.5 0 0 0 3.3 2.4A7 7 0 0 1 3 17.4 10 10 0 0 0 8.4 19c6.5 0 10-5.4 10-10v-.5A7 7 0 0 0 21 6.5Z" fill="currentColor" stroke="none" />,
  },
  {
    name: "Instagram",
    href: "#",
    bg: "bg-[linear-gradient(45deg,#f9a03f,#e1306c,#c13584)]",
    icon: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="4.5" />
        <circle cx="12" cy="12" r="3.6" />
        <circle cx="17" cy="7" r=".6" fill="currentColor" />
      </>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    bg: "bg-[#0a66c2]",
    icon: <path d="M6 10v8M6 6.5v.01M10.5 18v-8M10.5 13a3 3 0 0 1 6 0v5" strokeWidth="2.4" />,
  },
  {
    name: "TikTok",
    href: "#",
    bg: "bg-black",
    icon: <path d="M14 4v10.2a3 3 0 1 1-3-3M14 4c.3 2.2 1.8 3.7 4 4" strokeWidth="2.4" />,
  },
];

const Svg = ({ children, className = "h-4 w-4", ...p }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...p}>
    {children}
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
  </svg>
);

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <circle cx="12" cy="8" r="4.2" />
    <path d="M4 21c0-4.2 3.6-6.5 8-6.5s8 2.3 8 6.5v.5H4V21Z" />
  </svg>
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

export default function Heading({
  logoSrc = "",
  dateLine1 = "আজ, বৃহস্পতিবার, ২৯ অক্টোবর ২০২৬ | ০৪:৪৭ অপরাহ্ন",
  dateLine2 = "১৪ কার্তিক ১৪৩৩ (হেমন্ত) | ১৭ জমাদিউল আউয়াল ১৪৪৮ হিজরি",
  temp = "Dhaka 29",
}) {
  const darkMode = useDarkMode();

  const colors = {
    main: darkMode ? "bg-gray-950 text-gray-100" : "bg-white text-gray-900",
    border: darkMode ? "border-gray-800" : "border-gray-200",
    muted: darkMode ? "text-gray-400" : "text-gray-500",
    secondary: darkMode ? "text-gray-300" : "text-gray-700",
    button: darkMode ? "bg-gray-800 text-gray-200 hover:bg-gray-700" : "bg-gray-100 text-gray-700 hover:bg-gray-200",
  };

  const toggleTheme = () => {
    localStorage.setItem("theme", darkMode ? "light" : "dark");
    window.dispatchEvent(new Event("theme-change"));
  };

  return (
    <header className={`w-full font-[family-name:var(--font-bn)] shadow-sm transition-colors duration-300 ${colors.main}`}>
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-3 px-3 py-2.5 sm:px-5 lg:py-3">
        <div className="flex min-w-0 items-center">
          <Link href="/" className="flex shrink-0 flex-col leading-none">
            {logoSrc ? (
              <img src={logoSrc} alt="প্রথম সংবাদ" className="h-9 w-auto sm:h-11 lg:h-12" />
            ) : (
              <>
                <span className="flex items-end justify-between text-[12px] font-semibold text-red-600 sm:text-[10px]">
                  <span>দৈনিক</span>
                  <span>সত্য ও ন্যায়ের প্রতিচ্ছবি</span>
                </span>
                <span className={`text-[32px] font-extrabold tracking-tight sm:text-[40px] lg:text-[48px] ${darkMode ? "text-white" : "text-gray-900"}`}>
                  প্রথম স<span className="text-red-600">ং</span>বাদ
                </span>
                <span className={`flex items-center gap-1 text-[10px] sm:text-[11px] ${colors.secondary}`}>
                  <span className={`h-px w-6 sm:w-8 ${darkMode ? "bg-gray-400" : "bg-gray-800"}`} />
                  prothomsangbad.com
                </span>
              </>
            )}
          </Link>

          <div className={`ml-5 hidden border-l pl-4 xl:block ${colors.border}`}>
            <p className="text-[14px] font-semibold leading-tight">{dateLine1}</p>
            <p className={`mt-1 text-[13px] leading-tight ${colors.muted}`}>{dateLine2}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <Link href={WEATHER_URL} className="hidden items-center gap-1 text-[16px] font-medium hover:text-red-600 xl:flex">
            <CloudIcon />
            <span>{temp} <sup className="text-[11px]">°C</sup></span>
          </Link>

          <Link href={CONVERTER_URL} className={`hidden items-center gap-1 text-[14px] font-semibold hover:text-red-600 xl:flex ${colors.secondary}`}>
            <CalcIcon /> কনভার্টার
          </Link>

          <Link href={ARCHIVE_URL} className={`hidden items-center gap-1 text-[14px] font-semibold hover:text-red-600 xl:flex ${colors.secondary}`}>
            <ArchiveIcon /> আর্কাইভ
          </Link>

          <div className={`hidden items-center gap-2 border-l border-r px-4 2xl:flex ${colors.border}`}>
            {SOCIALS.map((s) => <SocialButton key={s.name} {...s} />)}
          </div>

          <div className="flex items-center gap-2">
            <button type="button" aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"} aria-pressed={darkMode} onClick={toggleTheme} className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${colors.button}`} title={darkMode ? "Light Mode" : "Dark Mode"}>
              {darkMode ? <SunIcon /> : <MoonIcon />}
            </button>
            <button type="button" aria-label="Account" className={`flex h-8 w-8 items-center justify-center rounded-full transition ${colors.button}`}>
              <UserIcon />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}