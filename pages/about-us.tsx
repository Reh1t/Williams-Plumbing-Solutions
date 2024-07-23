import type { NextPage } from "next";
import Header1 from "../components/header1";
import HeroSection from "../components/hero-section";
import YourReliablePartner from "../components/your-reliable-partner";
import WhyChooseUs from "../components/why-choose-us";
import Footer1 from "../components/footer1";
import CONTACTForm from "../components/c-o-n-t-a-c-t-form";


const AboutUs: NextPage = () => {
  return (
    <div className="w-full relative bg-white flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <Header1 navHEADERAlignSelf="stretch" navHEADERFlex="unset" />
      <HeroSection />
      <YourReliablePartner />
      <WhyChooseUs />
      <CONTACTForm />
      <Footer1
        williams20Logo3transparen="/williams20logo3transparent20bgroundpng@2x.png"
        buttonsIcon="/buttons--icon1@2x.png"
        buttonsIcon1="/buttons--icon-11@2x.png"
        buttonsIcon2="/buttons--icon-21@2x.png"
        buttonsIcon3="/buttons--icon-31@2x.png"
      />
    </div>
  );
};

export default AboutUs;
