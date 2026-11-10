import Link from "next/link";

/* ---------- data (replace with your API / CMS data) ---------- */
const ABOUT = {
  title: "দৈনিক প্রথম সংবাদ",
  text: "নতুন প্রজন্মের ডিজিটাল মিডিয়া, দৈনিক প্রথম সংবাদ। সত্য ও ন্যায়ের প্রতিছবি, ন্যায়ের পক্ষে, অন্যায়ের বিরুদ্ধে বলিষ্ঠ কণ্ঠস্বর। জাতীয়, রাজনীতি, শিল্প বাণিজ্য, বিনোদন, টেক ওয়ার্ল্ড, খেলাধুলা, বিশ্লেষণমূলক সংবাদসহ যাবতীয় খবর পেতে চোখ রাখুন প্রথম সংবাদ অনলাইন পোর্টালে।",
  owner: "নাঈম মাহমুদ",
  address: "26 A/B, 2nd Colony, Mazar Road, Mirpur-1, Dhaka-1216",
  phone: "+880 18111-44202",
  email: "info@prothomsangbad.com",
};

const IMPORTANT_LINKS = [
  { label: "আমাদের সম্পর্কে", href: "#" },
  { label: "যোগাযোগ", href: "#" },
  { label: "বিজ্ঞাপন", href: "#" },
  { label: "মিডিয়া পার্টনার", href: "#" },
  { label: "সংবাদকর্মী লগইন", href: "#" },
  { label: "সংবাদকর্মী রেজিস্ট্রেশন", href: "#" },
  { label: "বাংলাদেশের সকল খবর", href: "#" },
  { label: "বাংলাদেশের সংবাদপত্র সমূহ", href: "#" },
  { label: "বাংলাদেশের সকল সংসদ সদস্য", href: "#" },
];

const OTHER_LINKS = [
  { label: "নামাজ, সেহরি ও ইফতার", href: "#" },
  { label: "বাংলাদেশের সকল খবর", href: "#" },
  { label: "বাংলাদেশের সংবাদপত্রসমূহ", href: "#" },
  { label: "বাংলা কনভার্টার", href: "#" },
  { label: "চাকরির খবর", href: "#" },
  { label: "নিউজ আর্কাইভ", href: "#" },
  { label: "তথ্য ও সম্প্রচার মন্ত্রণালয়", href: "#" },
  { label: "তথ্য অধিদফতর", href: "#" },
  { label: "বাংলাদেশ সংবাদ সংস্থা", href: "#" },
];

/* hover = brand colour (bg + white icon) */
const SOCIALS = [
  { key: "facebook", label: "Facebook", href: "#", hover: "hover:bg-[#1877f2]" },
  { key: "twitter", label: "Twitter", href: "#", hover: "hover:bg-[#1da1f2]" },
  { key: "youtube", label: "YouTube", href: "#", hover: "hover:bg-[#ff0000]" },
  {
    key: "instagram",
    label: "Instagram",
    href: "#",
    hover: "hover:bg-[linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)]",
  },
  { key: "linkedin", label: "LinkedIn", href: "#", hover: "hover:bg-[#0a66c2]" },
  { key: "tiktok", label: "TikTok", href: "#", hover: "hover:bg-[#fe2c55]" },
];

const TAGS = [
  { label: "বিজ্ঞাপন", href: "#" },
  { label: "সম্পাদকীয়", href: "#" },
  { label: "শর্তাবলী", href: "#" },
  { label: "নীতিমালা", href: "#" },
  { label: "Fact Checking", href: "#" },
  { label: "Community Guidelines", href: "#" },
  { label: "Copyright Policy", href: "#" },
  { label: "Disclaimer", href: "#" },
  { label: "Sitemap", href: "#" },
];

/* ---------- icons ---------- */
const Svg = ({ children, className = "h-4 w-4", ...p }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...p}>
    {children}
  </svg>
);
const Fill = ({ children, className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>{children}</svg>
);

const ChevronIcon = () => (
  <Svg className="h-3.5 w-3.5 shrink-0" strokeWidth="2.5"><path d="m9 6 6 6-6 6" /></Svg>
);
const UserIcon = () => (
  <Fill className="h-4 w-4 shrink-0 text-gray-400"><path d="M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0 2c-4 0-8 2-8 5v2h16v-2c0-3-4-5-8-5Z" /></Fill>
);
const PenIcon = () => (
  <Svg className="h-4 w-4 shrink-0 text-gray-400"><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5Z" /></Svg>
);
const PinIcon = () => (
  <Fill className="h-4 w-4 shrink-0 text-gray-400"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" /></Fill>
);
const PhoneIcon = () => (
  <Fill className="h-4 w-4 shrink-0 text-gray-400"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1L6.6 10.8Z" /></Fill>
);
const MailIcon = () => (
  <Fill className="h-4 w-4 shrink-0 text-gray-400"><path d="M3 5h18a1 1 0 0 1 1 1v.4l-10 6.2L2 6.4V6a1 1 0 0 1 1-1Zm19 3.7V18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8.7l10 6.2 10-6.2Z" /></Fill>
);
const MailOpenIcon = () => (
  <Svg className="h-5 w-5 text-[#e8504f]"><path d="M3 9.5 12 3l9 6.5V19a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5Z" /><path d="m3 10 9 6 9-6" /></Svg>
);
const SendIcon = () => (
  <Fill className="h-5 w-5"><path d="M21.5 2.5 2.7 10.2a1 1 0 0 0 0 1.9l5.4 2 2 5.4a1 1 0 0 0 1.9 0L21.5 2.5ZM9.5 13.2l8-6.5-6.4 8.1-1.6-1.6Z" /></Fill>
);
const PlayStoreIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7">
    <path fill="#00d2ff" d="M3.6 2.2a1.6 1.6 0 0 0-.4 1.1v17.4c0 .4.1.8.4 1.1l9.6-9.8-9.6-9.8Z" />
    <path fill="#ffce00" d="m16.4 15.3-3.2-3.3 3.2-3.3 3.9 2.2c1.1.6 1.1 1.6 0 2.2l-3.9 2.2Z" />
    <path fill="#f43a56" d="m16.4 15.3-3.2-3.3-9.6 9.8c.4.4 1 .4 1.7.1l11.1-6.6Z" />
    <path fill="#00e07b" d="M16.4 8.7 5.3 2.1c-.7-.3-1.3-.3-1.7.1l9.6 9.8 3.2-3.3Z" />
  </svg>
);
const AppleIcon = () => (
  <Fill className="h-7 w-7 text-white"><path d="M16.4 12.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9-.7 0-1.9-.8-3.100-.8-1.600 0-3.100.9-3.900 2.400-1.700 2.900-.4 7.200 1.200 9.600.8 1.200 1.800 2.500 3 2.400 1.200 0 1.700-.8 3.100-.8s1.900.8 3.100.7c1.300 0 2.100-1.200 2.900-2.300.9-1.300 1.300-2.600 1.300-2.700-.1 0-2.700-1-2.700-4.100ZM14.100 5.700c.600-.8 1.100-1.800.9-2.900-.9 0-2 .6-2.700 1.400-.6.700-1.100 1.800-1 2.800 1 .1 2.100-.5 2.800-1.300Z" /></Fill>
);

const SocialIcon = ({ name }) => {
  switch (name) {
    case "facebook":
      return <Fill><path d="M13.6 22v-8.2h2.8l.5-3.3h-3.3V8.4c0-.9.4-1.7 1.8-1.7h1.6V3.9c-.3 0-1.3-.2-2.4-.2-2.5 0-4.1 1.5-4.1 4.2v2.6H7.7v3.3h2.8V22h3.1Z" /></Fill>;
    case "twitter":
      return <Fill><path d="M22 5.9c-.7.3-1.5.5-2.400.6.900-.5 1.500-1.300 1.800-2.300-.8.5-1.700.8-2.600 1a4.100 4.100 0 0 0-7 3.700A11.600 11.600 0 0 1 3.400 4.600a4.100 4.100 0 0 0 1.300 5.500c-.7 0-1.300-.2-1.900-.5 0 2 1.400 3.700 3.300 4.100-.6.200-1.200.2-1.900.1a4.100 4.100 0 0 0 3.800 2.800A8.200 8.200 0 0 1 2 18.300 11.600 11.600 0 0 0 8.300 20c7.500 0 11.700-6.300 11.700-11.700v-.5c.800-.6 1.500-1.300 2-2Z" /></Fill>;
    case "youtube":
      return <Fill><path d="M23 7.2a3 3 0 0 0-2.100-2.100C19 4.600 12 4.600 12 4.600s-7 0-8.900.5A3 3 0 0 0 1 7.200C.5 9 .5 12 .5 12s0 3 .5 4.800a3 3 0 0 0 2.100 2.100c1.900.5 8.900.5 8.900.5s7 0 8.900-.5a3 3 0 0 0 2.100-2.100c.5-1.800.5-4.800.5-4.800s0-3-.5-4.800ZM9.800 15.200V8.800l5.800 3.200-5.800 3.200Z" /></Fill>;
    case "instagram":
      return <Svg className="h-5 w-5"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></Svg>;
    case "linkedin":
      return <Fill><path d="M4.500 8.500h3.700V20H4.500V8.500ZM6.400 3a2.100 2.100 0 1 1 0 4.300 2.100 2.100 0 0 1 0-4.300ZM10.500 8.500H14v1.600c.5-.9 1.700-1.900 3.600-1.900 3.800 0 4.400 2.500 4.400 5.700V20h-3.700v-5.300c0-1.300 0-2.900-1.800-2.900s-2 1.400-2 2.800V20h-3.700V8.500h-.3Z" /></Fill>;
    default:
      return <Fill><path d="M16.600 3a4.800 4.800 0 0 0 3.700 3.800v3.200a8 8 0 0 1-3.700-1v6.300a6.300 6.300 0 1 1-6.300-6.300c.3 0 .6 0 .9.100v3.300a3.100 3.100 0 1 0 2.200 3V3h3.200Z" /></Fill>;
  }
};

/* ---------- parts ---------- */
function ColumnTitle({ children }) {
  return (
    <div className="mb-6">
      <h3 className="inline-block border-b-2 border-[#e8504f] pb-2 text-[18px] font-bold text-white sm:text-[20px]">
        {children}
      </h3>
    </div>
  );
}

function LinkList({ links }) {
  return (
    <ul className="space-y-3.5">
      {links.map((l, i) => (
        <li key={l.label + i}>
          <Link
            href={l.href}
            className="group inline-flex items-center gap-2.5 text-[13px] text-white transition-all duration-200 hover:-translate-x-1 hover:text-[#e8504f]"
          >
            <ChevronIcon />
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function AboutColumn({ about }) {
  return (
    <div>
      <ColumnTitle>{about.title}</ColumnTitle>
      <p className="text-[13px] leading-[1.9] text-white">{about.text}</p>

      <ul className="mt-6 space-y-3.5 text-[13px] text-white">
        <li className="flex items-center gap-2.5">
          <UserIcon />
          <span><b>স্বত্বাধিকারী:</b> <b>{about.owner}</b></span>
        </li>
        <li className="flex items-center gap-2.5">
          <PenIcon />
          <b>প্রকাশক:</b>
        </li>
        <li className="flex items-start gap-2.5">
          <span className="mt-1"><PinIcon /></span>
          <span>{about.address}</span>
        </li>
        <li className="flex items-center gap-2.5">
          <PhoneIcon />
          <span>{about.phone}</span>
        </li>
        <li className="flex items-center gap-2.5">
          <MailIcon />
          <a href={`mailto:${about.email}`} className="transition hover:text-[#e8504f]">
            {about.email}
          </a>
        </li>
      </ul>
    </div>
  );
}

function SocialRow({ socials }) {
  return (
    <ul className="flex flex-wrap gap-3">
      {socials.map((s) => (
        <li key={s.key}>
          <Link
            href={s.href}
            aria-label={s.label}
            className={`flex h-11 w-11 items-center justify-center rounded-md border border-gray-700 bg-[#1f2937] text-white transition duration-200 hover:-translate-y-0.5 hover:border-transparent ${s.hover}`}
          >
            <SocialIcon name={s.key} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Newsletter() {
  return (
    <div className="mt-8">
      <h4 className="flex items-center gap-2.5 text-[15px] font-bold text-white">
        <MailOpenIcon /> নিউজলেটার সাবস্ক্রাইব করুন
      </h4>
      <form action="#" className="mt-4 flex overflow-hidden rounded-md border border-gray-700">
        <input
          type="email"
          name="email"
          required
          placeholder="আপনার ইমেইল দিন"
          className="min-w-0 flex-1 bg-gray-100 px-4 py-3 text-[12px] text-gray-900 outline-none placeholder:text-gray-500"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          className="flex w-14 shrink-0 items-center justify-center bg-[#e8504f] text-white transition hover:bg-[#d63f3e]"
        >
          <SendIcon />
        </button>
      </form>
    </div>
  );
}

function StoreButtons() {
  const base =
    "flex flex-1 items-center gap-3 rounded-md border border-gray-600 bg-black px-4 py-2.5 text-white transition duration-200 hover:border-white";
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <Link href="#" className={base}>
        <PlayStoreIcon />
        <span className="leading-tight">
          <span className="block text-[8px] uppercase tracking-wide">Get it on</span>
          <span className="block text-[15px] font-semibold">Google Play</span>
        </span>
      </Link>
      <Link href="#" className={base}>
        <AppleIcon />
        <span className="leading-tight">
          <span className="block text-[8px] uppercase tracking-wide">Download on the</span>
          <span className="block text-[15px] font-semibold">App Store</span>
        </span>
      </Link>
    </div>
  );
}

function TagList({ tags }) {
  return (
    <ul className="mt-6 flex flex-wrap gap-3">
      {tags.map((t) => (
        <li key={t.label}>
          <Link
            href={t.href}
            className="block rounded border border-gray-700 bg-[#1f2937] px-3.5 py-2 text-[12px] text-white transition duration-200 hover:border-[#e8504f] hover:bg-[#e8504f]"
          >
            {t.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

/* ---------- main export ---------- */
export default function Footer({
  about = ABOUT,
  importantLinks = IMPORTANT_LINKS,
  otherLinks = OTHER_LINKS,
  socials = SOCIALS,
  tags = TAGS,
}) {
  return (
    <footer className="w-full border-t-4 border-[#e8504f] bg-[#111827] font-[family-name:var(--font-bn)] text-white">
      <div className="mx-auto max-w-[1200px] px-4 pt-14 sm:px-6 lg:pt-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr_1.1fr] lg:gap-14">
          <AboutColumn about={about} />

          <div>
            <ColumnTitle>গুরুত্বপূর্ণ লিংক</ColumnTitle>
            <LinkList links={importantLinks} />
          </div>

          <div>
            <ColumnTitle>অন্যান্য লিংক</ColumnTitle>
            <LinkList links={otherLinks} />
          </div>

          <div>
            <ColumnTitle>যুক্ত থাকুন</ColumnTitle>
            <SocialRow socials={socials} />
            <Newsletter />
            <StoreButtons />
            <TagList tags={tags} />
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-dashed border-gray-700 py-6 text-center text-[12px] text-white sm:flex-row sm:text-left">
          <p>
            © ২০২৬ দৈনিক প্রথম সংবাদ মিডিয়া লিমিটেড। সর্বস্বত্ব সংরক্ষিত। অনুমতি ছাড়া কোনো কন্টেন্ট প্রকাশ বা ব্যবহার বেআইনি।
          </p>
          <p>
            ডিজাইন ও ডেভেলপমেন্ট:{" "}
            <Link href="#" className="font-bold">
              <span className="transition-colors duration-200 hover:text-[#e8504f]">IT</span>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}