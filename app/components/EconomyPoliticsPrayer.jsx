"use client";

import React from "react";
import Image from "next/image";
import eco1 from "../assets/economy/economy1.jpg";
import abdul_hai from "../assets/politics/Abdul_hai.jpg";
import help from "../assets/politics/help.jpg";
import protest from "../assets/politics/protest.jpg";
import torch from "../assets/politics/torch.jpg";
import sojib from "../assets/politics/sojib.jpg";
import school from "../assets/politics/school.png";

const CalendarIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-3.5 w-3.5 text-[#ef6665]">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
    </svg>
);

const MosqueIcon = () => (
    <svg viewBox="0 0 180 100" fill="currentColor" className="h-full w-full text-white/95">
        <path d="M0 20h25v-8h22V5h14v7h22v8h22V8h15v12h60v80H0z" opacity=".95" />
        <path d="M34 100V57c0-13 12-23 27-23s27 10 27 23v43H34z" fill="#b91c1c" />
        <path d="M42 100V61c0-9 8-16 19-16s19 7 19 16v39H42z" />
        <path d="M52 100V76a9 9 0 0 1 18 0v24z" fill="#b91c1c" />
        <path d="M101 100V64h15V48h10v16h15v36z" fill="#b91c1c" />
        <path d="M108 100V69h26v31z" />
        <path d="M112 69c0-10 18-10 18 0" fill="#b91c1c" />
        <path d="M8 100V44h17v56zM155 100V37h17v63z" fill="#b91c1c" />
        <path d="M8 44h17l-8.5-15zM155 37h17l-8.5-15z" />
    </svg>
);

const economyNews = [
    {
        image: eco1,
        category: "ব্যবসা-বাণিজ্য",
        title: "দেশের অর্থনীতিতে নতুন সম্ভাবনা, বাড়ছে বিনিয়োগের সুযোগ",
        description: "দেশের বিভিন্ন খাতে বিনিয়োগ ও অর্থনৈতিক কার্যক্রমে নতুন গতি আসার প্রত্যাশা।",
        date: "১০ নভেম্বর, ২০২৬",
    },
];

const politicsNews = [
    {
        image: abdul_hai,
        title: "সাবেক উপমন্ত্রী বীর মুক্তিযোদ্ধা আবুল হাই আর নেই",
        date: "১৫ অক্টোবর, ২০২৬",
    },
    {
        image: help,
        title: "সোনারগাঁয়ে নিহত ৩ শিক্ষার্থীর পাশে এমপি আখতারুজ্জামান মামুন",
        date: "২২ সেপ্টেম্বর, ২০২৬",
    },
    {
        image: protest,
        title: "বহিষ্কারাদেশ প্রত্যাহারের পর সজীবের ডাকে সোনারগাঁয়ের রাজপথে...",
        date: "২৯ সেপ্টেম্বর, ২০২৬",
    },
    {
        image: torch,
        title: "খায়রুল ইসলাম সজীবের নেতৃত্বে সোনারগাঁয়ে মশাল মিছিল",
        date: "১৯ সেপ্টেম্বর, ২০২৬",
    },
    {
        image: sojib,
        title: "খায়রুল ইসলাম সজীবের বহিষ্কারাদেশ প্রত্যাহার",
        date: "২৭ সেপ্টেম্বর, ২০২৬", 
    },
    {
        image: school,
        title: "বুড়াই স্কুল পরিদর্শনে যুবকাইমা",
        date: "১৫ সেপ্টেম্বর, ২০২৬",
    },
];

const prayerTimes = [
    { name: "ফজর", time: "৪:৫২ ভোর" },
    { name: "যোহর", time: "১১:৪২ দুপুর" },
    { name: "আসর", time: "২:৫৭ বিকেল" },
    { name: "মাগরিব", time: "৫:১৫ সন্ধ্যা" },
    { name: "ইশা", time: "৬:৩২ রাত" },
];

function SectionHeading({ title }) {
    return (
        <div className="flex items-center justify-between border-b border-gray-200 pb-2 dark:border-[#262626]">
            <div className="flex items-center gap-2.5">
                <span className="h-[26px] w-[6px] rounded-sm bg-[#ff5b61]" />
                <h2 className="text-[22px] font-extrabold text-[#171717] dark:text-white">
                    {title}
                </h2>
            </div>

            <a href="#more-news" className="flex items-center gap-1 text-[13px] font-medium text-gray-600 hover:text-[#ef4444] dark:text-gray-300">
                আরো নিউজ
                <span className="text-[22px] leading-none text-[#ef4444]">›</span>
            </a>
        </div>
    );
}

function EconomyCard({ news, featured = false }) {
    return (
        <article className={`group min-w-0 border-b border-gray-100 py-4 dark:border-[#1f1f1f] ${featured ? "" : "flex gap-3"}`}>
            <div className={`relative overflow-hidden bg-gray-100 dark:bg-[#191919] ${featured ? "mb-3 h-[155px] w-full" : "h-[76px] w-[105px] shrink-0"}`}>
                <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    sizes={featured ? "(max-width: 1024px) 100vw, 330px" : "105px"}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <div className="min-w-0">
                <span className="mb-1 block text-[11px] font-semibold text-[#ef6665]">
                    {news.category}
                </span>

                <h3 className="line-clamp-3 text-[15px] font-bold leading-[1.55] text-black transition-colors group-hover:text-[#ef6665] dark:text-white">
                    {news.title}
                </h3>

                {featured && (
                    <p className="mt-2 line-clamp-2 text-[12px] leading-relaxed text-gray-500 dark:text-gray-400">
                        {news.description}
                    </p>
                )}

                <div className="mt-2 flex items-center gap-1.5 text-[11px] text-gray-500 dark:text-gray-400">
                    <CalendarIcon />
                    <span>{news.date}</span>
                </div>
            </div>
        </article>
    );
}

function PoliticsCard({ news }) {
    return (
        <article className="group flex min-w-0 gap-3 border-b border-gray-100 py-4 dark:border-[#1f1f1f]">
            <div className="relative h-[76px] w-[112px] shrink-0 overflow-hidden bg-gray-100 dark:bg-[#191919]">
                <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    sizes="112px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <div className="min-w-0">
                <h3 className="line-clamp-3 text-[15px] font-bold leading-[1.5] text-black transition-colors group-hover:text-[#ef6665] dark:text-white">
                    {news.title}
                </h3>

                <div className="mt-2 flex items-center gap-1.5 text-[11px] text-gray-500 dark:text-gray-400">
                    <CalendarIcon />
                    <span>{news.date}</span>
                </div>
            </div>
        </article>
    );
}

function PrayerTimes() {
    return (
        <div>
            <div className="overflow-hidden border border-[#e4a12b] bg-white dark:border-[#b87916] dark:bg-black">
                <div className="relative flex h-[92px] items-center justify-between overflow-hidden bg-[#b91c1c] px-5 text-white">
                    <div className="absolute inset-y-0 left-0 w-[48%] opacity-95">
                        <MosqueIcon />
                    </div>

                    <div className="relative z-10 ml-auto text-right">
                        <h2 className="text-[21px] font-extrabold leading-[1.3]">
                            নামাজের
                            <br />
                            সময়সূচী
                        </h2>
                    </div>
                </div>

                <div className="bg-[#e49a20] px-2 py-3 text-center text-[15px] font-bold text-white">
                    ঢাকা, মঙ্গলবার, ১০ Nov ২০২৬
                </div>

                <div>
                    {prayerTimes.map((prayer) => (
                        <div key={prayer.name} className="grid grid-cols-2 border-b border-[#e4a12b] text-center text-[15px] font-bold text-black last:border-b-0 dark:text-white">
                            <div className="border-r border-[#e4a12b] px-2 py-2.5">
                                {prayer.name}
                            </div>
                            <div className="px-2 py-2.5">
                                {prayer.time}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <p className="py-5 text-center text-[12px] tracking-[1.5px] text-gray-400">
                ADVERTISEMENT
            </p>
        </div>
    );
}

export default function EconomyPoliticsPrayer() {
    return (
        <section className="w-full bg-white py-7 text-black dark:bg-black dark:text-white">
            <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-7 px-4 sm:px-6 lg:grid-cols-[330px_minmax(0,1fr)_364px] lg:gap-8 lg:px-8">

                {/* Economy */}
                <div className="min-w-0">
                    <SectionHeading title="অর্থনীতি" />

                    <div className="mt-1">
                        {economyNews.map((news, index) => (
                            <EconomyCard key={index} news={news} featured={index === 0} />
                        ))}
                    </div>
                </div>

                {/* Politics */}
                <div className="min-w-0 border-t border-gray-200 pt-5 dark:border-[#262626] lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                    <SectionHeading title="রাজনীতি" />

                    <div className="mt-1 grid grid-cols-1 gap-x-6 sm:grid-cols-2">
                        {politicsNews.map((news, index) => (
                            <PoliticsCard key={index} news={news} />
                        ))}
                    </div>
                </div>

                {/* Prayer Times */}
                <div className="border-t border-gray-200 pt-5 dark:border-[#262626] lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                    <PrayerTimes />
                </div>

            </div>
        </section>
    );
}
