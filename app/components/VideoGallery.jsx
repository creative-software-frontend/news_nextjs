"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

/* ---------- data (replace with your API / CMS data) ---------- */
// thumbnail: a local import (import thumb from "../assets/video1.jpg") or "" for the placeholder
const VIDEOS = [
  { id: 1, title: "দৈনিক প্রথম সংবাদ প্রতিনিধি নিয়োগ বিজ্ঞপ্তি..!", date: "১০ আগস্ট, ২০২৬", href: "#", thumbnail: "" },
  { id: 2, title: "ঘূর্ণিঝড় অর্ণবের আশঙ্কায় চার সমুদ্রবন্দরে সতর্ক সংকেত", date: "২৭ অক্টোবর, ২০২৬", href: "#", thumbnail: "" },
  { id: 3, title: "পর্যটন মেলা ২০২৬ শুরু বৃহস্পতিবার ঢাকায়", date: "২৭ অক্টোবর, ২০২৬", href: "#", thumbnail: "" },
  { id: 4, title: "৩১ অক্টোবর প্রকাশ এইচএসসি ফলাফল জানবেন যেভাবে", date: "২৬ অক্টোবর, ২০২৬", href: "#", thumbnail: "" },
  { id: 5, title: "জাপান সফরে তারেক রহমান বিনিয়োগ ও বাণিজ্যে গুরুত্ব", date: "২৬ অক্টোবর, ২০২৬", href: "#", thumbnail: "" },
];

const ALL_VIDEOS_HREF = "#";

/* ---------- icons ---------- */
const Svg = ({ children, className = "h-5 w-5", ...p }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...p}>
    {children}
  </svg>
);

const FilmIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-9 w-9 text-[#e8504f] sm:h-11 sm:w-11">
    <path d="M4 3h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm1 2v2h2V5H5Zm0 4v2h2V9H5Zm0 4v2h2v-2H5Zm0 4v2h2v-2H5ZM17 5v2h2V5h-2Zm0 4v2h2V9h-2Zm0 4v2h2v-2h-2Zm0 4v2h2v-2h-2ZM9 5v6h6V5H9Zm0 8v6h6v-6H9Z" />
  </svg>
);

const ChevronIcon = ({ dir }) => (
  <Svg className="h-5 w-5" strokeWidth="2.5">
    <path d={dir === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
  </Svg>
);

const CalendarIcon = () => (
  <Svg className="h-4 w-4" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </Svg>
);

const CameraPlaceholder = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-16 w-16 text-gray-400 dark:text-gray-600">
    <path d="M4 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2.6l4.5-2.7a.8.8 0 0 1 1.2.7v9.8a.8.8 0 0 1-1.2.7L16 15.4V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z" />
  </svg>
);

/* ---------- video card ---------- */
function VideoCard({ title, date, href, thumbnail }) {
  return (
    <Link
      href={href}
      className="group relative block aspect-video min-w-[85%] shrink-0 snap-start overflow-hidden border border-gray-200 bg-gray-200 dark:border-gray-800 dark:bg-[#171717] sm:min-w-[calc(50%-10px)] xl:min-w-[calc(33.333%-14px)]"
    >
      {/* thumbnail or placeholder */}
      {thumbnail ? (
        <Image
          src={thumbnail}
          alt={title}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 85vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,#e5e7eb,#d1d5db)] dark:bg-[linear-gradient(135deg,#262626,#171717)]">
          <CameraPlaceholder />
        </div>
      )}

      {/* big play button */}
      <span className="absolute left-1/2 top-[40%] flex h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white ring-1 ring-white/20 transition group-hover:scale-110 group-hover:bg-[#e8504f]">
        <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-8 w-8">
          <path d="M8 5.5v13a1 1 0 0 0 1.5.86l11-6.5a1 1 0 0 0 0-1.72l-11-6.5A1 1 0 0 0 8 5.5Z" />
        </svg>
      </span>

      {/* bottom gradient with title + date */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent px-4 pb-4 pt-16 text-white">
        <h3 className="flex items-start gap-2 text-[17px] font-bold leading-snug transition-colors group-hover:text-red-400 sm:text-[18px]">
          <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e8504f]">
            <svg viewBox="0 0 24 24" fill="currentColor" className="ml-px h-2.5 w-2.5">
              <path d="M8 5v14l11-7L8 5Z" />
            </svg>
          </span>
          <span className="line-clamp-2">{title}</span>
        </h3>
        <div className="mt-2 flex items-center gap-1.5 text-[13px] font-medium text-gray-300">
          <CalendarIcon />
          <span>{date}</span>
        </div>
      </div>
    </Link>
  );
}

/* ---------- main export ---------- */
export default function VideoGallery({ videos = VIDEOS, allHref = ALL_VIDEOS_HREF }) {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  const arrowBtn =
    "flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm transition hover:border-[#e8504f] hover:text-[#e8504f] dark:border-gray-800 dark:bg-black dark:text-gray-200 dark:hover:border-red-500 dark:hover:text-red-500 sm:h-12 sm:w-12";

  return (
    <section className="w-full bg-gray-50 font-[family-name:var(--font-bn)] dark:bg-black">
      <div className="mx-auto max-w-[1400px] px-3 py-6 sm:px-5 sm:py-8">
        {/* header */}
        <div className="flex items-center justify-between gap-3 border-b-2 border-[#e8504f] pb-3">
          <div className="flex items-center gap-3">
            <FilmIcon />
            <h2 className="text-[26px] font-extrabold leading-tight text-gray-900 dark:text-white sm:text-[34px]">
              ভিডিও গ্যালারি
            </h2>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href={allHref}
              className="text-[15px] font-semibold text-gray-700 transition hover:text-[#e8504f] dark:text-gray-300 dark:hover:text-red-500 sm:text-[17px]"
            >
              সব ভিডিও
            </Link>
            <button type="button" aria-label="Previous videos" onClick={() => scroll(-1)} className={arrowBtn}>
              <ChevronIcon dir="left" />
            </button>
            <button type="button" aria-label="Next videos" onClick={() => scroll(1)} className={arrowBtn}>
              <ChevronIcon dir="right" />
            </button>
          </div>
        </div>

        {/* slider */}
        <div
          ref={trackRef}
          className="mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {videos.map((v) => (
            <VideoCard key={v.id} {...v} />
          ))}
        </div>
      </div>
    </section>
  );
}