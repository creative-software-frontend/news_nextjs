
import Link from "next/link";

const BREAKING = [
  "পর্যটন মেলা ২০২৬ শুরু বৃহস্পতিবার ঢাকায় অংশ নেবে ২০টির বেশি দেশ",
  "৩১ অক্টোবর প্রকাশ এইচএসসি ফলাফল জানবেন যেভাবে",
  "কর্মী নিয়োগ শুরু ১ এপ্রিল",
  "স্বৈরাচারের ফেরার পথ খুললে শহীদদের সঙ্গে গাদ্দারি হবে প্রধানমন্ত্রী",
];

const GlobeIcon = () => (
  <span className="relative inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ef4444,#991b1b)] ring-2 ring-gray-200 dark:ring-gray-700">
    <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
  </span>
);

export default function BreakingNews() {
  return (
    <section className="ps-ticker relative flex h-11 w-full items-stretch overflow-hidden bg-white font-[family-name:var(--font-bn)] dark:bg-black">
      <style>{`
        @keyframes ps-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .ps-marquee-track {
          animation: ps-marquee 20s linear infinite;
        }
        .ps-ticker:hover .ps-marquee-track {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative z-10 flex shrink-0 items-center bg-[#e8504f] px-4 text-[17px] font-bold text-white sm:px-6 lg:ml-[min(4vw,52px)] lg:px-7">
        সর্বশেষঃ
      </div>

      <div className="relative flex-1 overflow-hidden">
        <div className="ps-marquee-track flex h-full w-max items-center gap-16 whitespace-nowrap pl-6">
          {[...BREAKING, ...BREAKING].map((t, i) => (
            <Link key={i} href="#" className="flex items-center gap-2 text-[17px] font-semibold text-gray-900 hover:text-red-600 dark:text-gray-100 dark:hover:text-red-500 sm:text-[18px]">
              <GlobeIcon />
              {t}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}