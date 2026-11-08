import Navbar from "@/components/Navbar";
import Heading from "./components/Heading";
import TrendingSection from "./components/TrendingSection";
import NewsLayout from "./components/NewsLayout";
import VideoGallery from "./components/VideoGallery";
import PhotoGallery from "./components/PhotoGallery";
import SaradeshSection from "./components/SaradeshSection";
import Review from "./components/Review";

export default function Home() {
  return (
    <main>
      <Heading />
      <Navbar />
       <TrendingSection />
       <NewsLayout />
       <VideoGallery />
       <PhotoGallery />
       <SaradeshSection />
       <Review />
    </main>
  );
}