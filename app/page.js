import Navbar from "@/components/Navbar";
import Heading from "./components/Heading";
import TrendingSection from "./components/TrendingSection";

export default function Home() {
  return (
    <main>
      <Heading />
      <Navbar />
      {/* <div className="mx-auto max-w-7xl px-4 py-10"> */}
       <TrendingSection />
      {/* </div> */}
    </main>
  );
}