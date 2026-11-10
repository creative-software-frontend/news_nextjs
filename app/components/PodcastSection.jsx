
import Link from "next/link";
import Image from "next/image";

import magic from "../assets/podcast/magic.jpg";
import quran from "../assets/podcast/quran.jpg";

const PODCASTS = [
  {
    id: 1,
    type: "অডিও পডকাস্ট",
    title: "যাদুর ফেরিওয়ালা",
    href: "#",
    image: magic,
    audio: true,
  },
  {
    id: 2,
    type: "ভিডিও পডকাস্ট",
    title: "কুরআন মাজিদ – যে কিতাবে আছে মানবজাতির অজানা সত্য",
    href: "#",
    image: quran,
    audio: false,
  },
];

const MicIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-[#e8504f]">
    <path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3Z" />
    <path d="M19 11a1 1 0 0 0-2 0 5 5 0 0 1-10 0 1 1 0 0 0-2 0 7 7 0 0 0 6 6.93V21h2v-3.07A7 7 0 0 0 19 11Z" />
  </svg>
);

const HeadphoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" className="h-5 w-5">
    <path d="M3 14v-2a9 9 0 0 1 18 0v2" />
    <path d="M3 14h4v7H5a2 2 0 0 1-2-2v-5Zm18 0h-4v7h2a2 2 0 0 0 2-2v-5Z" />
  </svg>
);

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M7 4.5a1 1 0 0 1 1.5-.86l11 6.36a2.3 2.3 0 0 1 0 4l-11 6.36A1 1 0 0 1 7 19.5v-15Z" />
  </svg>
);

const MusicIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M12 3v12.2a3.8 3.8 0 1 1-2-3.36V7l10-2v10.2a3.8 3.8 0 1 1-2-3.36V3.4L12 4.6V3Z" />
  </svg>
);

const VideoIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M4 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4Zm14 4 4-3v12l-4-3V9Z" />
  </svg>
);


function PodcastCard({ podcast }) {
  return (
    <Link href={podcast.href} className="group flex w-full max-w-[346px] flex-col overflow-hidden rounded-xl border border-gray-200/70 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-[#0a0a0a]">

      <div className="relative flex h-[194px] w-full items-center justify-center overflow-hidden bg-[#a3a3a3]">
        {podcast.image ? (
          <Image
            src={podcast.image}
            alt={podcast.title}
            fill
            sizes="(max-width: 640px) 100vw, 346px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-[#a3a3a3]" />
        )}

        <span className="absolute z-10 flex h-[55px] w-[55px] items-center justify-center rounded-full bg-[#d6413e] text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
          {podcast.audio ? <HeadphoneIcon /> : <PlayIcon />}
        </span>
      </div>

      <div className="flex min-h-[114px] flex-col p-4">
        <span className="mb-2 flex items-center gap-2 text-[12px] font-medium text-[#e8504f]">
          {podcast.audio ? <MusicIcon /> : <VideoIcon />}
          {podcast.type}
        </span>

        <h3 className="text-[15px] font-bold leading-snug text-gray-900 transition-colors group-hover:text-[#e8504f] dark:text-gray-100">
          {podcast.title}
        </h3>
      </div>
    </Link>
  );
}


export default function PodcastSection({ podcasts = PODCASTS }) {
  return (
    <section className="w-full bg-[#f7f8fa] py-7 dark:bg-black">
      <div className="mx-auto max-w-[1470px] px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="mb-5 flex items-center justify-between border-b-2 border-gray-200 dark:border-gray-800">
          <div className="relative flex items-center gap-2.5 border-b-2 border-[#e8504f] pb-3">
            <MicIcon />
            <h2 className="text-[21px] font-extrabold text-gray-900 dark:text-white">
              পডকাস্ট
            </h2>
          </div>

          <Link
            href="/podcasts"
            className="mb-3 flex items-center gap-1 text-[13px] font-medium text-gray-600 transition-colors hover:text-[#e8504f] dark:text-gray-300"
          >
            সব দেখুন
            <span>→</span>
          </Link>
        </div>

        {/* Podcast cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 dark:bg-black">
          {podcasts.map((podcast) => (
            <PodcastCard key={podcast.id} podcast={podcast} />
          ))}
        </div>

      </div>
    </section>
  );
}
