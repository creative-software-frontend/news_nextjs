import Navbar from "@/components/Navbar";
import TrendingSection from "./components/TrendingSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 py-10">
       <TrendingSection />
      </div>
    </main>
  );
}