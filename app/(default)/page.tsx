export const metadata = {
  title: "Home - Simple",
  description: "Page description",
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
