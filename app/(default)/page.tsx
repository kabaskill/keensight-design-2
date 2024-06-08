export const metadata = {
  title: "Keensight Analytics - Sharpened Intuition",
  description: "Innovative AI, Complete Software.",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import FeaturesBlocks from "@/components/features-blocks";
import Testimonials from "@/components/testimonials";
import Newsletter from "@/components/newsletter";
import SubContent from "@/components/subcontent";
import Faq from "@/components/faq";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesBlocks />
      <SubContent side="left" index={0} />
      <SubContent side="right" index={1} />
      <Testimonials />
      <Faq />
      <Newsletter />
    </>
  );
}
