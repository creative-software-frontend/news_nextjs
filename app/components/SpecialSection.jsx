"use client";

import React, { useState } from "react";

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
  "জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল",
  "মে", "জুন", "জুলাই", "আগস্ট",
  "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর",
];

const weekdays = ["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহ", "শুক্র", "শনি"];

export default function SpecialSection() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 10, 8));

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleMonthSelect = (e) => {
    const selectedIndex = bengaliMonths.indexOf(e.target.value);
    if (selectedIndex !== -1) {
      setCurrentDate(new Date(year, selectedIndex, 1));
    }
  };

  const handleYearSelect = (e) => {
    setCurrentDate(new Date(parseInt(e.target.value), month, 1));
  };

  const calendarCells = [];

  for (let i = 0; i < firstDayIndex; i++) {
    calendarCells.push(null);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    calendarCells.push(d);
  }

  const today = new Date();

  const isCurrentMonthYear =
    today.getFullYear() === year && today.getMonth() === month;

  const todayDate = today.getDate();

  return (
    <section className="w-full bg-white py-7 text-gray-900 dark:bg-black dark:text-white">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-4 sm:px-6 lg:px-8">

        {/* Special Section */}
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-[#262626] dark:bg-black">

          <div className="flex items-center justify-between border-b border-gray-200 pb-3 dark:border-[#262626]">
            <div className="flex items-center gap-2.5">
              <div className="flex h-[30px] w-[30px] items-center justify-center rounded bg-[#e8504f] shadow-sm">
                <StarIcon />
              </div>

              <h2 className="text-[20px] font-extrabold tracking-wide">
                স্পেশাল
              </h2>
            </div>

            <a
              href="#special"
              aria-label="সব দেখুন"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-800 transition-all duration-200 hover:border-[#e8504f] hover:bg-[#e8504f] hover:text-white dark:border-[#262626] dark:text-white"
            >
              <ArrowRightIcon />
            </a>
          </div>

          <div className="mt-4 flex min-h-[120px] items-center justify-center rounded border border-dashed border-gray-300 bg-gray-50 text-gray-500 dark:border-[#262626] dark:bg-black dark:text-gray-500">
            <p className="text-sm">
              স্পেশাল নিউজের কনটেন্ট এখানে প্রদর্শিত হবে
            </p>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[1fr_320px]">

          {/* National News */}
          <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-[#262626] dark:bg-black">

            <div className="mb-5 flex items-center justify-between border-b border-gray-200 pb-3 dark:border-[#262626]">
              <div className="flex items-center gap-2.5">
                <span className="inline-block h-6 w-1.5 bg-[#e8504f]" />

                <h3 className="text-[20px] font-extrabold">
                  জাতীয়
                </h3>
              </div>

              <a
                href="#more-jatiyo"
                className="text-[14px] font-semibold text-[#ef6665] transition hover:underline"
              >
                আরো নিউজ &gt;
              </a>
            </div>

            <div className="flex min-h-[350px] items-center justify-center rounded border border-dashed border-gray-300 bg-gray-50 text-gray-500 dark:border-[#262626] dark:bg-black dark:text-gray-500">
              <p className="text-sm">
                জাতীয় নিউজের কনটেন্ট এখানে প্রদর্শিত হবে
              </p>
            </div>
          </div>

          {/* Archive Calendar */}
          <div className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-[#262626] dark:bg-black">

            {/* Calendar Header */}
            <div className="bg-[#e8504f] px-4 py-3 text-center text-[16px] font-bold tracking-wide text-white">
              পুরাতন সংবাদ
            </div>

            {/* Month and Year Filters */}
            <div className="grid grid-cols-2 gap-2 border-b border-gray-200 bg-white p-3 dark:border-[#262626] dark:bg-black">

              <select
                value={bengaliMonths[month]}
                onChange={handleMonthSelect}
                className="w-full cursor-pointer rounded border border-gray-300 bg-gray-50 px-2.5 py-1.5 text-[13px] font-medium text-gray-900 outline-none focus:border-[#e8504f] dark:border-[#262626] dark:bg-black dark:text-white"
              >
                {bengaliMonths.map((m, idx) => (
                  <option key={idx} value={m}>
                    {m}
                  </option>
                ))}
              </select>

              <select
                value={year}
                onChange={handleYearSelect}
                className="w-full cursor-pointer rounded border border-gray-300 bg-gray-50 px-2.5 py-1.5 text-[13px] font-medium text-gray-900 outline-none focus:border-[#e8504f] dark:border-[#262626] dark:bg-black dark:text-white"
              >
                <option value={2026}>২০২৬</option>
                <option value={2025}>২০২৫</option>
                <option value={2024}>২০২৪</option>
                <option value={2023}>২০২৩</option>
              </select>
            </div>

            {/* Calendar */}
            <div className="bg-white p-3 dark:bg-black">

              {/* Month Navigation */}
              <div className="flex items-center justify-between rounded-t bg-[#e8504f] px-3 py-2 text-[14px] font-bold text-white">

                <button
                  onClick={handlePrevMonth}
                  aria-label="Previous month"
                  className="cursor-pointer rounded px-2 py-0.5 transition hover:bg-black/10"
                >
                  &laquo;
                </button>

                <span>
                  {bengaliMonths[month]} {year}
                </span>

                <button
                  onClick={handleNextMonth}
                  aria-label="Next month"
                  className="cursor-pointer rounded px-2 py-0.5 transition hover:bg-black/10"
                >
                  &raquo;
                </button>
              </div>

              {/* Weekdays */}
              <div className="grid grid-cols-7 border-x border-gray-200 bg-gray-100 py-2 text-center text-[12px] font-bold text-[#ef6665] dark:border-[#262626] dark:bg-black">
                {weekdays.map((day) => (
                  <span key={day}>
                    {day}
                  </span>
                ))}
              </div>

              {/* Calendar Dates */}
              <div className="grid grid-cols-7 border-x border-b border-gray-200 bg-white text-center text-[13px] dark:border-[#262626] dark:bg-black">

                {calendarCells.map((day, index) => {
                  const isToday =
                    isCurrentMonthYear && day === todayDate;

                  return (
                    <div
                      key={index}
                      className={`border-t border-r border-gray-200 py-2.5 font-medium transition dark:border-[#262626] ${
                        day === null
                          ? "bg-transparent"
                          : isToday
                            ? "rounded-sm bg-[#e8504f] font-bold text-white shadow-inner"
                            : "cursor-pointer bg-white text-gray-700 hover:bg-gray-100 dark:bg-black dark:text-gray-300 dark:hover:bg-[#1a1a1a] dark:hover:text-white"
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