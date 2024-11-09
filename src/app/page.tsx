import { Cta } from "@/components/Cta";
import FeaturesSection from "@/components/Feature-section";
import FeaturesSectionB from "@/components/Feature-sectionB";
import { FAQCarousel } from "@/components/Frequentquestion";
import HeroSlider from "@/components/Hero-slider";
import Introduction from "@/components/Introductory";
import { ProductCards } from "@/components/Product-cards";
import ServiceCard from "@/components/Service-card";
import { Testimonials } from "@/components/Testimonial";

export default function Home() {
  return (
    <div className="w-full">
      <div className="relative">
        <HeroSlider/>
        <div className="md:absolute relative md:-bottom-[35rem] lg:-bottom-64 sm:bottom-20 bottom-0 md:z-[50] z-0 w-full">
          <ServiceCard/>
        </div>
      </div>
      <div className="relative md:mt-[35rem] lg:mt-[18rem] mt-[0rem] sm:mt-[0rem]">
        <div className="px-6">
          <Introduction/>

        </div>
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
