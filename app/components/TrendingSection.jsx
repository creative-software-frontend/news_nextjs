import Link from "next/link";

/* ---------- data (replace with your API / CMS data) ---------- */
const TRENDING_TAGS = [
  { label: "তারেক রহমান", href: "#", active: true },
  { label: "সানায়ে তাকাইচি", href: "#" },
  { label: "শাহজালাল বিমানবন্দর", href: "#" },
  { label: "২০২৬ ফিফা বিশ্বকাপ", href: "#" },
  { label: "টেকসই পর্যটন", href: "#" },
  { label: "টোয়াব", href: "#" },
  { label: "পর্যটন মেলা ২০২৬", href: "#" },
  { label: "বাংলাদেশ পর্যটন", href: "#" },
  { label: "বিটিটিএফ ২০২৬", href: "#" },
  { label: "এইচএসসি পরীক্ষার রেজাল্ট", href: "#" },
];

const TOP_STORIES = [
  {
    title: "ঘূর্ণিঝড় অর্ণবের আশঙ্কায় চার সমুদ্রবন্দরে সতর্ক সংকেত",
    href: "#",
    image: "", // e.g. "/images/cyclone.jpg"
  },
  {
    title: "৩১ অক্টোবর প্রকাশ এইচএসসি ফলাফল জানবেন যেভাবে",
    href: "#",
    image: "",
  },
  {
    title: "পর্যটন মেলা ২০২৬ শুরু বৃহস্পতিবার ঢাকায় অংশ নেবে ২০টির বেশি দেশ",
    href: "#",
    image: "",
  },
  {
    title: "ঢাকাই মসলিনের বিশ্ববাজারে প্রবেশ নতুন সম্ভাবনা",
    href: "#",
    image: "",
  },
];

/* ---------- icons ---------- */
const Svg = ({ children, className = "h-6 w-6", ...p }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...p}>
    {children}
  </svg>
);
const MicIcon = () => (
  <Svg className="h-9 w-9 text-[#e8504f]" strokeWidth="2.2">
    <rect x="9" y="2" width="6" height="12" rx="3" />
    <path d="M5 11a7 7 0 0 0 14 0M12 18v4M8 22h8" />
  </Svg>
);
const PenIcon = () => (
  <Svg className="h-6 w-6"><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5Z" /></Svg>
);
const VideoIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7"><path d="M3 7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2.6l4.5-2.7a.8.8 0 0 1 1.2.7v9.8a.8.8 0 0 1-1.2.7L15 14.4V17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" /></svg>
);
const CameraIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path d="M9 3 7.5 5H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2.5L15 3H9Zm3 5.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" /></svg>
);
const ArrowIcon = () => (
  <Svg className="h-4 w-4" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></Svg>
);

/* ---------- parts ---------- */
function TrendingTags({ tags }) {
  return (
    <div className="flex items-center gap-3">
      <span className="shrink-0 text-[18px] font-bold text-gray-900 sm:text-[20px]">আলোচিত:</span>
      <ul className="flex flex-1 items-center gap-3 overflow-x-auto py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {tags.map((t) => (
          <li key={t.label} className="shrink-0">
            <Link
              href={t.href}
              className={`block whitespace-nowrap rounded-md border px-4 py-2 text-[15px] transition sm:text-[16px] ${
                t.active
                  ? "border-red-200 bg-red-100 text-red-700 hover:bg-red-200"
                  : "border-gray-200 bg-gray-50 text-gray-800 hover:border-red-200 hover:bg-red-50 hover:text-red-700"
              }`}
            >
              {t.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StoryCard({ title, href, image }) {
  return (
    <Link
      href={href}
      className="group flex h-[110px] overflow-hidden border border-gray-200 bg-white transition hover:shadow-md sm:h-[122px]"
    >
      <div className="h-full w-[120px] shrink-0 overflow-hidden bg-gray-200 sm:w-[148px]">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt={title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
        ) : (
          <div className="h-full w-full bg-[linear-gradient(135deg,#d1d5db,#9ca3af)]" />
        )}
      </div>
      <h3 className="line-clamp-3 flex-1 self-center px-4 text-[17px] font-medium leading-snug text-gray-900 group-hover:text-red-600 sm:text-[18px]">
        {title}
      </h3>
    </Link>
  );
}

function ReporterCta({ href = "#" }) {
  return (
    <div className="flex flex-col gap-4 border border-gray-200 bg-white px-5 py-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:px-10">
      <div className="flex items-center gap-4">
        <MicIcon />
        <div>
          <h2 className="text-[22px] font-bold leading-tight text-gray-900 sm:text-[24px]">
            প্রথম সংবাদে <span className="text-[#e8504f]">সংবাদকর্মী</span> হোন
          </h2>
          <p className="mt-1 text-[14px] text-gray-500 sm:text-[16px]">
            সর্বশেষ আপডেট তুলে ধরতে পরিবারের অংশ হোন।
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-6 sm:justify-end sm:gap-8">
        <div className="flex items-center gap-4 text-gray-400">
          <PenIcon />
          <VideoIcon />
          <CameraIcon />
        </div>
        <Link
          href={href}
          className="flex items-center gap-2 rounded-md bg-[#e8504f] px-6 py-3 text-[17px] font-bold text-white transition hover:bg-[#d63f3e] sm:px-7"
        >
          আবেদন করুন <ArrowIcon />
        </Link>
      </div>
    </div>
  );
}

/* ---------- main export ---------- */
export default function TrendingSection({
  tags = TRENDING_TAGS,
  stories = TOP_STORIES,
  ctaHref = "#",
}) {
  return (
    <section className="w-full bg-white font-[family-name:var(--font-bn)]">
      <div className="mx-auto max-w-[1400px] space-y-6 px-3 py-5 sm:px-5 sm:py-6 lg:space-y-10">
        <TrendingTags tags={tags} />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">
          {stories.map((s) => (
            <StoryCard key={s.title} {...s} />
          ))}
        </div>

        <ReporterCta href={ctaHref} />
      </div>
    </section>
  );
}