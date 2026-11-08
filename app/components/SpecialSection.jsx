'use client';

import React, { useState } from "react";

// আইকন কম্পোনেন্টস
const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-white">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const bengaliMonths = [
  "জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন", 
  "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"
];

export default function SpecialAndJatiyoLayout() {
  // রিয়েলটাইম ডেট ম্যানেজমেন্টের জন্য স্টেট (ডিফল্ট বর্তমান তারিখ বা নভেম্বর ২০২৬)
  const [currentDate, setCurrentDate] = useState(new Date(2026, 10, 8)); // সিস্টেমের বর্তমান সময় অনুযায়ী

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); // 0-11

  // বর্তমান মাসের মোট দিন বের করার লজিক
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  // মাসের প্রথম দিন সপ্তাহের কোন বার থেকে শুরু (0 = রবিবার, 1 = সোমবার...)
  const firstDayIndex = new Date(year, month, 1).getDay();

  // আগের ও পরের মাসে যাওয়ার ফাংশন
  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  // ড্রপডাউন থেকে মাস পরিবর্তনের হ্যান্ডলার
  const handleMonthSelect = (e) => {
    const selectedIndex = bengaliMonths.indexOf(e.target.value);
    if (selectedIndex !== -1) {
      setCurrentDate(new Date(year, selectedIndex, 1));
    }
  };

  // ড্রপডাউন থেকে বছর পরিবর্তনের হ্যান্ডলার
  const handleYearSelect = (e) => {
    setCurrentDate(new Date(parseInt(e.target.value), month, 1));
  };

  // ক্যালেন্ডারের ঘর তৈরির জন্য অ্যারে (প্যাডিং সহ)
  const calendarCells = [];
  for (let i = 0; i < firstDayIndex; i++) {
    calendarCells.push(null); // ফাঁকা ঘর
  }
  for (let d = 1; d <= daysInMonth; d++) {
    calendarCells.push(d);
  }

  // আজকের তারিখ কিনা চেক করার জন্য
  const today = new Date();
  const isCurrentMonthYear = today.getFullYear() === year && today.getMonth() === month;
  const todayDate = today.getDate();

  return (
    <section className="py-6 bg-[#f0f2f5] font-sans">
      <div className="max-w-[1280px] mx-auto px-4 flex flex-col gap-6">
        
        {/* ==================== ১. স্পেশাল সেকশন (সবার উপরে) ==================== */}
        <div className="bg-white p-4 rounded-sm shadow-sm border border-[#e5e7eb]">
          <div className="flex items-center justify-between pb-3 border-b-2 border-black">
            
            <div className="flex items-center gap-2.5">
              <div className="flex h-[30px] w-[30px] items-center justify-center rounded bg-[#e8504f] shadow-sm">
                <StarIcon />
              </div>
              <h2 className="text-[20px] font-extrabold tracking-wide text-gray-900">
                স্পেশাল
              </h2>
            </div>

            <a
              href="#special"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-800 transition-all duration-200 hover:border-[#e8504f] hover:bg-[#e8504f] hover:text-white"
              aria-label="সব দেখুন"
            >
              <ArrowRightIcon />
            </a>

          </div>

          <div className="mt-4 min-h-[120px] flex items-center justify-center text-gray-400 border border-dashed border-gray-200 rounded">
            <p className="text-sm">স্পেশাল নিউজের কনটেন্ট এখানে প্রদর্শিত হবে</p>
          </div>
        </div>


        {/* ==================== ২. মূল গ্রিড: বামে জাতীয়, ডানে পুরাতন সংবাদ (রিয়েলটাইম ক্যালেন্ডার) ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 items-start">
          
          {/* বাম দিক: জাতীয় নিউজ সেকশন */}
          <div className="flex flex-col bg-white p-5 rounded-sm shadow-sm border border-[#e5e7eb]">
            <div className="flex items-center justify-between pb-3 mb-5 border-b-2 border-[#e5e7eb]">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-6 bg-[#dc2626] inline-block"></span>
                <h3 className="font-extrabold text-[#111827] text-[20px]">জাতীয়</h3>
              </div>
              <a href="#more-jatiyo" className="text-[14px] font-semibold text-[#dc2626] hover:underline flex items-center gap-1">
                আরো নিউজ &gt;
              </a>
            </div>

            <div className="min-h-[350px] flex items-center justify-center text-gray-400 border border-dashed border-gray-200 rounded">
              <p className="text-sm">জাতীয় নিউজের কনটেন্ট এখানে প্রদর্শিত হবে</p>
            </div>
          </div>


          {/* ডান দিক: পুরাতন সংবাদ ও রিয়েলটাইম ক্যালেন্ডার উইজেট */}
          <div className="flex flex-col bg-white rounded-sm shadow-sm border border-[#e5e7eb] overflow-hidden">
            
            <div className="bg-[#ff3b3b] text-white py-3 px-4 text-center font-bold text-[16px] tracking-wide">
              পুরাতন সংবাদ
            </div>

            {/* ড্রপডাউন ফিল্টার (মাস ও বছর নির্বাচন) */}
            <div className="p-3 bg-white border-b border-[#e5e7eb] grid grid-cols-2 gap-2">
              <select 
                value={bengaliMonths[month]} 
                onChange={handleMonthSelect}
                className="bg-white border border-[#d1d5db] text-[#1f2937] text-[13px] rounded px-2.5 py-1.5 outline-none font-medium cursor-pointer"
              >
                {bengaliMonths.map((m, idx) => (
                  <option key={idx} value={m}>{m}</option>
                ))}
              </select>

              <select 
                value={year} 
                onChange={handleYearSelect}
                className="bg-white border border-[#d1d5db] text-[#1f2937] text-[13px] rounded px-2.5 py-1.5 outline-none font-medium cursor-pointer"
              >
                <option value={2026}>২০২৬</option>
                <option value={2025}>২০২৫</option>
                <option value={2024}>২০২৪</option>
                <option value={2023}>২০২৩</option>
              </select>
            </div>

            {/* ডায়নামিক ক্যালেন্ডার বক্স */}
            <div className="p-3 bg-white">
              
              {/* মাস পরিবর্তন নেভিগেশন হেডার */}
              <div className="bg-[#ff3b3b] text-white py-2 px-3 flex items-center justify-between text-[14px] font-bold rounded-t">
                <button onClick={handlePrevMonth} className="hover:bg-black/10 px-2 py-0.5 rounded cursor-pointer">&laquo;</button>
                <span>{bengaliMonths[month]} {year}</span>
                <button onClick={handleNextMonth} className="hover:bg-black/10 px-2 py-0.5 rounded cursor-pointer">&raquo;</button>
              </div>

              {/* সপ্তাহের দিনসমূহ */}
              <div className="grid grid-cols-7 text-center bg-[#fef2f2] text-[#dc2626] font-bold text-[12px] py-2 border-x border-[#fecaca]">
                <span>রবি</span>
                <span>সোম</span>
                <span>মঙ্গল</span>
                <span>বুধ</span>
                <span>বৃহ</span>
                <span>শুক্র</span>
                <span>শনি</span>
              </div>

              {/* তারিখের গ্রিড (রিয়েলটাইম ক্যালেন্ডার রেন্ডারিং) */}
              <div className="grid grid-cols-7 text-center border-b border-x border-[#e5e7eb] text-[13px]">
                {calendarCells.map((day, index) => {
                  const isToday = isCurrentMonthYear && day === todayDate;
                  
                  return (
                    <div 
                      key={index} 
                      className={`py-2.5 border-t border-r last:border-r-0 border-[#f3f4f6] transition font-medium ${
                        day === null 
                          ? "bg-transparent cursor-default" 
                          : isToday
                            ? "bg-[#ff3b3b] text-white font-bold rounded-sm shadow-inner" 
                            : "text-[#374151] hover:bg-gray-100 cursor-pointer"
                      }`}
                    >
                      {day !== null ? day : ""}
                    </div>
                  );
                })}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}