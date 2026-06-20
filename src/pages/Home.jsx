import HeroSection from "../home/HeroSection";
import FeaturesSection from "../home/FeaturesSection";
import FlowSection from "../home/FlowSection";
import CVIntelligenceSection from "../home/CVIntelligenceSection";
import MicrosoftSection from "../home/MicrosoftSection";
import CTASection from "../home/CTASection";

export default function Home({ t }) {
  return (
    <>
      <HeroSection t={t} />
      <FeaturesSection t={t} />
      <CVIntelligenceSection t={t} />
      <FlowSection t={t} />
      <MicrosoftSection t={t} />
      <CTASection t={t} />
    </>
  );
}