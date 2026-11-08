"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MobileExtras } from "./Heading"; // adjust the path if needed

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
  <Svg className="h-7 w-7" strokeWidth="2.5">
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </Svg>
);

const MenuIcon = () => (
  <Svg className="h-8 w-8" strokeWidth="2.8">
    <path d="M4 6h16M4 12h16M4 18h16" />
  </Svg>
);

const CloseIcon = () => (
  <Svg className="h-8 w-8" strokeWidth="2.8">
    <path d="M6 6l12 12M18 6 6 18" />
  </Svg>
);

const GlobeIcon = () => (
  <span className="relative inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ef4444,#991b1b)] ring-2 ring-gray-200 dark:ring-gray-700">
    <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
  </span>
);

const iconBtn =
  "flex shrink-0 items-center justify-center border-l border-gray-200 text-gray-900 hover:text-red-600 dark:border-gray-800 dark:text-gray-100 dark:hover:text-red-500";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

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

  const close = () => setOpen(false);

  return (
    <div className="w-full bg-white font-[family-name:var(--font-bn)] text-gray-900 dark:bg-black dark:text-white">
      <nav ref={ref} className="relative border-y border-gray-200 bg-white dark:border-gray-800 dark:bg-black">
        <div className="mx-auto flex h-14 max-w-[1400px] items-stretch">
          <Link
            href="/"
            aria-label="Home"
            className="flex w-16 shrink-0 items-center justify-center border-r border-gray-200 text-gray-900 dark:border-gray-800 dark:text-gray-100 sm:w-[72px]"
          >
            <HomeIcon />
          </Link>

          <ul className="flex flex-1 items-stretch overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {NAV_ITEMS.map((item) => (
              <li key={item} className="flex shrink-0 items-stretch border-r border-gray-200 dark:border-gray-800">
                <Link
                  href="#"
                  className="flex items-center whitespace-nowrap px-4 text-[16px] font-semibold text-gray-900 hover:text-red-600 dark:text-gray-100 dark:hover:text-red-500 lg:px-5 lg:text-[17px]"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <button type="button" aria-label="Search" className={`w-14 sm:w-[72px] lg:w-24 ${iconBtn}`}>
            <SearchIcon />
          </button>

          {/* hamburger: categories everywhere, plus the extras on mobile/tablet */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`w-14 sm:w-[72px] lg:w-24 ${iconBtn}`}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {open && (
          <div className="absolute inset-x-0 top-full z-40 max-h-[75vh] overflow-y-auto border-y border-gray-200 bg-white px-4 py-4 shadow-lg dark:border-gray-800 dark:bg-black">
            <div className="mx-auto max-w-[1400px]">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item}
                    href="#"
                    onClick={close}
                    className="rounded-md px-3 py-2 text-[15px] font-semibold text-gray-800 hover:bg-gray-100 hover:text-red-600 dark:text-gray-100 dark:hover:bg-gray-900 dark:hover:text-red-500"
                  >
                    {item}
                  </Link>
                ))}
              </div>

              {/* weather, converter, archive, socials, dark toggle, account: below xl only */}
              <div className="mt-4 border-t border-gray-200 pt-4 dark:border-gray-800 xl:hidden">
                <MobileExtras onNavigate={close} />
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* breaking news ticker */}
      <div className="ps-ticker relative flex h-11 items-stretch overflow-hidden bg-white dark:bg-black">
        <style>{`
    @keyframes ps-marquee {
      from { transform: translateX(0); }
      to { transform: translateX(-50%); }
    }
    .ps-marquee-track {
      animation: ps-marquee 20s linear infinite;
    }
    .ps-ticker:hover .ps-marquee-track {
      animation-play-state: paused;
    }
  `}</style>

        <div className="relative z-10 flex shrink-0 items-center bg-[#e8504f] px-4 text-[17px] font-bold text-white sm:px-6 lg:ml-[min(4vw,52px)] lg:px-7">
          সর্বশেষঃ
        </div>

        <div className="relative flex-1 overflow-hidden">
          <div className="ps-marquee-track flex h-full w-max items-center gap-16 whitespace-nowrap pl-6">
            {[...BREAKING, ...BREAKING].map((t, i) => (
              <Link
                key={i}
                href="#"
                className="flex items-center gap-2 text-[17px] font-semibold text-gray-900 hover:text-red-600 dark:text-gray-100 dark:hover:text-red-500 sm:text-[18px]"
              >
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