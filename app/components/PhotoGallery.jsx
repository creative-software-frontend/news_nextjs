import Link from "next/link";
import Image from "next/image";

/* ---------- data (replace with your API / CMS data) ---------- */
const PHOTOS = [
  { id: 1, title: "আপসহীন নেত্রী বেগম খালেদা জিয়া", date: "১২ সেপ্টেম্বর, ২০২৬", href: "#", image: "" },
  { id: 2, title: "পাহাড়িয়া পাড়ায় আগামীর মাটির স্কুল", date: "১০ আগস্ট, ২০২৬", href: "#", image: "" },
  { id: 3, title: "Bangladesh Political Party Logo", date: "২১ জুলাই, ২০২৬", href: "#", image: "" },
  { id: 4, title: "চিত্র নায়িকা পরী মনি", date: "২ জুন, ২০২৬", href: "#", image: "" },
];

const ALL_PHOTOS_HREF = "#";

/* ---------- icons ---------- */
const CameraIcon = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M9 3 7.5 5H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2.5L15 3H9Zm3 5.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" />
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

/* ---------- card ---------- */
function PhotoCard({ title, date, href, image }) {
  return (
    <Link
      href={href}
      className="group relative flex h-[211px] flex-col justify-between overflow-hidden rounded-2xl border border-[#1f2733] bg-[#0d121c] p-7 transition-colors duration-200 hover:border-[#e8504f]"
    >
      {image ? (
        <>
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />
        </>
      ) : (
        <CameraIcon className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-[10%] text-[#1a212d]" />
      )}

      {/* title */}
      <h3 className="relative z-10 line-clamp-2 pt-4 text-[20px] font-bold leading-[1.45] text-white transition-colors duration-200 group-hover:text-[#ef4444]">
        {title}
      </h3>

      {/* date + camera button */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="flex items-center gap-2 text-[14px] font-medium text-gray-200 transition-colors duration-200 group-hover:text-[#ef4444]">
          <CalendarIcon />
          {date}
        </span>

        <span className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#06080d] text-white ring-1 ring-white/10 transition-colors duration-200 group-hover:bg-[#e8504f] group-hover:ring-0">
          <CameraIcon className="h-6 w-6" />
        </span>
      </div>
    </Link>
  );
}

/* ---------- main ---------- */
export default function PhotoGallery({ photos = PHOTOS, allHref = ALL_PHOTOS_HREF }) {
  return (
    <section className="w-full bg-[#0b0f19] font-[family-name:var(--font-bn)]">
      <div className="mx-auto max-w-[1300px] px-3 py-10 sm:px-5 sm:py-14">
        {/* header */}
        <div className="flex items-center justify-between gap-3 border-b border-[#1f2733] pb-8">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#e8504f] text-[#0b0f19] sm:h-[52px] sm:w-[52px]">
              <CameraIcon className="h-8 w-8" />
            </span>
            <h2 className="text-[28px] font-extrabold leading-tight text-white sm:text-[42px]">
              ফটো গ্যালারি
            </h2>
          </div>

          <Link
            href={allHref}
            className="flex items-center gap-2 rounded-md bg-[#e8504f] px-5 py-3 text-[14px] font-bold text-white transition hover:bg-[#d63f3e] sm:px-6 sm:text-[16px]"
          >
            সব দেখুন <ArrowIcon />
          </Link>
        </div>

        {/* cards */}
        <div className="mt-9 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {photos.map((p) => (
            <PhotoCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}