"use client";

import React, { useState, useEffect } from "react";

// Icons
const CalendarIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-3.5 w-3.5 text-[#ef6665]">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
    </svg>
);

const WeatherCloudSunIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6 text-yellow-300">
        <path d="M13 10V3M17.5 4.5l-2 2M21 10h-3M5 14a4 4 0 1 1 7.5-2h.5a3.5 3.5 0 1 1 0 7H5z" />
    </svg>
);

const ChevronRight = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-gray-400 group-hover:text-[#ef4444]">
        <path d="M9 18l6-6-6-6" />
    </svg>
);

const LocationPinIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-white">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
);

// Menu items data for the left column ("আরও দেখুন")
const menuItems = [
    { title: "ইতিহাস পড়ুন", href: "#history" },
    { title: "রাজনৈতিক খবর পড়ুন", href: "#politics" },
    { title: "শহর খুঁজুন", href: "#cities" },
    { title: "ভ্রমণ টিকিট বুক করুন", href: "#travel" },
    { title: "সরকারি আদেশ দেখুন", href: "#orders" },
    { title: "চাকরি খুঁজুন", href: "#jobs" },
    { title: "ঘড়ি কিনুন", href: "#watches" },
    { title: "মহাকাশ জানুন", href: "#space" },
];

export default function WeatherAndMoreComponent() {
    // Realtime weather state fetched from Open-Meteo for Dhaka (lat: 23.8103, lon: 90.4125)
    const [currentTemp, setCurrentTemp] = useState("31");
    const [highTemp, setHighTemp] = useState("32");
    const [lowTemp, setLowTemp] = useState("23");
    const [forecast, setForecast] = useState([
        { day: "আজ", tempMax: "32°", tempMin: "23°" },
        { day: "বুধ", tempMax: "31°", tempMin: "21°" },
        { day: "বৃহঃ", tempMax: "30°", tempMin: "22°" },
        { day: "শুক্র", tempMax: "30°", tempMin: "22°" },
        { day: "শনি", tempMax: "30°", tempMin: "21°" },
        { day: "রবি", tempMax: "30°", tempMin: "22°" },
        { day: "সোম", tempMax: "31°", tempMin: "22°" },
    ]);

    useEffect(() => {
        async function fetchRealtimeWeather() {
            try {
                const res = await fetch(
                    "https://api.open-meteo.com/v1/forecast?latitude=23.8103&longitude=90.4125&current=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=auto"
                );
                const data = await res.json();
                if (data && data.current) {
                    setCurrentTemp(Math.round(data.current.temperature_2m).toString());
                }
                if (data && data.daily && data.daily.temperature_2m_max) {
                    setHighTemp(Math.round(data.daily.temperature_2m_max[0]).toString());
                    setLowTemp(Math.round(data.daily.temperature_2m_min[0]).toString());

                    // Map days if needed or use dynamic values
                    const daysBangla = ["আজ", "বুধ", "বৃহঃ", "শুক্র", "শনি", "রবি", "সোম"];
                    const newForecast = data.daily.temperature_2m_max.slice(0, 7).map((max, idx) => ({
                        day: daysBangla[idx] || "দিন",
                        tempMax: `${Math.round(max)}°`,
                        tempMin: `${Math.round(data.daily.temperature_2m_min[idx])}°`,
                    }));
                    setForecast(newForecast);
                }
            } catch (error) {
                console.error("Failed to fetch weather data:", error);
            }
        }
        fetchRealtimeWeather();
    }, []);

    return (
        <section className="w-full bg-white py-8 text-black dark:bg-black dark:text-white">
            <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
                {/* 2 Grid Columns Side-by-Side with a Border Between Them */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:divide-x lg:divide-gray-200 dark:lg:divide-[#262626]">
                    
                    {/* Column 1: More Links Component (Image 1 reference) */}
                    <div className="lg:pr-8">
                        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-[#262626] dark:bg-[#121212]">
                            <div className="text-center text-[12px] text-gray-400 mb-3 tracking-wide">
                                বিজ্ঞাপন
                            </div>
                            <div className="overflow-hidden rounded-md border border-gray-200 dark:border-[#262626]">
                                <div className="bg-[#eef2fb] px-4 py-3 text-[18px] font-bold text-[#171717] dark:bg-[#1e2530] dark:text-white">
                                    আরও দেখুন
                                </div>
                                <div className="divide-y divide-gray-100 dark:divide-[#1f1f1f]">
                                    {menuItems.map((item, index) => (
                                        <a
                                            key={index}
                                            href={item.href}
                                            className="group flex items-center justify-between bg-white px-4 py-3.5 transition-colors hover:bg-gray-50 dark:bg-black dark:hover:bg-[#1a1a1a]"
                                        >
                                            <span className="text-[16px] font-medium text-gray-800 group-hover:text-[#ef4444] dark:text-gray-200">
                                                {item.title}
                                            </span>
                                            <ChevronRight />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Weather Component (Image 2 reference with Realtime Data) */}
                    <div className="lg:pl-8">
                        <div className="space-y-6">
                            {/* Weather Header */}
                            <div className="flex items-center justify-between border-b border-gray-200 pb-2 dark:border-[#262626]">
                                <div className="flex items-center gap-2.5">
                                    <span className="h-[26px] w-[6px] rounded-sm bg-[#ef5b61]" />
                                    <div className="flex items-center gap-2">
                                        <WeatherCloudSunIcon />
                                        <h2 className="text-[22px] font-extrabold text-[#171717] dark:text-white">
                                            আবহাওয়া
                                        </h2>
                                    </div>
                                </div>
                                <a
                                    href="#more-weather"
                                    className="flex items-center gap-1 text-[13px] font-medium text-gray-600 hover:text-[#ef4444] dark:text-gray-300"
                                >
                                    আরও নিউজ
                                    <span className="text-[22px] leading-none text-[#ef4444]">›</span>
                                </a>
                            </div>

                            {/* Weather Featured News Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {/* News Card 1 */}
                                <article className="flex flex-col">
                                    <img
                                        src="/images/weather-1.jpg"
                                        alt="Cyclone warning"
                                        className="h-[150px] w-full object-cover mb-3 rounded"
                                    />
                                    <h3 className="line-clamp-2 text-[16px] font-bold leading-[1.4] text-black dark:text-white mb-2 hover:text-[#ef4444] cursor-pointer">
                                        ঘূর্ণিঝড় অর্ণবের আশঙ্কায় চার সমুদ্রবন্দরে সতর্ক সংকেত
                                    </h3>
                                    <div className="flex items-center gap-1.5 text-[11px] text-gray-500 dark:text-gray-400 mb-2">
                                        <CalendarIcon />
                                        <span>২৬ অক্টোবর, ২০২৬</span>
                                    </div>
                                    <p className="text-[13px] text-gray-600 dark:text-gray-300 line-clamp-2 leading-[1.5]">
                                        বঙ্গোপসাগরে অবস্থানরত গভীর নিম্নচাপটি আরও পশ্চিম দিকে অগ্রসর হয়ে ঘূর্ণিঝড়ে রূপ নিতে পারে। সম্ভাব্য ঘূর্ণিঝড়টির...
                                    </p>
                                </article>

                                {/* News Card 2 */}
                                <article className="flex flex-col">
                                    <img
                                        src="/images/weather-2.jpg"
                                        alt="Monsoon forecast"
                                        className="h-[150px] w-full object-cover mb-3 rounded"
                                    />
                                    <h3 className="line-clamp-2 text-[16px] font-bold leading-[1.4] text-black dark:text-white mb-2 hover:text-[#ef4444] cursor-pointer">
                                        মৌসুমি বায়ু বিদায় নিচ্ছে আরও দুই দিন বৃষ্টির পূর্বাভাস
                                    </h3>
                                    <div className="flex items-center gap-1.5 text-[11px] text-gray-500 dark:text-gray-400 mb-2">
                                        <CalendarIcon />
                                        <span>৯ অক্টোবর, ২০২৬</span>
                                    </div>
                                    <p className="text-[13px] text-gray-600 dark:text-gray-300 line-clamp-2 leading-[1.5]">
                                        মৌসুমি বায়ু বিদায় নিচ্ছে দেশের পশ্চিমাঞ্চল থেকে দক্ষিণ-পশ্চিম মৌসুমি বায়ু বিদায় নিয়েছে। আগামী ২৪ ঘণ্টার...
                                    </p>
                                </article>
                            </div>

                            {/* Realtime Weather Widget Card */}
                            <div className="overflow-hidden rounded-xl bg-[#ff4d4f] text-white shadow-md">
                                <div className="flex items-center justify-between px-6 pt-5 pb-4">
                                    <div className="flex items-center gap-1.5 text-[18px] font-bold">
                                        <LocationPinIcon />
                                        <span>Dhaka</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="text-[32px] font-extrabold">{currentTemp}°C</div>
                                        <div className="text-right text-[13px] font-medium opacity-9id0">
                                            <div>↑ {highTemp}°</div>
                                            <div>↓ {lowTemp}°</div>
                                        </div>
                                    </div>
                                </div>

                                {/* 7-Day Forecast Row */}
                                <div className="grid grid-cols-7 bg-[#ff3336] p-2 text-center text-xs">
                                    {forecast.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="flex flex-col items-center justify-center py-2 border-r border-red-400 last:border-r-0"
                                        >
                                            <span className="font-bold text-[13px] mb-1">{item.day}</span>
                                            <span className="my-1">☀️</span>
                                            <span className="font-semibold text-[12px]">{item.tempMax}</span>
                                            <span className="text-[11px] opacity-80">{item.tempMin}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}