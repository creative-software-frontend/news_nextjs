import Navbar from "@/components/Navbar";
import Heading from "./components/Heading";
import TrendingSection from "./components/TrendingSection";
import NewsLayout from "./components/NewsLayout";

export default function Home() {
  return (
    <main>
      <Heading />
      <Navbar />
       <TrendingSection />
       <NewsLayout />
    </main>
  );
}