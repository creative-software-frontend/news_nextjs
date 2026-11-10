import Link from "next/link";
import Image from "next/image";
// import korRangpurImage from "../assets/kor-rangpur.jpg";
// import korDhakaImage from "../assets/kor-dhaka.jpg";
// import kuetImage from "../assets/kuet.jpg";

/* ---------- data (replace with your API / CMS data) ---------- */
const JOBS = [
  {
    title: "কর অঞ্চল রংপুরে ৩৬ পদে নিয়োগ বিজ্ঞপ্তি প্রকাশ",
    href: "#",
    category: "সরকারি চাকরি",
    status: "মেয়াদ উত্তীর্ণ",
    org: "কর কমিশনারের কার্যালয়, কর অঞ্চল রংপুর",
    // image: korRangpurImage,
  },
  {
    title: "কর অঞ্চল-৪ ঢাকা নিয়োগ বিজ্ঞপ্তি ২০২৬",
    href: "#",
    category: "সরকারি চাকরি",
    status: "মেয়াদ উত্তীর্ণ",
    org: "কর কমিশনারের কার্যালয়, কর অঞ্চল ৪, ঢাকা",
    // image: korDhakaImage,
  },
  {
    title: "খুলনা প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয় KUET ১১ পদে নিয়োগ বিজ্ঞপ্তি ২০২৬",
    href: "#",
    category: "বিশ্ববিদ্যালয় চাকরি",
    status: "মেয়াদ উত্তীর্ণ",
    org: "খুলনা প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয়",
    // image: kuetImage,
  },
];

/* ---------- icons ---------- */
const Svg = ({ children, className = "h-6 w-6", ...p }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...p}>
    {children}
  </svg>
);
const BriefcaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-[#e8504f]">
    <path d="M9 3a2 2 0 0 0-2 2v1H4a2 2 0 0 0-2 2v3h20V8a2 2 0 0 0-2-2h-3V5a2 2 0 0 0-2-2H9Zm0 2h6v1H9V5Z" />
    <path d="M2 13v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5h-8v1.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V13H2Z" />
  </svg>
);
const GlobeIcon = ({ className = "h-5 w-5 text-[#e8504f]" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1 2.06V6a2 2 0 0 1-2 2H7.5l-.9 2H9a1 1 0 0 1 1 1v1.5a1 1 0 0 0 .6.9L12 14l1.4.4a1 1 0 0 1 .7.9V18l-1.1 1.9A8 8 0 0 1 11 4.06ZM16 5.7a8 8 0 0 1 3.5 5.1L17 10l-1-1.5V5.7Z" />
  </svg>
);
const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3">
    <path d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v3H3V6a2 2 0 0 1 2-2h1V3a1 1 0 0 1 1-1Z" />
    <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8Z" />
  </svg>
);
const BuildingIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5 shrink-0 text-[#e8504f]">
    <path d="M5 2a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h5v-4h4v4h5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H5Zm2.5 3h2v2h-2V5Zm4 0h2v2h-2V5Zm4 0h2v2h-2V5Zm-8 4h2v2h-2V9Zm4 0h2v2h-2V9Zm4 0h2v2h-2V9Z" />
  </svg>
);
const ChevronIcon = () => (
  <Svg className="h-4 w-4" strokeWidth="2.5"><path d="m9 6 6 6-6 6" /></Svg>
);
const ArrowIcon = ({ className = "h-4 w-4" }) => (
  <Svg className={className} strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></Svg>
);
const ArrowUpRightIcon = () => (
  <Svg className="h-4 w-4" strokeWidth="2.5"><path d="M7 17 17 7M8 7h9v9" /></Svg>
);

/* ---------- parts ---------- */
function SectionHeader({ icon, title, href, linkLabel }) {
  return (
    <div className="flex items-center justify-between border-b-2 border-gray-200 pb-2 dark:border-gray-800">
      <div className="flex items-center gap-2.5">
        <span className="h-8 w-[5px]  bg-[#e8504f]" />
        {icon}
        <h2 className="text-[22px] font-bold leading-tight text-gray-900 dark:text-white sm:text-[24px]">
          {title}
        </h2>
      </div>
      {href && (
        <Link
          href={href}
          className="flex items-center gap-1 text-[14px] text-gray-800 transition hover:text-red-600 dark:text-gray-200 dark:hover:text-red-500"
        >
          {linkLabel} <ChevronIcon />
        </Link>
      )}
    </div>
  );
}

function JobCard({ title, href, category, status, org, image }) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-4 rounded-md border border-gray-200 bg-gray-50 p-3.5 transition hover:border-red-200 hover:shadow-md dark:border-gray-800 dark:bg-[#0a0a0a] dark:hover:border-red-900 dark:hover:shadow-none sm:flex-row"
    >
      <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden rounded border border-gray-200 bg-gray-200 dark:border-gray-800 dark:bg-[#171717] sm:aspect-auto sm:h-[150px] sm:w-[274px]">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 640px) 274px, 100vw"
            className="object-cover transition duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-[linear-gradient(135deg,#d1d5db,#9ca3af)] dark:bg-[linear-gradient(135deg,#262626,#171717)]" />
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-center gap-2.5">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-[12px] font-medium text-blue-700 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-400">
            {category}
          </span>
          <span className="flex items-center gap-1.5 text-[12px] font-medium text-[#e8504f]">
            <CalendarIcon /> {status}
          </span>
        </div>

        <div className="flex items-center justify-between gap-3">
          <h3 className="line-clamp-2 text-[19px] font-bold leading-snug text-gray-900 group-hover:text-red-600 dark:text-gray-100 dark:group-hover:text-red-500 sm:text-[20px]">
            {title}
          </h3>
          <span className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e8504f] text-white opacity-0 transition group-hover:opacity-100 sm:flex">
            <ArrowUpRightIcon />
          </span>
        </div>

        <p className="flex items-center gap-1.5 text-[13px] font-medium text-gray-700 dark:text-gray-300">
          <BuildingIcon /> <span className="line-clamp-1">{org}</span>
        </p>
      </div>
    </Link>
  );
}

function JobFeature({ jobs, href }) {
  return (
    <div>
      <SectionHeader icon={<BriefcaseIcon />} title="জব ফিচার" href={href} linkLabel="সব জব" />
      <div className="mt-5 space-y-4">
        {jobs.map((j) => (
          <JobCard key={j.title} {...j} />
        ))}
      </div>
    </div>
  );
}

function PortalDirectory({ href }) {
  return (
    <div>
      <SectionHeader icon={<GlobeIcon />} title="নিউজ পোর্টাল ডিরেক্টরি" />
      <div className="mt-5 flex min-h-[420px] flex-col items-center justify-center rounded-[36px] border border-gray-200 bg-gradient-to-b from-[#eef1fb] to-[#f5f6fd] px-6 py-12 text-center dark:border-gray-800 dark:from-[#0f1220] dark:to-[#0a0a0a] lg:min-h-[560px]">
        <div className="flex h-[88px] w-[88px] items-center justify-center rounded-full bg-white shadow-lg dark:bg-[#171717] dark:shadow-none dark:ring-1 dark:ring-gray-800">
          <GlobeIcon className="h-10 w-10 text-[#e8504f]" />
        </div>

        <h3 className="mt-8 text-[24px] font-bold leading-snug text-gray-900 dark:text-white sm:text-[32px]">
          বাংলাদেশের সকল জনপ্রিয় ও আঞ্চলিক পোর্টাল
        </h3>
        <p className="mt-4 max-w-[460px] text-[15px] leading-relaxed text-gray-600 dark:text-gray-400 sm:text-[16px]">
          শীর্ষস্থানীয় বাংলা নিউজ পোর্টাল, জাতীয় ও স্থানীয় পত্রিকা, টিভি এবং রেডিও চ্যানেলগুলো দেখুন এক ঠিকানায়।
        </p>

        <Link
          href={href}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#ee6560] px-8 py-3.5 text-[16px] font-bold text-white shadow-lg shadow-red-300/50 transition hover:bg-[#e8504f] dark:shadow-none"
        >
          সব পোর্টাল দেখুন <ArrowIcon />
        </Link>
      </div>
    </div>
  );
}

/* ---------- main export ---------- */
export default function JobAndPortalSection({
  jobs = JOBS,
  jobsHref = "#",
  portalsHref = "#",
}) {
  return (
    <section className="w-full bg-white font-[family-name:var(--font-bn)] dark:bg-black">
      <div className="mx-auto max-w-[1400px] px-3 py-5 sm:px-5 sm:py-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-0">
          <div className="lg:border-r lg:border-gray-200 lg:pr-8 dark:lg:border-gray-800">
            <JobFeature jobs={jobs} href={jobsHref} />
          </div>
          <div className="lg:pl-8">
            <PortalDirectory href={portalsHref} />
          </div>
        </div>
      </div>
    </section>
  );
}