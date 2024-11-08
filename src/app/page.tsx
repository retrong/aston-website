import { Cta } from "@/components/Cta";
import FeaturesSection from "@/components/Feature-section";
import FeaturesSectionB from "@/components/Feature-sectionB";
import { FAQCarousel } from "@/components/Frequentquestion";
import HeroSlider from "@/components/Hero-slider";
import Introduction from "@/components/Introductory";
import { ProductCards } from "@/components/Product-cards";
import ServiceCard from "@/components/Service-card";
import { Testimonials } from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <div className="relative">
        <HeroSlider/>
        <div className="md:absolute relative md:-bottom-[30rem] lg:-bottom-64 sm:bottom-20 bottom-20 md:z-[50] z-0 w-full">
          <ServiceCard/>
        </div>
      </div>
      <div className="relative mt-[20rem]">
        <Introduction/>
        <FeaturesSection/>
        <FeaturesSectionB/>
        <ProductCards />
        <Testimonials />
        <Cta/>
        <FAQCarousel/>
      </div>
    </div>
  );
}
