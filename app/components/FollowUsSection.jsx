import Link from "next/link";

/* ---------- data (replace with your real links / counts) ---------- */
const SOCIALS = [
  {
    key: "facebook",
    title: "ফেসবুক পেজ",
    desc: "আমাদের অফিসিয়াল ফেসবুক পেজে লাইক দিন",
    cta: "যুক্ত হোন",
    stat: "৫.২ লক্ষ+ ফলোয়ার",
    href: "#",
    gradient: "bg-gradient-to-br from-[#3470e4] to-[#2a58c4]",
    hoverShadow: "hover:shadow-[0_24px_48px_-12px_rgba(42,88,196,0.55)]",
    accent: "text-[#1877f2]",
  },
  {
    key: "youtube",
    title: "ইউটিউব চ্যানেল",
    desc: "সংবাদের ভিডিও দেখতে সাবস্ক্রাইব করুন",
    cta: "সাবস্ক্রাইব",
    stat: "২.১ লক্ষ+ সাবস্ক্রাইবার",
    href: "#",
    gradient: "bg-gradient-to-br from-[#e8321f] to-[#b92a1e]",
    hoverShadow: "hover:shadow-[0_24px_48px_-12px_rgba(200,40,30,0.55)]",
    accent: "text-[#e8321f]",
  },
];

/* ---------- icons ---------- */
const FacebookIcon = ({ className = "h-12 w-12" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M13.6 22v-8.2h2.8l.5-3.3h-3.3V8.4c0-.9.4-1.7 1.8-1.7h1.6V3.9c-.3 0-1.3-.2-2.4-.2-2.5 0-4.1 1.5-4.1 4.2v2.6H7.7v3.3h2.8V22h3.1Z" />
  </svg>
);
const FacebookCircleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.4l-.5 3.5h-2.9v8.4A12 12 0 0 0 24 12Z" />
  </svg>
);
const YoutubeIcon = ({ className = "h-12 w-12" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2C.5 9 .5 12 .5 12s0 3 .5 4.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1c.5-1.8.5-4.8.5-4.8s0-3-.5-4.8ZM9.8 15.2V8.8l5.8 3.2-5.8 3.2Z" />
  </svg>
);
const YoutubeSmallIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2C.5 9 .5 12 .5 12s0 3 .5 4.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1c.5-1.8.5-4.8.5-4.8s0-3-.5-4.8ZM9.8 15.2V8.8l5.8 3.2-5.8 3.2Z" />
  </svg>
);
const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm7 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM9 13c-3 0-6 1.5-6 4v2h12v-2c0-2.5-3-4-6-4Zm7.5.2c2.9.2 5.5 1.6 5.5 3.8v2h-5v-2c0-1.4-.2-2.7-.5-3.8Z" />
  </svg>
);
const BellIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M12 22a2.5 2.5 0 0 0 2.5-2.5h-5A2.5 2.5 0 0 0 12 22Zm7-6V11a7 7 0 0 0-5.5-6.8V3.5a1.5 1.5 0 0 0-3 0v.7A7 7 0 0 0 5 11v5l-2 2v1h18v-1l-2-2Z" />
  </svg>
);

const BRAND_ICON = {
  facebook: { big: FacebookIcon, small: FacebookCircleIcon, stat: UsersIcon },
  youtube: { big: YoutubeIcon, small: YoutubeSmallIcon, stat: BellIcon },
};

/* ---------- parts ---------- */
function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center">
      <h2 className="text-[30px] font-bold leading-tight text-gray-900 dark:text-white sm:text-[36px]">
        {title}
      </h2>
      <div className="mx-auto mt-3 h-[5px] w-[110px] rounded-full bg-gradient-to-r from-[#d63f3e] to-[#ee6560]" />
      <p className="mx-auto mt-5 max-w-[800px] text-[15px] text-gray-600 dark:text-gray-400 sm:text-[17px]">
        {subtitle}
      </p>
    </div>
  );
}

function SocialCard({ item }) {
  const Icon = BRAND_ICON[item.key];
  const Big = Icon.big;
  const Small = Icon.small;
  const Stat = Icon.stat;

  return (
    <div
      className={`group relative overflow-hidden rounded-[22px] p-6 text-white shadow-md transition duration-300 ease-out hover:-translate-y-2 sm:p-9 ${item.gradient} ${item.hoverShadow}`}
    >
      {/* faded watermark */}
      <div className="pointer-events-none absolute -bottom-10 -right-10 flex h-[170px] w-[170px] items-center justify-center rounded-full bg-white/10">
        <Big className="h-24 w-24 text-white/10" />
      </div>

      <div className="relative flex items-center gap-5 sm:gap-7">
        {/* white square — tilts on hover */}
        <div className="flex h-[88px] w-[88px] shrink-0 items-center justify-center rounded-[22px] bg-white shadow-lg transition duration-300 ease-out group-hover:-rotate-[10deg] group-hover:scale-105 sm:h-[104px] sm:w-[104px]">
          <Big className={`h-14 w-14 sm:h-16 sm:w-16 ${item.accent}`} />
        </div>

        <div className="min-w-0">
          <h3 className="text-[26px] font-bold leading-tight sm:text-[30px]">{item.title}</h3>
          <p className="mt-1 text-[14px] text-white/90 sm:text-[16px]">{item.desc}</p>

          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3">
            <Link
              href={item.href}
              className={`inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[16px] font-bold shadow-md transition hover:bg-gray-100 ${item.accent}`}
            >
              <Small /> {item.cta}
            </Link>
            <span className="flex items-center gap-2 text-[14px] font-medium text-white/95 sm:text-[15px]">
              <Stat /> {item.stat}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- main export ---------- */
export default function FollowUsSection({
  title = "যুক্ত থাকুন",
  subtitle = "সত্য ও নিরপেক্ষ সংবাদ পেতে আমাদের সোশ্যাল মিডিয়া প্ল্যাটফর্মগুলোতে যুক্ত থাকুন এবং নিয়মিত আপডেট পান।",
  socials = SOCIALS,
}) {
  return (
    <section className="w-full bg-white font-[family-name:var(--font-bn)] dark:bg-black">
        <div className=" border-t border-dashed border-gray-300 p-4 dark:border-gray-700">
  {/* your content */}
      <div className="mx-auto max-w-[1400px] px-3 py-10 sm:px-5 sm:py-14">
        <SectionHeading title={title} subtitle={subtitle} />

        <div className="mx-auto mt-12 grid max-w-[1100px] grid-cols-1 gap-6 pb-6 sm:gap-9 lg:grid-cols-2">
          {socials.map((s) => (
            <SocialCard key={s.key} item={s} />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}