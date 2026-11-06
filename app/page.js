import Navbar from "@/components/Navbar";
import Heading from "./components/Heading";
import TrendingSection from "./components/TrendingSection";

export default function Home() {
  return (
    <main>
      <Heading />
      <Navbar />
       <TrendingSection />
    </main>
  );
}