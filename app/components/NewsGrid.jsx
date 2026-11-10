"use client";

import React from "react";

const CalendarIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-3.5 w-3.5 text-[#ef6665]">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
    </svg>
);

const categories = [
    {
        title: "National",
        moreLink: "#national-more",
        mainNews: {
            image: "/images/national-main.jpg",
            title: "আবুধাবিতে পাঁচ শয়নকক্ষের বিলাসবহুল ভিলা কিনলেন হাল্যান্ড",
            excerpt: "আবুধাবিতে ভিলা কেনার ঘোষণা হাল্যান্ডের ম্যানচেস্টার সিটির তারকা স্ট্রাইকার আর্লিং হাল্যান্ড আবুধাবিতে...",
            date: "১২ অক্টোবর, ২০২৬",
        },
        subNews: [
            { image: "/images/national-sub-1.jpg", title: "লিটনের সেঞ্চুরিতে আফগানিস্তানকে ৪৯...", date: "১২ অক্টোবর, ২০২৬" },
            { image: "/images/national-sub-2.jpg", title: "সাহেবজাদার ঝড়ো ইনিংসে পাকিস্তানের জয়...", date: "১০ অক্টোবর, ২০২৬" },
            { image: "/images/national-sub-3.jpg", title: "বাংলাদেশ ৩৪৬ রানে অলআউট চাপে রাখল...", date: "১০ অক্টোবর, ২০২৬" },
        ],
    },
    {
        title: "খেলা",
        moreLink: "#sports-more",
        mainNews: {
            image: "/images/sports-main.jpg",
            title: "জীবন মৃত্যুর সন্ধিক্ষণে সংগীত পরিচালক ইবরার টিপু",
            excerpt: "আশঙ্কাজনক অবস্থায় ইবরার টিপু দেশের জনপ্রিয় সুরকার ও সংগীত পরিচালক ইবরার টিপুর শারীরিক অবস্হা নি...",
            date: "১১ অক্টোবর, ২০২৬",
        },
        subNews: [
            { image: "/images/sports-sub-1.jpg", title: "মনীষার সঙ্গে বিচ্ছেদে ভেঙে পড়েছিলেন নানা পাটেকর", date: "১০ অক্টোবর, ২০২৬" },
            { image: "/images/sports-sub-2.jpg", title: "কিংবদন্তি নায়ক জসিমের মৃত্যুবার্ষিকী", date: "৯ অক্টোবর, ২০২৬" },
            { image: "/images/sports-sub-3.jpg", title: "মেসির অবসরে পূর্ণিমার কণ্ঠে বিষাদের সুর", date: "৭ অক্টোবর, ২০২৬" },
        ],
    },
    {
        title: "বিনোদন",
        moreLink: "#entertainment-more",
        mainNews: {
            image: "/images/entertainment-main.jpg",
            title: "চলচ্চিত্রে নতুন মোড়, শুটিংয়ে ব্যস্ত শিল্পীরা",
            excerpt: "দেশের চলচ্চিত্র ইন্ডাস্ট্রিতে কাজের ব্যস্ততা বেড়েছে। নতুন সিনেমায় চুক্তিবদ্ধ হচ্ছেন জনপ্রিয় তারকারা...",
            date: "১০ অক্টোবর, ২০২৬",
        },
        subNews: [
            { image: "/images/entertainment-sub-1.jpg", title: "ওটিটিতে আসছে নতুন ওয়েব সিরিজ", date: "৯ অক্টোবর, ২০২৬" },
            { image: "/images/entertainment-sub-2.jpg", title: "গানের রেকর্ডিংয়ে ব্যস্ত তাহসান", date: "৮ অক্টোবর, ২০২৬" },
            { image: "/images/entertainment-sub-3.jpg", title: "দর্শকদের মন জয় করল নতুন নাটক", date: "৭ অক্টোবর, ২০২৬" },
        ],
    },
    {
        title: "Health",
        moreLink: "#health-more",
        mainNews: {
            image: "/images/health-main.jpg",
            title: "শীতের শুরুতে ত্বকের যত্ন ও নানা পরামর্শ",
            excerpt: "ঋতু পরিবর্তনের এই সময়ে ত্বকের শুষ্কতা রোধে করণীয় বিষয়গুলো নিয়ে বিস্তারিত পরামর্শ দিয়েছেন বিশেষজ্ঞরা...",
            date: "১১ অক্টোবর, ২০২৬",
        },
        subNews: [
            { image: "/images/health-sub-1.jpg", title: "সুষম খাবার ও সুস্থ থাকার উপায়", date: "১০ অক্টোবর, ২০২৬" },
            { image: "/images/health-sub-2.jpg", title: "নিয়মিত হাঁটার উপকারিতা", date: "৮ অক্টোবর, ২০২৬" },
            { image: "/images/health-sub-3.jpg", title: "ডায়াবেটিস নিয়ন্ত্রণে রাখার সহজ কিছু টিপস", date: "৬ অক্টোবর, ২০২৬" },
        ],
    },
];

function CategoryColumn({ data }) {
    return (
        <div className="flex flex-col min-w-0">
            {/* Category Header */}
            <div className="flex items-center justify-between border-b-2 border-[#ef4444] pb-2 mb-4">
                <div className="flex items-center gap-2">
                    <span className="h-[22px] w-[5px] rounded-sm bg-[#ef4444]" />
                    <h2 className="text-[22px] font-extrabold text-[#171717] dark:text-white">
                        {data.title}
                    </h2>
                </div>
                <a
                    href={data.moreLink}
                    className="flex items-center gap-0.5 text-[13px] font-medium text-gray-600 hover:text-[#ef4444] dark:text-gray-300"
                >
                    আরও নিউজ
                    <span className="text-[20px] leading-none text-[#ef4444]">›</span>
                </a>
            </div>

            {/* Main Featured News */}
            <article className="pb-4 mb-4 border-b border-gray-200 dark:border-[#262626]">
                <img
                    src={data.mainNews.image}
                    alt={data.mainNews.title}
                    className="w-full h-[180px] object-cover mb-3"
                />
                <h3 className="text-[17px] font-bold leading-[1.4] text-black dark:text-white mb-2 hover:text-[#ef4444] cursor-pointer">
                    {data.mainNews.title}
                </h3>
                <p className="text-[13px] text-gray-600 dark:text-gray-300 line-clamp-2 leading-[1.5] mb-2">
                    {data.mainNews.excerpt}
                </p>
                <div className="flex items-center gap-1.5 text-[11px] text-gray-500 dark:text-gray-400">
                    <CalendarIcon />
                    <span>{data.mainNews.date}</span>
                </div>
            </article>

            {/* Sub News List (3 items) */}
            <div className="flex flex-col gap-4">
                {data.subNews.map((item, index) => (
                    <article key={index} className="flex gap-3 items-center pb-3 border-b border-gray-100 last:border-b-0 last:pb-0 dark:border-[#1f1f1f]">
                        <img
                            src={item.image}
                            alt=""
                            className="h-[55px] w-[80px] shrink-0 object-cover"
                        />
                        <div className="min-w-0">
                            <h4 className="line-clamp-2 text-[14px] font-bold leading-[1.4] text-black dark:text-white hover:text-[#ef4444] cursor-pointer">
                                {item.title}
                            </h4>
                            <div className="mt-1.5 flex items-center gap-1 text-[11px] text-gray-500 dark:text-gray-400">
                                <CalendarIcon />
                                <span>{item.date}</span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}

export default function NewsGrid() {
    return (
        <section className="w-full bg-white py-8 text-black dark:bg-black dark:text-white">
            <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
                {/* 4 Equal Columns Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {categories.map((category, index) => (
                        <CategoryColumn key={index} data={category} />
                    ))}
                </div>
            </div>
        </section>
    );
}