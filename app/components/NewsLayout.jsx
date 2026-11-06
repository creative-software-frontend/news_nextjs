'use client';

import React, { useState } from "react";

// 1. Column 1 Data
const latestNewsData = [
    {
        id: 1,
        title: "পর্যটন মেলা ২০২৬ শুরু বৃহস্পতিবার...",
        date: "২৭ অক্টোবর, ২০২৬",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=200&auto=format&fit=crop&q=80"
    },
    {
        id: 2,
        title: "৩১ অক্টোবর প্রকাশ এইচএসসি ফলাফল...",
        date: "২৭ অক্টোবর, ২০২৬",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=200&auto=format&fit=crop&q=80"
    },
    {
        id: 3,
        title: "জাপান সফরে তারেক রহমান বিনিয়োগ ও...",
        date: "২৬ অক্টোবর, ২০২৬",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&auto=format&fit=crop&q=80"
    },
];

// 2. Column 2 Sub-News 3x3 Grid Data
const subNewsGrid = [
    { id: 1, title: "৩১ অক্টোবর প্রকাশ এইচএসসি ফলাফল জানবেন যেভাবে", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&auto=format&fit=crop&q=80" },
    { id: 2, title: "জাপান সফরে তারেক রহমান বিনিয়োগ ও বাণিজ্যে গুরুত্ব", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&auto=format&fit=crop&q=80" },
    { id: 3, title: "ঘূর্ণিঝড় অর্ণবের আশঙ্কায় চার সমুদ্রবন্দরে সতর্ক সংকেত", image: "https://images.unsplash.com/photo-1527489377706-5bf97e601852?w=400&auto=format&fit=crop&q=80" },
    { id: 4, title: "ঢাকাই মস্লিনের বিশ্ববাজারে প্রবেশ নতুন সম্ভাবনা", image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=400&auto=format&fit=crop&q=80" },
    { id: 5, title: "শাহজালাল বিমানবন্দরে লাইভ ব্যাগেজ ট্রেকিং চালু", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&auto=format&fit=crop&q=80" },
    { id: 6, title: "টোকিওতে ২৭ অক্টোবর তারেক রহমান ও তাকাইচি...", image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=400&auto=format&fit=crop&q=80" },
    { id: 7, title: "রাজশাহীতে চাষীদের ১২ কোটি টাকা প্রণোদনা...", image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&auto=format&fit=crop&q=80" },
    { id: 8, title: "জাপানের সঙ্গে কর্মসংস্থান চুক্তি কর্মী নিয়োগ শুরু...", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&auto=format&fit=crop&q=80" },
    { id: 9, title: "স্বৈরাচারের ফেরার পথ খুললে শহীদদের সঙ্গে গাদ্দারি হবে...", image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&auto=format&fit=crop&q=80" },
];

// 3. Column 3 Special Events Data
const specialEventsData = [
    { id: 1, title: "পর্যটন মেলা ২০২৬ শুরু বৃহস্পতিবার ঢাকায় অংশ নেবে ২০টির বেশি দেশ", time: "৯ দিন আগে", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=200&auto=format&fit=crop&q=80" },
    { id: 2, title: "৩১ অক্টোবর প্রকাশ এইচএসসি ফলাফল জানবেন যেভাবে", time: "৯ দিন আগে", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=200&auto=format&fit=crop&q=80" },
    { id: 3, title: "জাপান সফরে তারেক রহমান বিনিয়োগ ও বাণিজ্যে গুরুত্ব", time: "১০ দিন আগে", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&auto=format&fit=crop&q=80" },
    { id: 4, title: "ঘূর্ণিঝড় অর্ণবের আশঙ্কায় চার সমুদ্রবন্দরে সতর্ক সংকেত", time: "১০ দিন আগে", image: "https://images.unsplash.com/photo-1527489377706-5bf97e601852?w=200&auto=format&fit=crop&q=80" },
];

export default function RedHoverNewsLayout() {
    const [storyTab, setStoryTab] = useState("photo");

    return (
        <section className="py-6 bg-[#f0f2f5] font-sans">
            <div className="max-w-[1280px] mx-auto px-4">

                {/* Main 3-Column Wrapper */}
                <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr_310px] gap-6 bg-white p-5 rounded-sm shadow-sm border border-[#e5e7eb]">

                    {/* ==================== COLUMN 1: সর্বশেষ সংবাদ ==================== */}
                    <div className="flex flex-col lg:border-r lg:border-[#e5e7eb] lg:pr-5">
                        <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-[#e5e7eb]">
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-6 bg-[#dc2626] inline-block"></span>
                                <h3 className="font-bold text-[#111827] text-[18px]">সর্বশেষ সংবাদ</h3>
                                <div className="hidden sm:block w-10 h-[2px] bg-[#111827] ml-1"></div>
                            </div>
                            <a href="#more" className="text-[14px] font-semibold text-[#374151] hover:text-[#dc2626]">
                                আরো &gt;
                            </a>
                        </div>

                        <div className="flex flex-col gap-4">
                            {latestNewsData.map((item) => (
                                <div key={item.id} className="group flex gap-3 items-start pb-4 border-b border-[#f3f4f6] last:border-b-0 cursor-pointer">
                                    <div className="w-[110px] h-[75px] overflow-hidden flex-shrink-0">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between">
                                        <h4 className="text-[14px] font-bold text-[#111827] group-hover:text-red-600 transition-colors line-clamp-2 leading-snug">
                                            {item.title}
                                        </h4>
                                        <div className="flex items-center gap-1.5 text-[12px] text-[#6b7280] mt-2">
                                            <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                                <line x1="3" y1="10" x2="21" y2="10"></line>
                                            </svg>
                                            <span>{item.date}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ==================== COLUMN 2: MIDDLE COLUMN ==================== */}
                    <div className="flex flex-col lg:px-4 my-2">

                        {/* Primary Lead Story Container */}
                        <div className="group flex flex-col gap-4 pb-8 mb-8 border-b border-[#e5e7eb] cursor-pointer">
                            <div className="w-full h-[320px] overflow-hidden rounded-sm">
                                <img
                                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80"
                                    alt="Main Lead"
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            <h1 className="text-2xl lg:text-[26px] font-extrabold text-[#111827] group-hover:text-red-600 transition-colors leading-tight my-2">
                                পর্যটন মেলা ২০২৬ শুরু বৃহস্পতিবার ঢাকায় অংশ নেবে ২০টির বেশি দেশ
                            </h1>

                            <p className="text-[14px] text-[#4b5563] line-clamp-2 leading-relaxed my-1">
                                কৃত্রিম বুদ্ধিমত্তা (আই), প্রযুক্তিগত উদ্ভাবন ও টেকসই পর্যটন উন্নয়নকে গুরুত্ব দিয়ে বৃহস্পতিবার (২৯ অক্টোবর) রাজধানীতে শুরু হচ্ছে তিন দিনব্যাপী বাংলাদেশ ট্রাভেল অ্যান্ড ট্যুরিজম ফেয়ার (বিটিটিএফ)...
                            </p>

                            <div className="flex items-center gap-4 text-[13px] text-[#6b7280] mt-2 font-medium">
                                <span className="flex items-center gap-1.5">
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="16" y1="2" x2="16" y2="6"></line>
                                        <line x1="8" y1="2" x2="8" y2="6"></line>
                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                    </svg>
                                    ২৭ অক্টোবর, ২০২৬
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                    নিউজ ডেস্ক
                                </span>
                            </div>
                        </div>

                        {/* Secondary Sub-News 3x3 Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-5 gap-y-10 my-4">
                            {subNewsGrid.map((sub, index) => (
                                <div
                                    key={sub.id}
                                    className={`group flex flex-col gap-3 my-2 py-3 border-b border-[#e5e7eb] cursor-pointer ${
                                        (index + 1) % 3 !== 0 ? "sm:border-r sm:border-[#e5e7eb] sm:pr-4" : ""
                                    }`}
                                >
                                    <div className="w-full h-[115px] overflow-hidden rounded-sm my-1">
                                        <img
                                            src={sub.image}
                                            alt={sub.title}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    <h4 className="text-[15px] font-bold text-[#1f2937] group-hover:text-red-600 transition-colors line-clamp-3 leading-snug my-2">
                                        {sub.title}
                                    </h4>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* ==================== COLUMN 3: ফটো স্টোরি ও বিশেষ আয়োজন ==================== */}
                    <div className="flex flex-col lg:border-l lg:border-[#e5e7eb] lg:pl-5 gap-5">
                        
                        {/* Top Section: Photo / Video Story */}
                        <div className="bg-[#f0f4f9] p-4 rounded-md flex flex-col gap-4 border border-[#e2e8f0]">
                            <div className="flex border-b border-[#cbd5e1] pb-1 gap-4">
                                <button
                                    type="button"
                                    onClick={() => setStoryTab("photo")}
                                    className={`flex items-center gap-1.5 pb-2 text-[14px] font-bold transition-all relative ${
                                        storyTab === "photo" ? "text-[#1e293b]" : "text-[#64748b] hover:text-[#1e293b]"
                                    }`}
                                >
                                    <span className="text-[#3b82f6]">🖼️</span> ফটো স্টোরি
                                    {storyTab === "photo" && (
                                        <span className="absolute bottom-[-1px] left-0 w-full h-[2.5px] bg-[#dc2626]"></span>
                                    )}
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setStoryTab("video")}
                                    className={`flex items-center gap-1.5 pb-2 text-[14px] font-bold transition-all relative ${
                                        storyTab === "video" ? "text-[#1e293b]" : "text-[#64748b] hover:text-[#1e293b]"
                                    }`}
                                >
                                    <span className="text-[#dc2626]">▶</span> ভিডিও স্টোরি
                                    {storyTab === "video" && (
                                        <span className="absolute bottom-[-1px] left-0 w-full h-[2.5px] bg-[#dc2626]"></span>
                                    )}
                                </button>
                            </div>

                            <div className="w-[185px] mx-auto relative rounded-md overflow-hidden aspect-[3/4.5] bg-black group cursor-pointer shadow-sm">
                                <img
                                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80"
                                    alt="Bangladeshi Film Actress Pori Moni"
                                    className="w-full h-full object-cover opacity-90 transition-transform duration-300 group-hover:scale-105"
                                />

                                <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                                    <span className="bg-black/60 text-white text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1 font-medium">
                                        <span className="w-3 h-3 rounded-full bg-cyan-400 inline-block"></span>
                                        admin
                                    </span>
                                    <span className="bg-black/60 text-white text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1 font-medium">
                                        👁 39
                                    </span>
                                </div>

                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="w-10 h-10 bg-black/40 text-white/90 rounded-md flex items-center justify-center text-lg border border-white/20 shadow-md">
                                        📷
                                    </div>
                                </div>

                                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3 text-white">
                                    <h4 className="text-[13px] font-bold leading-tight drop-shadow-sm">
                                        Bangladeshi Film Actress Pori Moni
                                    </h4>
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-1">
                                <button 
                                    type="button" 
                                    className="flex items-center gap-1 px-3 py-1.5 bg-white border border-[#cbd5e1] rounded-full text-[12px] font-semibold text-[#475569] hover:bg-slate-50 transition shadow-sm"
                                >
                                    সব স্টোরি দেখুন <span className="text-[11px]">&rarr;</span>
                                </button>

                                <div className="flex items-center gap-1.5">
                                    <button 
                                        type="button" 
                                        className="w-7 h-7 bg-white border border-[#cbd5e1] rounded-full flex items-center justify-center text-[#475569] hover:bg-slate-50 transition shadow-sm text-xs font-bold"
                                    >
                                        &lt;
                                    </button>
                                    <button 
                                        type="button" 
                                        className="w-7 h-7 bg-white border border-[#cbd5e1] rounded-full flex items-center justify-center text-[#475569] hover:bg-slate-50 transition shadow-sm text-xs font-bold"
                                    >
                                        &gt;
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Section: বিশেষ আয়োজন */}
                        <div className="bg-[#fffbeb] p-4 rounded-md flex flex-col gap-4 border border-[#fef3c7]">
                            <div className="relative pb-2 border-b border-[#fde68a]">
                                <h3 className="text-[18px] font-extrabold text-[#1e293b]">
                                    বিশেষ আয়োজন
                                </h3>
                                <span className="absolute bottom-[-1px] left-0 w-16 h-[2.5px] bg-[#dc2626]"></span>
                            </div>

                            <div className="flex flex-col gap-3.5">
                                {specialEventsData.map((item) => (
                                    <div 
                                        key={item.id} 
                                        className="group flex gap-3 items-start pb-3.5 border-b border-[#fef3c7] last:border-b-0 cursor-pointer"
                                    >
                                        <div className="flex-1 flex flex-col justify-between">
                                            <h4 className="text-[13px] font-bold text-[#1f2937] group-hover:text-red-600 transition-colors line-clamp-2 leading-snug">
                                                {item.title}
                                            </h4>
                                            <span className="text-[11px] text-[#78350f]/70 mt-1.5 font-medium">
                                                {item.time}
                                            </span>
                                        </div>

                                        <div className="w-[95px] h-[60px] overflow-hidden rounded-sm flex-shrink-0">
                                            <img 
                                                src={item.image} 
                                                alt={item.title} 
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
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