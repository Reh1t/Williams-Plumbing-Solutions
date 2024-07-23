import type { NextPage } from "next";
import Header1 from "../components/header1";
import FrameComponent1 from "../components/frame-component1";
import ColumnItem from "../components/column-item";
import ConsulationCardComponent1 from "../components/consulation-card-component1";
import Footer1 from "../components/footer1";

const Services: NextPage = () => {
  return (
    <div className="w-full relative bg-white flex flex-col items-center justify-start leading-[normal] tracking-[normal]">
      <Header1 navHEADERAlignSelf="stretch" navHEADERFlex="unset" />
      <section className="w-[1222px] flex flex-col items-start justify-start py-[60px] px-2.5 box-border max-w-full shrink-0 text-center text-15xl text-dark-blue font-header-1">
        <div className="self-stretch flex flex-col items-start justify-start">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] font-bold font-inherit mq450:text-xl mq1050:text-8xl">
            Comprehensive Plumbing Services For All of Your Needs
          </h1>
        </div>
      </section>
      <FrameComponent1 />
      <ColumnItem />
      <ConsulationCardComponent1 />
      <Footer1
        williams20Logo3transparen="/williams20logo3transparent20bgroundpng@2x.png"
        buttonsIcon="/buttons--icon2@2x.png"
        buttonsIcon1="/buttons--icon-12@2x.png"
        buttonsIcon2="/buttons--icon-22@2x.png"
        buttonsIcon3="/buttons--icon-32@2x.png"
      />
    </div>
  );
};

export default Services;
