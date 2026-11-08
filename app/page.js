import Navbar from "@/components/Navbar";
import Heading from "./components/Heading";
import TrendingSection from "./components/TrendingSection";
import NewsLayout from "./components/NewsLayout";
import VideoGallery from "./components/VideoGallery";
import PhotoGallery from "./components/PhotoGallery";

export default function Home() {
  return (
    <main>
      <Heading />
      <Navbar />
       <TrendingSection />
       <NewsLayout />
       <VideoGallery />
       <PhotoGallery />
    </main>
  );
}