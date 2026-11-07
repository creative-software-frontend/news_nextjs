'use client';

import React, { useState } from "react";
import Image from "next/image";

// 1. Column 1 Data
const latestNewsData = [
    { id: 1, title: "পর্যটন মেলা ২০২৬ শুরু বৃহস্পতিবার...", date: "২৭ অক্টোবর, ২০২৬", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=200&auto=format&fit=crop&q=80" },
    { id: 2, title: "৩১ অক্টোবর প্রকাশ এইচএসসি ফলাফল...", date: "২৭ অক্টোবর, ২০২৬", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=200&auto=format&fit=crop&q=80" },
    { id: 3, title: "জাপান সফরে তারেক রহমান বিনিয়োগ ও...", date: "২৬ অক্টোবর, ২০২৬", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&auto=format&fit=crop&q=80" },
];

// 2. Column 2 Sub-News 3x3 Grid Data
const subNewsGrid = [
    { id: 1, title: "৩১ অক্টোবর প্রকাশ এইচএসসি ফলাফল জানবেন যেভাবে", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&auto=format&fit=crop&q=80" },
    { id: 2, title: "জাপান সফরে তারেক রহমান বিনিয়োগ ও বাণিজ্যে গুরুত্ব", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&auto=format&fit=crop&q=80" },
    { id: 3, title: "ঘূর্ণিঝড় অর্ণবের আশঙ্কায় চার সমুদ্রবন্দরে সতর্ক সংকেত", image: "" },
    { id: 4, title: "ঢাকাই মস্লিনের বিশ্ববাজারে প্রবেশ নতুন সম্ভাবনা", image: "" },
    { id: 5, title: "শাহজালাল বিমানবন্দরে লাইভ ব্যাগেজ ট্রেকিং চালু", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&auto=format&fit=crop&q=80" },
    { id: 6, title: "টোকিওতে ২৭ অক্টোবর তারেক রহমান ও তাকাইচি...", image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=400&auto=format&fit=crop&q=80" },
    { id: 7, title: "রাজশাহীতে চাষীদের ১২ কোটি টাকা প্রণোদনা...", image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&auto=format&fit=crop&q=80" },
    { id: 8, title: "জাপানের সঙ্গে কর্মসংস্থান চুক্তি কর্মী নিয়োগ শুরু...", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&auto=format&fit=crop&q=80" },
    { id: 9, title: "স্বৈরাচারের ফেরার পথ খুললে শহীদদের সঙ্গে গাদ্দারি হবে...", image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&auto=format&fit=crop&q=80" },
];

// 3. Column 3 Special Events Data
const specialEventsData = [
    { id: 1, title: "পর্যটন মেলা ২০২৬ শুরু বৃহস্পতিবার ঢাকায় অংশ নেবে ২০টির বেশি দেশ", time: "৯ দিন আগে", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=200&auto=format&fit=crop&q=80" },
    { id: 2, title: "৩১ অক্টোবর প্রকাশ এইচএসসি ফলাফল জানবেন যেভাবে", time: "৯ দিন আগে", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=200&auto=format&fit=crop&q=80" },
    { id: 3, title: "জাপান সফরে তারেক রহমান বিনিয়োগ ও বাণিজ্যে গুরুত্ব", time: "১০ দিন আগে", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&auto=format&fit=crop&q=80" },
    { id: 4, title: "ঘূর্ণিঝড় অর্ণবের আশঙ্কায় চার সমুদ্রবন্দরে সতর্ক সংকেত", time: "১০ দিন আগে", image: "https://images.unsplash.com/photo-1527489377706-5bf97e601852?w=200&auto=format&fit=crop&q=80" },
];

const CalendarIcon = ({ className = "w-3.5 h-3.5" }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
);

export default function RedHoverNewsLayout() {
    const [storyTab, setStoryTab] = useState("photo");

    return (
        <section className="bg-[#f0f2f5] py-6 font-sans dark:bg-black">
            <div className="mx-auto max-w-[1280px] px-4">

                {/* Main 3-Column Wrapper */}
                <div className="grid grid-cols-1 gap-6 rounded-sm border border-[#e5e7eb] bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-black lg:grid-cols-[300px_1fr_310px]">

                    {/* ==================== COLUMN 1: সর্বশেষ সংবাদ ==================== */}
                    <div className="flex flex-col lg:border-r lg:border-[#e5e7eb] lg:pr-5 dark:lg:border-gray-800">
                        <div className="mb-4 flex items-center justify-between border-b-2 border-[#e5e7eb] pb-3 dark:border-gray-800">
                            <div className="flex items-center gap-2">
                                <span className="inline-block h-6 w-1.5 bg-[#dc2626]"></span>
                                <h3 className="text-[18px] font-bold text-[#111827] dark:text-white">সর্বশেষ সংবাদ</h3>
                                <div className="ml-1 hidden h-[2px] w-10 bg-[#111827] dark:bg-gray-300 sm:block"></div>
                            </div>
                            <a href="#more" className="text-[14px] font-semibold text-[#374151] hover:text-[#dc2626] dark:text-gray-300 dark:hover:text-red-500">
                                আরো &gt;
                            </a>
                        </div>

                        <div className="flex flex-col gap-4">
                            {latestNewsData.map((item) => (
                                <div key={item.id} className="group flex cursor-pointer items-start gap-3 border-b border-[#f3f4f6] pb-4 last:border-b-0 dark:border-gray-800">
                                    <div className="relative h-[75px] w-[110px] flex-shrink-0 overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            sizes="110px"
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="flex flex-1 flex-col justify-between">
                                        <h4 className="line-clamp-2 text-[14px] font-bold leading-snug text-[#111827] transition-colors group-hover:text-red-600 dark:text-gray-100 dark:group-hover:text-red-500">
                                            {item.title}
                                        </h4>
                                        <div className="mt-2 flex items-center gap-1.5 text-[12px] text-[#6b7280] dark:text-gray-400">
                                            <CalendarIcon />
                                            <span>{item.date}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ==================== COLUMN 2: MIDDLE COLUMN ==================== */}
                    <div className="my-2 flex flex-col lg:px-4">

                        {/* Primary Lead Story */}
                        <div className="group mb-8 flex cursor-pointer flex-col gap-4 border-b border-[#e5e7eb] pb-8 dark:border-gray-800">
                            <div className="relative h-[320px] w-full overflow-hidden rounded-sm">
                                <Image
                                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80"
                                    alt="Main Lead"
                                    fill
                                    priority
                                    sizes="(min-width: 1024px) 640px, 100vw"
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            <h1 className="my-2 text-2xl font-extrabold leading-tight text-[#111827] transition-colors group-hover:text-red-600 dark:text-white dark:group-hover:text-red-500 lg:text-[26px]">
                                পর্যটন মেলা ২০২৬ শুরু বৃহস্পতিবার ঢাকায় অংশ নেবে ২০টির বেশি দেশ
                            </h1>

                            <p className="my-1 line-clamp-2 text-[14px] leading-relaxed text-[#4b5563] dark:text-gray-400">
                                কৃত্রিম বুদ্ধিমত্তা (আই), প্রযুক্তিগত উদ্ভাবন ও টেকসই পর্যটন উন্নয়নকে গুরুত্ব দিয়ে বৃহস্পতিবার (২৯ অক্টোবর) রাজধানীতে শুরু হচ্ছে তিন দিনব্যাপী বাংলাদেশ ট্রাভেল অ্যান্ড ট্যুরিজম ফেয়ার (বিটিটিএফ)...
                            </p>

                            <div className="mt-2 flex items-center gap-4 text-[13px] font-medium text-[#6b7280] dark:text-gray-400">
                                <span className="flex items-center gap-1.5">
                                    <CalendarIcon className="h-4 w-4 text-gray-400" />
                                    ২৭ অক্টোবর, ২০২৬
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                    নিউজ ডেস্ক
                                </span>
                            </div>
                        </div>

                        {/* Secondary Sub-News 3x3 Grid */}
                        <div className="my-4 grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-3">
                            {subNewsGrid.map((sub, index) => (
                                <div
                                    key={sub.id}
                                    className={`group my-2 flex cursor-pointer flex-col gap-3 border-b border-[#e5e7eb] py-3 dark:border-gray-800 ${
                                        (index + 1) % 3 !== 0 ? "sm:border-r sm:border-[#e5e7eb] sm:pr-4 dark:sm:border-gray-800" : ""
                                    }`}
                                >
                                    <div className="relative my-1 h-[115px] w-full overflow-hidden rounded-sm">
                                        <Image
                                            src={sub.image}
                                            alt={sub.title}
                                            fill
                                            sizes="(min-width: 640px) 200px, 100vw"
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    <h4 className="my-2 line-clamp-3 text-[15px] font-bold leading-snug text-[#1f2937] transition-colors group-hover:text-red-600 dark:text-gray-100 dark:group-hover:text-red-500">
                                        {sub.title}
                                    </h4>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ==================== COLUMN 3 ==================== */}
                    <div className="flex flex-col gap-5 lg:border-l lg:border-[#e5e7eb] lg:pl-5 dark:lg:border-gray-800">

                        {/* Photo / Video Story */}
                        <div className="flex flex-col gap-4 rounded-md border border-[#e2e8f0] bg-[#f0f4f9] p-4 dark:border-gray-800 dark:bg-[#0a0a0a]">
                            <div className="flex gap-4 border-b border-[#cbd5e1] pb-1 dark:border-gray-800">
                                <button
                                    type="button"
                                    onClick={() => setStoryTab("photo")}
                                    className={`relative flex items-center gap-1.5 pb-2 text-[14px] font-bold transition-all ${
                                        storyTab === "photo"
                                            ? "text-[#1e293b] dark:text-white"
                                            : "text-[#64748b] hover:text-[#1e293b] dark:text-gray-400 dark:hover:text-white"
                                    }`}
                                >
                                    <span className="text-[#3b82f6]">🖼️</span> ফটো স্টোরি
                                    {storyTab === "photo" && (
                                        <span className="absolute bottom-[-1px] left-0 h-[2.5px] w-full bg-[#dc2626]"></span>
                                    )}
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setStoryTab("video")}
                                    className={`relative flex items-center gap-1.5 pb-2 text-[14px] font-bold transition-all ${
                                        storyTab === "video"
                                            ? "text-[#1e293b] dark:text-white"
                                            : "text-[#64748b] hover:text-[#1e293b] dark:text-gray-400 dark:hover:text-white"
                                    }`}
                                >
                                    <span className="text-[#dc2626]">▶</span> ভিডিও স্টোরি
                                    {storyTab === "video" && (
                                        <span className="absolute bottom-[-1px] left-0 h-[2.5px] w-full bg-[#dc2626]"></span>
                                    )}
                                </button>
                            </div>

                            <div className="group relative mx-auto aspect-[3/4.5] w-[185px] cursor-pointer overflow-hidden rounded-md bg-black shadow-sm">
                                <Image
                                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80"
                                    alt="Bangladeshi Film Actress Pori Moni"
                                    fill
                                    sizes="185px"
                                    className="object-cover opacity-90 transition-transform duration-300 group-hover:scale-105"
                                />

                                <div className="absolute left-2.5 top-2.5 flex items-center gap-1.5">
                                    <span className="flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-medium text-white">
                                        <span className="inline-block h-3 w-3 rounded-full bg-cyan-400"></span>
                                        admin
                                    </span>
                                    <span className="flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-medium text-white">
                                        👁 39
                                    </span>
                                </div>

                                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-md border border-white/20 bg-black/40 text-lg text-white/90 shadow-md">
                                        📷
                                    </div>
                                </div>

                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3 text-white">
                                    <h4 className="text-[13px] font-bold leading-tight drop-shadow-sm">
                                        Bangladeshi Film Actress Pori Moni
                                    </h4>
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-1">
                                <button
                                    type="button"
                                    className="flex items-center gap-1 rounded-full border border-[#cbd5e1] bg-white px-3 py-1.5 text-[12px] font-semibold text-[#475569] shadow-sm transition hover:bg-slate-50 dark:border-gray-700 dark:bg-black dark:text-gray-200 dark:hover:bg-gray-900"
                                >
                                    সব স্টোরি দেখুন <span className="text-[11px]">&rarr;</span>
                                </button>

                                <div className="flex items-center gap-1.5">
                                    <button
                                        type="button"
                                        className="flex h-7 w-7 items-center justify-center rounded-full border border-[#cbd5e1] bg-white text-xs font-bold text-[#475569] shadow-sm transition hover:bg-slate-50 dark:border-gray-700 dark:bg-black dark:text-gray-200 dark:hover:bg-gray-900"
                                    >
                                        &lt;
                                    </button>
                                    <button
                                        type="button"
                                        className="flex h-7 w-7 items-center justify-center rounded-full border border-[#cbd5e1] bg-white text-xs font-bold text-[#475569] shadow-sm transition hover:bg-slate-50 dark:border-gray-700 dark:bg-black dark:text-gray-200 dark:hover:bg-gray-900"
                                    >
                                        &gt;
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* বিশেষ আয়োজন */}
                        <div className="flex flex-col gap-4 rounded-md border border-[#fef3c7] bg-[#fffbeb] p-4 dark:border-gray-800 dark:bg-[#0a0a0a]">
                            <div className="relative border-b border-[#fde68a] pb-2 dark:border-gray-800">
                                <h3 className="text-[18px] font-extrabold text-[#1e293b] dark:text-white">
                                    বিশেষ আয়োজন
                                </h3>
                                <span className="absolute bottom-[-1px] left-0 h-[2.5px] w-16 bg-[#dc2626]"></span>
                            </div>

                            <div className="flex flex-col gap-3.5">
                                {specialEventsData.map((item) => (
                                    <div
                                        key={item.id}
                                        className="group flex cursor-pointer items-start gap-3 border-b border-[#fef3c7] pb-3.5 last:border-b-0 dark:border-gray-800"
                                    >
                                        <div className="flex flex-1 flex-col justify-between">
                                            <h4 className="line-clamp-2 text-[13px] font-bold leading-snug text-[#1f2937] transition-colors group-hover:text-red-600 dark:text-gray-100 dark:group-hover:text-red-500">
                                                {item.title}
                                            </h4>
                                            <span className="mt-1.5 text-[11px] font-medium text-[#78350f]/70 dark:text-gray-400">
                                                {item.time}
                                            </span>
                                        </div>

                                        <div className="relative h-[60px] w-[95px] flex-shrink-0 overflow-hidden rounded-sm">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                sizes="95px"
                                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}