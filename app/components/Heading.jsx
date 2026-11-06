
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const WEATHER_URL = "/";
const CONVERTER_URL = "/";
const ARCHIVE_URL = "/";

const Svg = ({ children, className = "h-5 w-5", ...p }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...p}
  >
    {children}
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
  </svg>
);

const SunIcon = () => (
  <Svg className="h-5 w-5">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
  </Svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <circle cx="12" cy="8" r="4.2" />
    <path d="M4 21c0-4.2 3.6-6.5 8-6.5s8 2.3 8 6.5v.5H4V21Z" />
  </svg>
);

const CloudIcon = () => (
  <Svg className="h-6 w-6 text-gray-400" strokeWidth="1.5">
    <path d="M17.5 17H7a4 4 0 1 1 .8-7.92A5.5 5.5 0 0 1 18.4 10.5 3.3 3.3 0 0 1 17.5 17Z" />
    <path d="M9 20l-.6 1.4M13 20l-.6 1.4M17 20l-.6 1.4" />
  </Svg>
);

const CalcIcon = () => (
  <Svg className="h-4 w-4" strokeWidth="1.8">
    <rect x="5" y="3" width="14" height="18" rx="2" />
    <path d="M8 7h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01M8 18h.01M12 18h.01M16 18h.01" />
  </Svg>
);

const ArchiveIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M3 4h18a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm6 7a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2H9Z" />
  </svg>
);

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

const SocialButton = ({ name, href, bg, icon }) => (
  <Link
    href={href}
    aria-label={name}
    className={`flex h-8 w-8 items-center justify-center rounded-full text-white transition hover:opacity-85 ${bg}`}
  >
    <Svg className="h-[18px] w-[18px]" strokeWidth="2">
      {icon}
    </Svg>
  </Link>
);

export default function Heading({ logoSrc = "" }) {
  const [dateLine1, setDateLine1] = useState("তারিখ ও সময় লোড হচ্ছে...");
  const [dateLine2, setDateLine2] = useState("");
  const [temp, setTemp] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // Bangladesh live date and time
  useEffect(() => {
    const updateDate = () => {
      const now = new Date();

      const weekday = new Intl.DateTimeFormat("bn-BD", {
        weekday: "long",
        timeZone: "Asia/Dhaka",
      }).format(now);

      const date = new Intl.DateTimeFormat("bn-BD", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "Asia/Dhaka",
      }).format(now);

      const time = new Intl.DateTimeFormat("bn-BD", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Dhaka",
      }).format(now);

      const hijri = new Intl.DateTimeFormat("bn-BD-u-ca-islamic-umalqura", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "Asia/Dhaka",
      }).format(now);

      setDateLine1(`আজ, ${weekday}, ${date} | ${time}`);
      setDateLine2(`${hijri} হিজরি`);
    };

    updateDate();
    const interval = setInterval(updateDate, 1000);

    return () => clearInterval(interval);
  }, []);

  // Live Dhaka weather
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=23.8103&longitude=90.4125&current=temperature_2m&timezone=Asia%2FDhaka"
        );

        if (!response.ok) {
          throw new Error("Weather request failed");
        }

        const data = await response.json();
        setTemp(Math.round(data.current.temperature_2m));
      } catch (error) {
        console.error("Weather error:", error);
      }
    };

    fetchWeather();

    const interval = setInterval(fetchWeather, 600000);

    return () => clearInterval(interval);
  }, []);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark";

    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  // Toggle global dark mode
  const toggleDarkMode = () => {
    const nextMode = !darkMode;

    setDarkMode(nextMode);
    document.documentElement.classList.toggle("dark", nextMode);
    localStorage.setItem("theme", nextMode ? "dark" : "light");
  };

  return (
    <header className="w-full bg-white font-[family-name:var(--font-bn)] text-gray-900 shadow-sm">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-3 py-3 sm:px-5 lg:py-4">
        <div className="flex min-w-0 items-center">
          <Link href="/" className="flex shrink-0 flex-col leading-none">
            {logoSrc ? (
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

          <div className="ml-6 hidden border-l border-gray-200 pl-5 xl:block">
            <p className="text-[15px] font-semibold leading-tight">{dateLine1}</p>
            <p className="mt-1 text-[13px] leading-tight text-gray-500">{dateLine2}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-5">
          <Link
            href={WEATHER_URL}
            className="hidden items-center gap-1.5 text-[15px] font-medium hover:text-red-600 xl:flex"
          >
            <CloudIcon />
            <span>ঢাকা {temp !== null ? `${temp}°C` : "--"}</span>
          </Link>

          <Link
            href={CONVERTER_URL}
            className="hidden items-center gap-1.5 text-[15px] font-semibold text-gray-700 hover:text-red-600 xl:flex"
          >
            <CalcIcon /> কনভার্টার
          </Link>

          <Link
            href={ARCHIVE_URL}
            className="hidden items-center gap-1.5 text-[15px] font-semibold text-gray-700 hover:text-red-600 xl:flex"
          >
            <ArchiveIcon /> আর্কাইভ
          </Link>

          <div className="hidden items-center gap-2.5 border-l border-r border-gray-200 px-5 2xl:flex">
            {SOCIALS.map((s) => (
              <SocialButton key={s.name} {...s} />
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              aria-label="Toggle dark mode"
              aria-pressed={darkMode}
              onClick={toggleDarkMode}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 sm:h-10 sm:w-10"
            >
              {darkMode ? <SunIcon /> : <MoonIcon />}
            </button>

            <button
              type="button"
              aria-label="Account"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 sm:h-10 sm:w-10"
            >
              <UserIcon />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}