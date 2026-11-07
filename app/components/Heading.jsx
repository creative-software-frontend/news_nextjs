"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const WEATHER_URL = "/";
const CONVERTER_URL = "/";
const ARCHIVE_URL = "/";

/* ---------------- icons ---------------- */
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

const MenuIcon = () => (
  <Svg className="h-6 w-6" strokeWidth="2.2">
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Svg>
);

const CloseIcon = () => (
  <Svg className="h-6 w-6" strokeWidth="2.2">
    <path d="M6 6l12 12M18 6 6 18" />
  </Svg>
);

/* ---------------- social links (replace "#" with your real URLs) ---------------- */
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
    bg: "bg-black ring-1 ring-gray-700",
    icon: <path d="M14 4v10.2a3 3 0 1 1-3-3M14 4c.3 2.2 1.8 3.7 4 4" strokeWidth="2.4" />,
  },
];

const SocialButton = ({ name, href, bg, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={name}
    className={`flex h-8 w-8 items-center justify-center rounded-full text-white transition hover:opacity-85 ${bg}`}
  >
    <Svg className="h-[18px] w-[18px]" strokeWidth="2">
      {icon}
    </Svg>
  </a>
);

/* ---------------- shared hooks ---------------- */

// Theme: one source of truth (the <html class="dark">), so every button stays in sync
function useTheme() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const sync = () =>
      setDarkMode(document.documentElement.classList.contains("dark"));

    document.documentElement.classList.toggle(
      "dark",
      localStorage.getItem("theme") === "dark"
    );
    sync();

    window.addEventListener("themechange", sync);
    return () => window.removeEventListener("themechange", sync);
  }, []);

  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    window.dispatchEvent(new Event("themechange"));
  };

  return [darkMode, toggle];
}

// Live Dhaka temperature
function useDhakaTemp() {
  const [temp, setTemp] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=23.8103&longitude=90.4125&current=temperature_2m&timezone=Asia%2FDhaka"
        );
        if (!res.ok) throw new Error("Weather request failed");
        const data = await res.json();
        setTemp(Math.round(data.current.temperature_2m));
      } catch (e) {
        console.error("Weather error:", e);
      }
    };
    load();
    const id = setInterval(load, 600000);
    return () => clearInterval(id);
  }, []);

  return temp;
}

// Bangladesh live date and time
function useBanglaDate() {
  const [line1, setLine1] = useState("তারিখ ও সময় লোড হচ্ছে...");
  const [line2, setLine2] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const f = (opts, locale = "bn-BD") =>
        new Intl.DateTimeFormat(locale, { ...opts, timeZone: "Asia/Dhaka" }).format(now);

      const weekday = f({ weekday: "long" });
      const date = f({ day: "numeric", month: "long", year: "numeric" });
      const time = f({ hour: "2-digit", minute: "2-digit", hour12: true });
      const hijri = f(
        { day: "numeric", month: "long", year: "numeric" },
        "bn-BD-u-ca-islamic-umalqura"
      );

      setLine1(`আজ, ${weekday}, ${date} | ${time}`);
      setLine2(`${hijri} হিজরি`);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return [line1, line2];
}

/* ---------------- shared link styles ---------------- */
const linkCls =
  "flex items-center gap-1.5 text-[15px] font-semibold text-gray-700 hover:text-red-600 dark:text-gray-200 dark:hover:text-red-500";
const roundBtnCls =
  "flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800";

/* =====================================================================
   HeaderMenu: the hamburger. Place it at the END of your navigation list.
   Visible only on mobile/tablet (below xl).
   ===================================================================== */
export function HeaderMenu({ className = "" }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const [darkMode, toggleDarkMode] = useTheme();
  const temp = useDhakaTemp();

  // close on outside tap or Escape
  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className={`relative xl:hidden ${className}`}>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex h-10 w-10 items-center justify-center rounded-md text-gray-800 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-900"
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-72 rounded-xl border border-gray-200 bg-white p-4 font-[family-name:var(--font-bn)] text-gray-900 shadow-lg dark:border-gray-800 dark:bg-black dark:text-white">
          <div className="flex flex-col gap-4">
            <Link href={WEATHER_URL} onClick={() => setOpen(false)} className="flex items-center gap-2 text-[15px] font-medium hover:text-red-600">
              <CloudIcon />
              <span>ঢাকা {temp !== null ? `${temp}°C` : "--"}</span>
            </Link>

            <Link href={CONVERTER_URL} onClick={() => setOpen(false)} className={linkCls}>
              <CalcIcon /> কনভার্টার
            </Link>

            <Link href={ARCHIVE_URL} onClick={() => setOpen(false)} className={linkCls}>
              <ArchiveIcon /> আর্কাইভ
            </Link>

            <div className="flex flex-wrap gap-2.5 border-t border-gray-200 pt-4 dark:border-gray-800">
              {SOCIALS.map((s) => (
                <SocialButton key={s.name} {...s} />
              ))}
            </div>

            <div className="flex items-center gap-3 border-t border-gray-200 pt-4 dark:border-gray-800">
              <button
                type="button"
                aria-label="Toggle dark mode"
                aria-pressed={darkMode}
                onClick={toggleDarkMode}
                className={`h-10 w-10 ${roundBtnCls}`}
              >
                {darkMode ? <SunIcon /> : <MoonIcon />}
              </button>
              <button type="button" aria-label="Account" className={`h-10 w-10 ${roundBtnCls}`}>
                <UserIcon />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function MobileExtras({ onNavigate }) {
  const [darkMode, toggleDarkMode] = useTheme();
  const temp = useDhakaTemp();

  return (
    <div className="flex flex-col gap-4">
      <Link href={WEATHER_URL} onClick={onNavigate} className="flex items-center gap-2 text-[15px] font-medium hover:text-red-600">
        <CloudIcon />
        <span>ঢাকা {temp !== null ? `${temp}°C` : "--"}</span>
      </Link>

      <Link href={CONVERTER_URL} onClick={onNavigate} className={linkCls}>
        <CalcIcon /> কনভার্টার
      </Link>

      <Link href={ARCHIVE_URL} onClick={onNavigate} className={linkCls}>
        <ArchiveIcon /> আর্কাইভ
      </Link>

      <div className="flex flex-wrap gap-2.5 border-t border-gray-200 pt-4 dark:border-gray-800">
        {SOCIALS.map((s) => (
          <SocialButton key={s.name} {...s} />
        ))}
      </div>

      <div className="flex items-center gap-3 border-t border-gray-200 pt-4 dark:border-gray-800">
        <button
          type="button"
          aria-label="Toggle dark mode"
          aria-pressed={darkMode}
          onClick={toggleDarkMode}
          className={`h-10 w-10 ${roundBtnCls}`}
        >
          {darkMode ? <SunIcon /> : <MoonIcon />}
        </button>
        <button type="button" aria-label="Account" className={`h-10 w-10 ${roundBtnCls}`}>
          <UserIcon />
        </button>
      </div>
    </div>
  );
}

/* =====================================================================
   Heading
   ===================================================================== */
export default function Heading({ logoSrc = "" }) {
  const [dateLine1, dateLine2] = useBanglaDate();
  const [darkMode, toggleDarkMode] = useTheme();
  const temp = useDhakaTemp();

  return (
    <header className="w-full bg-white font-[family-name:var(--font-bn)] text-gray-900 shadow-sm dark:bg-black dark:text-white">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-3 px-3 py-3 sm:px-5 lg:py-4">
        {/* LEFT: logo (+ date on desktop) */}
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

                <span className="text-[34px] font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-[56px]">
                  প্রথম স<span className="text-red-600">ং</span>বাদ
                </span>

                <span className="flex items-center gap-1 text-[10px] text-gray-800 dark:text-gray-300 sm:text-[11px]">
                  <span className="h-px w-8 bg-gray-800 dark:bg-gray-300 sm:w-10" />
                  prothomsangbad.com
                </span>
              </>
            )}
          </Link>

          {/* desktop date */}
          <div className="ml-6 hidden border-l border-gray-200 pl-5 dark:border-gray-800 xl:block">
            <p className="text-[15px] font-semibold leading-tight">{dateLine1}</p>
            <p className="mt-1 text-[13px] leading-tight text-gray-500 dark:text-gray-400">{dateLine2}</p>
          </div>
        </div>

        {/* MOBILE: date at the right, same text as desktop */}
        <div className="min-w-0 text-right xl:hidden">
          <p className="text-[11px] font-semibold leading-snug sm:text-[13px]">{dateLine1}</p>
          <p className="mt-0.5 text-[10px] leading-snug text-gray-500 dark:text-gray-400 sm:text-[12px]">{dateLine2}</p>
        </div>

        {/* DESKTOP: everything else (hidden on mobile, lives in the hamburger) */}
        <div className="hidden items-center gap-5 xl:flex">
          <Link href={WEATHER_URL} className="flex items-center gap-1.5 text-[15px] font-medium hover:text-red-600">
            <CloudIcon />
            <span>ঢাকা {temp !== null ? `${temp}°C` : "--"}</span>
          </Link>

          <Link href={CONVERTER_URL} className={linkCls}>
            <CalcIcon /> কনভার্টার
          </Link>

          <Link href={ARCHIVE_URL} className={linkCls}>
            <ArchiveIcon /> আর্কাইভ
          </Link>

          <div className="flex items-center gap-2.5 border-l border-r border-gray-200 px-5 dark:border-gray-800">
            {SOCIALS.map((s) => (
              <SocialButton key={s.name} {...s} />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Toggle dark mode"
              aria-pressed={darkMode}
              onClick={toggleDarkMode}
              className={`h-10 w-10 ${roundBtnCls}`}
            >
              {darkMode ? <SunIcon /> : <MoonIcon />}
            </button>

            <button type="button" aria-label="Account" className={`h-10 w-10 ${roundBtnCls}`}>
              <UserIcon />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}