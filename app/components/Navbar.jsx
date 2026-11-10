
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MobileExtras } from "./Heading";

const NAV_ITEMS = [
  "সর্বশেষ", "জাতীয়", "রাজনীতি", "ব্যবসা বাণিজ্য", "চাকরি",
  "বাংলাদেশ", "পশ্চিমবঙ্গ", "আন্তর্জাতিক", "শিক্ষাঙ্গন",
  "বিনোদন", "খেলা", "বিজ্ঞান ও তথ্যপ্রযুক্তি", "ধর্ম",
  "লাইফস্টাইল", "সাহিত্য", "আবহাওয়া", "ফ্যাক্টচেক",
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

const iconBtn =
  "flex shrink-0 items-center justify-center border-l border-gray-200 text-gray-900 hover:text-red-600 dark:border-gray-800 dark:text-gray-100 dark:hover:text-red-500";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

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
          <Link href="/" aria-label="Home" className="flex w-16 shrink-0 items-center justify-center border-r border-gray-200 text-gray-900 dark:border-gray-800 dark:text-gray-100 sm:w-[72px]">
            <HomeIcon />
          </Link>

          <ul className="flex flex-1 items-stretch overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {NAV_ITEMS.map((item) => (
              <li key={item} className="flex shrink-0 items-stretch border-r border-gray-200 dark:border-gray-800">
                <Link href="#" className="flex items-center whitespace-nowrap px-4 text-[16px] font-semibold text-gray-900 hover:text-red-600 dark:text-gray-100 dark:hover:text-red-500 lg:px-5 lg:text-[17px]">
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <button type="button" aria-label="Search" className={`w-14 sm:w-[72px] lg:w-24 ${iconBtn}`}>
            <SearchIcon />
          </button>

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
                  <Link key={item} href="#" onClick={close} className="rounded-md px-3 py-2 text-[15px] font-semibold text-gray-800 hover:bg-gray-100 hover:text-red-600 dark:text-gray-100 dark:hover:bg-gray-900 dark:hover:text-red-500">
                    {item}
                  </Link>
                ))}
              </div>

              <div className="mt-4 border-t border-gray-200 pt-4 dark:border-gray-800 xl:hidden">
                <MobileExtras onNavigate={close} />
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
