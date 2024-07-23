import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

export type HeroImageType = {
  className?: string;
};

const HeroImage: NextPage<HeroImageType> = ({ className = "" }) => {
  const router = useRouter();

  const onButtonTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='scroller']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, [router]);


  const onContactButtonClick = useCallback(() => {
    router.push("/contact-us1");
  }, [router]);

  return (
    <section
      className={`self-stretch flex flex-col items-center justify-center py-[95px] px-5 box-border gap-[32px] bg-[url('/hero-image@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-center text-53xl text-text-utilities-text-on-overlay font-small-text mq450:gap-[16px] mq450:pt-[62px] mq450:pb-[62px] mq450:box-border ${className}`}
    >
      <div className="w-[775px] flex flex-col items-center justify-start gap-[8px] max-w-full">
        <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.03em] leading-[120%] font-bold font-inherit mq825:text-39xl mq825:leading-[69px] mq450:text-24xl mq450:leading-[52px]">
          UV WATER FILTRATION
        </h1>
        <h1 className="m-0 self-stretch relative text-13xl leading-[120%] font-normal font-inherit mq825:text-7xl mq825:leading-[31px] mq450:text-lgi mq450:leading-[23px]">
          When to use a UV Water System; Is it right for you?
        </h1>
      </div>
      <div className="flex flex-row items-center justify-center gap-[16px]">
        <button className="cursor-pointer py-2.5 px-[11px] bg-background-neutral-tertiary rounded-radius-200 overflow-hidden flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-border-neutral-secondary">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden min-h-[16px]"
            alt=""
            src="/star1.svg"
          />
          <div
            className="relative text-base leading-[100%] font-small-text text-text-default-default text-left inline-block min-w-[86px] whitespace-nowrap cursor-pointer"
            onClick={onButtonTextClick}
          >
            Learn More
          </div>
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden min-h-[16px]"
            alt=""
            src="/x1.svg"
          />
        </button>
        <button className="cursor-pointer py-2.5 px-[11px] bg-background-brand-default w-[77px] rounded-radius-200 box-border overflow-hidden shrink-0 flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-background-brand-default">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden min-h-[16px]"
            alt=""
            src="/star.svg"
          />
          <div className="relative text-base leading-[100%] font-small-text text-text-brand-on-brand text-left inline-block min-w-[53px]"
            onClick={onContactButtonClick}>
            Call Us
          </div>
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden min-h-[16px]"
            alt=""
            src="/x.svg"
          />
        </button>
      </div>
    </section>
  );
};

export default HeroImage;
