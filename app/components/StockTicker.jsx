import Link from "next/link";

/* ---------- data (replace with your API / CMS data) ---------- */
/* trend: "up" | "down" | "flat" */
const STOCKS = [
  { symbol: "AAMRANET", price: "১৬.২০", change: "+০.১০", percent: "+০.৬২%", trend: "up", href: "#" },
  { symbol: "AAMRATECH", price: "১২.৯০", change: "0.00", percent: "0.00%", trend: "flat", href: "#" },
  { symbol: "ABB1STMF", price: "৩.৪০", change: "0.00", percent: "0.00%", trend: "flat", href: "#" },
  { symbol: "ABBANK", price: "৫.৯০", change: "-০.১০", percent: "-১.৬৭%", trend: "down", href: "#" },
  { symbol: "ACI", price: "১৮৪.৫০", change: "+২.৩০", percent: "+১.২৬%", trend: "up", href: "#" },
  { symbol: "ACMELAB", price: "৯২.১০", change: "-১.২০", percent: "-১.২৯%", trend: "down", href: "#" },
  { symbol: "BATBC", price: "৩২৫.৮০", change: "0.00", percent: "0.00%", trend: "flat", href: "#" },
  { symbol: "BRACBANK", price: "৪৩.২০", change: "+০.৬০", percent: "+১.৪১%", trend: "up", href: "#" },
];

/* seconds for one full loop — higher = slower */
const DURATION = 40;

/* colours per trend (text + icon box) */
const TREND = {
  up: {
    text: "text-[#3f8f5a] dark:text-green-400",
    box: "border-[#3f8f5a] text-[#3f8f5a] dark:border-green-400 dark:text-green-400",
  },
  flat: {
    text: "text-[#3b6fe0] dark:text-blue-400",
    box: "border-[#3b6fe0] text-[#3b6fe0] dark:border-blue-400 dark:text-blue-400",
  },
  down: {
    text: "text-[#d63f3e] dark:text-red-400",
    box: "border-[#d63f3e] text-[#d63f3e] dark:border-red-400 dark:text-red-400",
  },
};

/* ---------- icons ---------- */
const Svg = ({ children, className = "h-4 w-4", ...p }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className={className} {...p}>
    {children}
  </svg>
);
const TrendIcon = ({ trend }) => {
  if (trend === "up") return <Svg><path d="M12 19V5M5 12l7-7 7 7" /></Svg>;
  if (trend === "down") return <Svg><path d="M12 5v14M19 12l-7 7-7-7" /></Svg>;
  return <Svg><path d="M12 4v16M8 8l4-4 4 4M8 16l4 4 4-4" /></Svg>;
};

/* ---------- parts ---------- */
function StockItem({ symbol, price, change, percent, trend, href }) {
  const c = TREND[trend] || TREND.flat;
  return (
    <Link
      href={href}
      className="block w-[200px] shrink-0 border-r border-gray-200 px-4 py-2 transition hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-[#0a0a0a] sm:w-[240px] sm:px-6"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-[20px] font-medium tracking-tight text-gray-900 dark:text-gray-100 sm:text-[22px]">
          {symbol}
        </span>
        <span className={`text-[17px] sm:text-[18px] ${c.text}`}>{price}</span>
      </div>

      <div className="mt-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className={`flex h-[26px] w-[26px] items-center justify-center rounded-[4px] border ${c.box}`}>
            <TrendIcon trend={trend} />
          </span>
          <span className={`text-[19px] font-bold sm:text-[20px] ${c.text}`}>{change}</span>
        </div>
        <span className={`text-[15px] sm:text-[16px] ${c.text}`}>{percent}</span>
      </div>
    </Link>
  );
}

/* ---------- main export ---------- */
export default function StockTicker({ stocks = STOCKS, duration = DURATION }) {
  // list is rendered twice so the loop is seamless (-50% = one full copy)
  const loop = [...stocks, ...stocks];

  return (
    <section className="w-full bg-gray-50 font-[family-name:var(--font-bn)] dark:bg-black">
      <style>{`
        @keyframes stock-ticker-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .stock-ticker-track {
          animation: stock-ticker-scroll var(--ticker-duration, 40s) linear infinite;
        }
        .stock-ticker:hover .stock-ticker-track {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mx-auto max-w-[1400px] px-3 py-5 sm:px-5 sm:py-6">
        <div className="stock-ticker overflow-hidden border border-gray-200 bg-white dark:border-gray-800 dark:bg-black">
          <div
            className="stock-ticker-track flex w-max"
            style={{ "--ticker-duration": `${duration}s` }}
          >
            {loop.map((s, i) => (
              <StockItem key={`${s.symbol}-${i}`} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}