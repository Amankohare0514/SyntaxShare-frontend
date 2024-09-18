
import Hero from "./hero/page";
import ChatSection from "./home/ChatSection";
import { FeaturesSection } from "./home/FeaturesSection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <ChatSection/>
    </>
  );
}
