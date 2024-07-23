import type { NextPage } from "next";
import { useCallback } from "react";

export type HeroSectionType = {
  className?: string;
};

const HeroSection: NextPage<HeroSectionType> = ({ className = "" }) => {
  const onButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='whyChooseUs']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section
      className={`self-stretch bg-white flex flex-row items-start justify-between py-10 px-[54px] box-border max-w-full gap-[20px] text-left text-base text-green font-small-text mq450:pt-[26px] mq450:pb-[26px] mq450:box-border mq1275:flex-wrap mq750:pl-[27px] mq750:pr-[27px] mq750:box-border ${className}`}
    >
      <div className="w-[591px] flex flex-col items-start justify-start gap-[24px] min-w-[591px] max-w-full mq1275:flex-1 mq750:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
          <div className="flex flex-row items-center justify-start font-button">
            <div className="relative font-semibold inline-block min-w-[70px]">
              About Us
            </div>
          </div>
          <h1 className="m-0 self-stretch relative text-45xl font-medium font-inherit text-dark-blue mq450:text-19xl mq750:text-32xl">
            Experience Expert Plumbing Services
          </h1>
          <div className="w-[560px] relative leading-[26px] text-grey-1 inline-block max-w-full">
            At Williams Plumbing Services, we understand the importance of
            having a reliable plumbing system. That's why we're committed to
            providing our clients with top-quality plumbing services they can
            trust.
          </div>
        </div>
        <button
          className="cursor-pointer [border:none] py-[18px] px-[53px] bg-green rounded-lg flex flex-row items-center justify-center whitespace-nowrap hover:bg-deepskyblue"
          onClick={onButtonClick}
        >
          <a className="[text-decoration:none] relative text-base font-small-text text-dark-yellow text-center inline-block min-w-[86px]">
            Learn More
          </a>
        </button>
      </div>
      <div className="h-[365px] w-[541px] flex flex-row items-center justify-start min-w-[541px] max-w-full mq1275:flex-1 mq750:min-w-full">
        <div className="h-[365px] flex-1 relative rounded-8xl max-w-full flex items-center justify-center">
          <img
            className="h-full flex-1 overflow-hidden object-contain absolute left-[0px] top-[8px] w-full [transform:scale(1.088)] mq1275:flex-1"
            loading="lazy"
            alt=""
            src="/williamsplumbing-familyphotojpg@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
