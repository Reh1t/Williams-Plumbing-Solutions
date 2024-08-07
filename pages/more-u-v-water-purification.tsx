import type { NextPage } from "next";
import Header1 from "../components/header1";
import PageProduct from "../components/page-product";
import UVWaterPurification from "../components/u-v-water-purification";
import PanelImageContent2 from "../components/panel-image-content2";
import HeroImage from "../components/hero-image";
import PanelImageContentReverse1 from "../components/panel-image-content-reverse1";
import PanelImageContent1 from "../components/panel-image-content1";
import PanelImageContentReverse from "../components/panel-image-content-reverse";
import PanelImageContent from "../components/panel-image-content";
import Footer1 from "../components/footer1";

const MoreUVWaterPurification: NextPage = () => {
  return (
    <div className="w-full relative bg-blue-500 flex flex-col items-center justify-center leading-[normal] tracking-[normal]">
      <Header1 navHEADERAlignSelf="stretch" navHEADERFlex="unset" />
      <div className="self-stretch flex flex-col items-center justify-center py-5 px-0 box-border gap-[48px] max-w-full text-left text-13xl text-black1 font-small-text mq825:gap-[24px]">
      <div className="mx-auto self-stretch relative max-w-full overflow-hidden max-h-full object-cover">
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src="/waterTreatmentBanner.png"
        />
      </div >
      </div>
      <PageProduct />
      <UVWaterPurification />
      <PanelImageContent2 />
      <HeroImage />
      <PanelImageContentReverse1 />
      <PanelImageContent1 />
      <PanelImageContentReverse />
      <PanelImageContent />
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

export default MoreUVWaterPurification;
