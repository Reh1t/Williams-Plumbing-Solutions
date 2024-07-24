import type { NextPage } from "next";
import Header1 from "../components/header1";
import FrameComponent2 from "../components/frame-component2";
import ConsulationCardComponent1 from "../components/consulation-card-component1";
import Footer1 from "../components/footer1";
import CONTACTForm from "../components/c-o-n-t-a-c-t-form";

const ContactUs1: NextPage = () => {
  return (
    <div className="w-full min-h-screen relative bg-white overflow-y-auto flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border leading-[normal] tracking-[normal]">
      <Header1 navHEADERAlignSelf="stretch" navHEADERFlex="unset" />
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[110px] box-border gap-[8px] max-w-full shrink-0 text-left text-base text-white font-m3-title-medium lg:pb-[71px] lg:box-border mq750:pb-[46px] mq750:box-border">
        <div className="self-stretch flex flex-col items-center justify-center gap-[8px] max-w-full mt-8 mb-8">
      <CONTACTForm />
          {/* <ServiceRequestForm /> */}
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full">
          <div className="h-[464px] flex-1 relative rounded-[28px] overflow-hidden bg-[url('/item1@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full"></div>
        </div>
      </section>
      <FrameComponent2 />
      <ConsulationCardComponent1 />
      <Footer1
        williams20Logo3transparen="/williams20logo3transparent20bgroundpng-3@2x.png"
        buttonsIcon="/buttons--icon5@2x.png"
        buttonsIcon1="/buttons--icon-15@2x.png"
        buttonsIcon2="/buttons--icon-25@2x.png"
        buttonsIcon3="/buttons--icon-35@2x.png"
      />
    </div>
  );
};

export default ContactUs1;
