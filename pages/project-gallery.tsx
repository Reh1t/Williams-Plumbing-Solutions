import type { NextPage } from "next";
import Header1 from "../components/header1";
import Projects from "../components/projects";
import Footer1 from "../components/footer1";

const ProjectGallery: NextPage = () => {
  return (
    <div className="w-full relative bg-white flex flex-col items-start justify-center leading-[normal] tracking-[normal] text-left text-45xl text-black1 font-small-text">
      <Header1 navHEADERAlignSelf="stretch" navHEADERFlex="unset" />
      <section className="self-stretch bg-gainsboro-300 flex flex-row flex-wrap items-center justify-center py-0 px-[162px] box-border gap-[22px] max-w-full text-left text-45xl text-dark-blue font-small-text mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[81px] mq750:pr-[81px] mq750:box-border">
        <img
          className="h-[512px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[392px] mq750:min-w-full"
          loading="lazy"
          alt=""
          src="/picture--deccember2018barrhaven-2jpeg@2x.png"
        />
        <h1 className="m-0 relative text-inherit leading-[110%] font-semibold font-inherit inline-block max-w-full mq450:text-19xl mq450:leading-[42px] mq1050:text-32xl mq1050:leading-[56px]">
          Projects Gallery
        </h1>
      </section>
      <div className="flex flex-row items-center justify-center py-5 px-[70px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
        <h1 className="m-0 relative text-inherit leading-[90px] font-semibold font-inherit mq450:text-19xl mq450:leading-[54px] mq1050:text-32xl mq1050:leading-[72px]">
          Projects
        </h1>
      </div>
      <Projects />
      <Footer1
        williams20Logo3transparen="/williams20logo3transparent20bgroundpng@2x.png"
        buttonsIcon="/buttons--icon3@2x.png"
        buttonsIcon1="/buttons--icon-13@2x.png"
        buttonsIcon2="/buttons--icon-23@2x.png"
        buttonsIcon3="/buttons--icon-33@2x.png"
      />
    </div>
  );
};

export default ProjectGallery;
