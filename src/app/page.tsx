
import Hero from "./hero/page";
import ChatSection from "./home/ChatSection";
import { FeaturesSection } from "./home/FeaturesSection";
import MoreSection from "./home/MoreSection";
import ShareBtn from "./home/ShareBtn";

export default function Home() {
  return (
    <>
      <Hero />
      <MoreSection />
      <FeaturesSection />
      <ChatSection/>
      <ShareBtn /> 
    </>
  );
}
