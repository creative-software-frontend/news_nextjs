import Navbar from "@/components/Navbar";
import Heading from "./components/Heading";
import TrendingSection from "./components/TrendingSection";
import NewsLayout from "./components/NewsLayout";
import VideoGallery from "./components/VideoGallery";
import PhotoGallery from "./components/PhotoGallery";
import SaradeshSection from "./components/SaradeshSection";
import Review from "./components/Review";
import PodcastSection from "./components/PodcastSection";
import SpecialSection from "./components/SpecialSection";
import EconomyPoliticsPrayer from "./components/EconomyPoliticsPrayer";
import NewsGrid from "./components/NewsGrid";
import WeatherAndMoreComponent from "./components/WeatherAndMoreComponent";

export default function Home() {
  return (
    <main>
      <div className="sticky top-0 z-50">
        <Heading />
        <Navbar />
      </div>
       <TrendingSection />
       <NewsLayout />
       <VideoGallery />
       <PhotoGallery />
       <SaradeshSection />
       <Review />
       <PodcastSection />
       <SpecialSection />
       <EconomyPoliticsPrayer />
       <NewsGrid />
       <WeatherAndMoreComponent />
    </main>
  );
}