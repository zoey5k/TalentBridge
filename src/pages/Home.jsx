import HeroSection from "../home/HeroSection";
import TrustedBy from "../home/TrustedBy";
import FeaturesSection from "../home/FeaturesSection";
import FlowSection from "../home/FlowSection";
import MicrosoftSection from "../home/MicrosoftSection";
import PricingSection from "../home/PricingSection";
import CTASection from "../home/CTASection";

export default function Home({
  t
}) {

  return (
    <>

      <HeroSection t={t} />

      <TrustedBy t={t} />

      <FeaturesSection t={t} />

      <FlowSection t={t} />

      <MicrosoftSection t={t} />

      <PricingSection t={t} />

      <CTASection t={t} />

    </>
  );
}