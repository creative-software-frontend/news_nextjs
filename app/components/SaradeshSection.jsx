"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

/* ---------- area data for the dropdowns (extend with all districts/upazilas) ---------- */
const AREAS = {
  ঢাকা: {
    ঢাকা: ["ধানমন্ডি", "মিরপুর", "উত্তরা", "সাভার", "কেরানীগঞ্জ"],
    গাজীপুর: ["গাজীপুর সদর", "টঙ্গী", "কালিয়াকৈর", "কাপাসিয়া"],
    নারায়ণগঞ্জ: ["নারায়ণগঞ্জ সদর", "রূপগঞ্জ", "সোনারগাঁও"],
  },
  চট্টগ্রাম: {
    চট্টগ্রাম: ["কোতোয়ালী", "পাহাড়তলী", "হাটহাজারী", "সীতাকুণ্ড"],
    কক্সবাজার: ["কক্সবাজার সদর", "টেকনাফ", "উখিয়া"],
  },
  রাজশাহী: {
    রাজশাহী: ["বোয়ালিয়া", "পবা", "গোদাগাড়ী"],
    বগুড়া: ["বগুড়া সদর", "শেরপুর", "শিবগঞ্জ"],
  },
  খুলনা: {
    খুলনা: ["খুলনা সদর", "দাকোপ", "ডুমুরিয়া"],
    যশোর: ["যশোর সদর", "অভয়নগর", "বেনাপোল"],
  },
  বরিশাল: {
    বরিশাল: ["বরিশাল সদর", "বাকেরগঞ্জ", "বানারীপাড়া"],
    ভোলা: ["ভোলা সদর", "চরফ্যাশন"],
  },
  সিলেট: {
    সিলেট: ["সিলেট সদর", "জকিগঞ্জ", "বিয়ানীবাজার"],
    মৌলভীবাজার: ["মৌলভীবাজার সদর", "শ্রীমঙ্গল"],
  },
  রংপুর: {
    রংপুর: ["রংপুর সদর", "মিঠাপুকুর", "পীরগঞ্জ"],
    দিনাজপুর: ["দিনাজপুর সদর", "বিরল"],
  },
  ময়মনসিংহ: {
    ময়মনসিংহ: ["ময়মনসিংহ সদর", "ত্রিশাল", "ফুলপুর"],
    জামালপুর: ["জামালপুর সদর", "সরিষাবাড়ী"],
  },
};

/* ---------- news data (replace with your API / CMS data) ---------- */
// image: a local import (import pic from "../assets/pic.jpg") or "" for the grey placeholder
const FEATURED = [
  {
    id: "f1",
    title: "পর্যটন মেলা ২০২৬ শুরু বৃহস্পতিবার ঢাকায় অংশ নেবে ২০টির বেশি দেশ",
    excerpt:
      "কৃত্রিম বুদ্ধিমত্তা (এআই), প্রযুক্তিগত উদ্ভাবন ও টেকসই পর্যটন উন্নয়নকে গুরুত্ব দিয়ে বৃহস্পতিবার (২৯ অক্টোবর) রাজধানীতে শুরু হচ্ছে তিন দিনব্যাপী বাংলাদেশ ট্রাভেল অ্যান্ড ট্যুরিজম ফেয়ার (বিটিটিএফ) ২০২৬। ‘এআইনির্ভর পর্যটন, টেকসই গন্তব্য’ প্রতিপাদ্যে আয়োজিত এ মেলায় ২০টিরও বেশি দেশ অংশ নেবে।",
    date: "২৭ অক্টোবর, ২০২৬",
    href: "#",
    image: "",
  },
  {
    id: "f2",
    title: "৩১ অক্টোবর প্রকাশ এইচএসসি ফলাফল জানবেন যেভাবে",
    excerpt:
      "এইচএসসি ও সমমান পরীক্ষার ফলাফল প্রকাশের তারিখ পুনর্নির্ধারণ করা হয়েছে। নতুন সূচি অনুযায়ী ফলাফল ৩১ অক্টোবর প্রকাশিত হবে।",
    date: "২৭ অক্টোবর, ২০২৬",
    href: "#",
    image: "",
  },
];

const NEWS = [
  { id: 1, title: "ঘূর্ণিঝড় অর্ণবের আশঙ্কায় চার সমুদ্রবন্দরে সতর্ক সংকেত", excerpt: "বঙ্গোপসাগরে অবস্থানরত গভীর নিম্নচাপটি আরও পশ্চিম দিকে অগ্রসর হয়ে ঘূর্ণিঝড়ে...", date: "২৬ অক্টোবর, ২০২৬", href: "#", image: "" },
  { id: 2, title: "ঢাকাই মসলিনের বিশ্ববাজারে প্রবেশ নতুন সম্ভাবনা", excerpt: "বাংলার ঐতিহ্যবাহী বুননশিল্প ঢাকাই মসলিন আবারও বিশ্ববাজারে নিজের অবস্থান তৈরি...", date: "২৬ অক্টোবর, ২০২৬", href: "#", image: "" },
  { id: 3, title: "শাহজালাল বিমানবন্দরে লাইভ ব্যাগেজ মনিটরিংয়ে সন্তুষ্ট যাত্রীরা", excerpt: "হযরত শাহজালাল আন্তর্জাতিক বিমানবন্দরে লাইভ ব্যাগেজ মনিটরিং ব্যবস্থা চালুর ফলে...", date: "২১ অক্টোবর, ২০২৬", href: "#", image: "" },
  { id: 4, title: "টোকিওতে ২৭ অক্টোবর তারেক রহমান ও তাকাইচির বৈঠক", excerpt: "টোকিওতে তারেক রহমান ও তাকাইচির বৈঠক বাংলাদেশের প্রধানমন্ত্রী তারেক রহমান...", date: "২১ অক্টোবর, ২০২৬", href: "#", image: "" },
  { id: 5, title: "রাজশাহীতে আখচাষীদের ১২ কোটি টাকা প্রণোদনা দিলেন প্রধানমন্ত্রী", excerpt: "রাজশাহীতে আখচাষীদের ১২ কোটি টাকা প্রণোদনা রাজশাহী অঞ্চলের ৩৮ হাজার...", date: "২১ অক্টোবর, ২০২৬", href: "#", image: "" },
  { id: 6, title: "জাপানের সঙ্গে কর্মসংস্থান চুক্তি কর্মী নিয়োগ শুরু ১ এপ্রিল", excerpt: "জাপানে কর্মী পাঠাতে নতুন চুক্তি বাংলাদেশের জাপানের সঙ্গে কর্মসংস্থানসংক্রান্ত...", date: "১৯ অক্টোবর, ২০২৬", href: "#", image: "" },
  { id: 7, title: "ঢাকায় আন্তর্জাতিক সম্মেলনে অংশ নিলেন বিদেশি প্রতিনিধিরা", excerpt: "রাজধানীতে আয়োজিত সম্মেলনে বিভিন্ন দেশের প্রতিনিধিরা অংশ নিয়েছেন...", date: "১৮ অক্টোবর, ২০২৬", href: "#", image: "" },
  { id: 8, title: "নতুন মন্ত্রিসভায় যুক্ত হলেন অভিজ্ঞ রাজনীতিবিদরা", excerpt: "মন্ত্রিসভা সম্প্রসারণে নতুন মুখ যুক্ত হয়েছে, শপথ নিয়েছেন ...", date: "১৭ অক্টোবর, ২০২৬", href: "#", image: "" },
  { id: 9, title: "বিমানবন্দরে যাত্রীসেবার মান বাড়াতে নতুন উদ্যোগ", excerpt: "বিমানবন্দরে যাত্রীদের ভোগান্তি কমাতে নতুন ব্যবস্থা নেওয়া হয়েছে...", date: "১৬ অক্টোবর, ২০২৬", href: "#", image: "" },
  { id: 10, title: "বিমানবন্দরে যাত্রীসেবার মান বাড়াতে নতুন উদ্যোগ", excerpt: "বিমানবন্দরে যাত্রীদের ভোগান্তি কমাতে নতুন ব্যবস্থা নেওয়া হয়েছে...", date: "১৬ অক্টোবর, ২০২৬", href: "#", image: "" },
];

/* ---------- icons ---------- */
const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 shrink-0">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-[#e8504f]">
    <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="h-4 w-4">
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const ChevronDown = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

/* ---------- image (photo or placeholder) ---------- */
function Thumb({ image, alt, sizes, className = "" }) {
  return (
    <div className={`relative overflow-hidden bg-gray-200 dark:bg-[#171717] ${className}`}>
      {image ? (
        <Image
          src={image}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      ) : (
        <div className="h-full w-full bg-[linear-gradient(135deg,#e5e7eb,#d1d5db)] transition-transform duration-500 group-hover:scale-110 dark:bg-[linear-gradient(135deg,#262626,#171717)]" />
      )}
    </div>
  );
}

/* ---------- cards ---------- */
function FeaturedCard({ title, excerpt, date, href, image }) {
  return (
    <Link href={href} className="group flex flex-col border-b border-gray-200 p-3.5 last:border-b-0 dark:border-gray-800 sm:p-[13px]">
      <Thumb image={image} alt={title} sizes="(min-width: 1024px) 270px, 100vw" className="h-[190px] w-full sm:h-[200px]" />

      <h3 className="mt-4 text-[18px] font-bold leading-snug text-[#e8504f] transition-colors group-hover:text-[#c93f3e]">
        {title}
      </h3>

      <p className="mt-2 line-clamp-5 text-[14px] leading-relaxed text-gray-700 dark:text-gray-400">{excerpt}</p>

      <div className="mt-3 flex items-center justify-between border-t border-gray-200 pt-3 dark:border-gray-800">
        <span className="rounded bg-[#e8504f] px-3 py-1.5 text-[12px] font-bold text-white transition-colors group-hover:bg-[#d63f3e]">
          বিস্তারিত &rsaquo;
        </span>
        <span className="flex items-center gap-1.5 text-[11px] text-gray-500 dark:text-gray-400">
          <CalendarIcon />
          {date}
        </span>
      </div>
    </Link>
  );
}

function NewsCard({ title, excerpt, date, href, image }) {
  return (
    <Link href={href} className="group flex flex-col border-b border-r border-gray-200 p-3 dark:border-gray-800">
      <Thumb image={image} alt={title} sizes="(min-width: 1024px) 180px, 50vw" className="aspect-[16/10] w-full" />

      <h3 className="mt-3 line-clamp-3 text-[14px] font-bold leading-snug text-gray-900 transition-colors group-hover:text-[#e8504f] dark:text-gray-100 dark:group-hover:text-red-500">
        {title}
      </h3>

      <p className="mt-1.5 line-clamp-3 text-[12px] leading-relaxed text-gray-600 transition-colors group-hover:text-[#e8504f] dark:text-gray-400 dark:group-hover:text-red-400">
        {excerpt}
      </p>

      <span className="mt-auto flex items-center gap-1.5 pt-3 text-[11px] text-gray-500 transition-colors group-hover:text-[#e8504f] dark:text-gray-400 dark:group-hover:text-red-400">
        <CalendarIcon />
        {date}
      </span>
    </Link>
  );
}

/* ---------- area filter ---------- */
function Select({ label, value, onChange, options, placeholder, disabled }) {
  return (
    <div>
      <label className="mb-1.5 block text-[13px] font-semibold text-gray-800 dark:text-gray-200">{label}</label>
      <div className="relative">
        <select
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          className="h-10 w-full appearance-none rounded-md border border-gray-300 bg-white px-3 pr-9 text-[13px] text-gray-900 outline-none transition focus:border-[#e8504f] disabled:cursor-not-allowed disabled:text-gray-400 dark:border-gray-800 dark:bg-black dark:text-gray-100 dark:focus:border-red-500 dark:disabled:text-gray-600"
        >
          <option value="">{placeholder}</option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <ChevronDown />
      </div>
    </div>
  );
}

function AreaFilter({ onSearch }) {
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [upazila, setUpazila] = useState("");

  const districts = division ? Object.keys(AREAS[division]) : [];
  const upazilas = division && district ? AREAS[division][district] : [];

  const changeDivision = (v) => {
    setDivision(v);
    setDistrict("");
    setUpazila("");
  };
  const changeDistrict = (v) => {
    setDistrict(v);
    setUpazila("");
  };

  return (
    <aside className="h-fit rounded-md border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-[#0a0a0a] lg:sticky lg:top-20">
      <div className="mb-4 flex items-center gap-2 border-b border-gray-200 pb-3 dark:border-gray-800">
        <PinIcon />
        <h2 className="text-[16px] font-bold text-gray-900 dark:text-white">এলাকার খবর</h2>
      </div>

      <div className="flex flex-col gap-4">
        <Select label="বিভাগ নির্বাচন করুন" placeholder="বিভাগ" value={division} onChange={changeDivision} options={Object.keys(AREAS)} />
        <Select label="জেলা নির্বাচন করুন" placeholder="জেলা" value={district} onChange={changeDistrict} options={districts} disabled={!division} />
        <Select label="উপজেলা নির্বাচন করুন" placeholder="উপজেলা" value={upazila} onChange={setUpazila} options={upazilas} disabled={!district} />

        <button
          type="button"
          disabled={!division}
          onClick={() => onSearch({ division, district, upazila })}
          className="flex h-10 items-center justify-center gap-2 rounded-md bg-[#e8504f] text-[14px] font-bold text-white transition hover:bg-[#d63f3e] disabled:cursor-not-allowed disabled:opacity-50"
        >
          <SearchIcon /> খুঁজুন
        </button>
      </div>
    </aside>
  );
}

/* ---------- main export ---------- */
export default function SaradeshSection({ featured = FEATURED, news = NEWS }) {
  const router = useRouter();

  // change the path to your own area page
  const handleSearch = ({ division, district, upazila }) => {
    const q = new URLSearchParams({ division, ...(district && { district }), ...(upazila && { upazila }) });
    router.push(`/area?${q.toString()}`);
  };

  return (
    <section className="w-full bg-white font-[family-name:var(--font-bn)] dark:bg-black">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-6 px-3 py-6 sm:px-5 lg:grid-cols-[minmax(0,1fr)_300px]">
        {/* left: heading + news */}
        <div className="min-w-0">
          <div className="rounded-md border-l-4 border-[#e8504f] bg-gray-50 px-5 py-3 dark:bg-[#171717]">
            <h2 className="flex items-center gap-3 text-[22px] font-extrabold text-gray-900 dark:text-white">
              <span className="h-10 w-[7px] shrink-0 bg-[#e8504f]" />
              আমাদের সারাদেশ
            </h2>
          </div>

          <div className="mt-5 overflow-hidden border border-gray-200 bg-white dark:border-gray-800 dark:bg-black">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.35fr)]">
              {/* featured column */}
              <div className="flex flex-col border-b border-gray-200 dark:border-gray-800 lg:-mb-px lg:border-b-0 lg:border-r">
                {featured.map((f) => (
                  <FeaturedCard key={f.id} {...f} />
                ))}
              </div>

              {/* card grid (the -mr/-mb hides the outer duplicate borders) */}
              <div className="-mb-px -mr-px grid grid-cols-2 lg:grid-cols-3">
                {news.map((n) => (
                  <NewsCard key={n.id} {...n} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* right: area filter */}
        <AreaFilter onSearch={handleSearch} />
      </div>
    </section>
  );
}