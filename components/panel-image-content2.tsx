import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

export type PanelImageContent2Type = {
  className?: string;
};

const PanelImageContent2: NextPage<PanelImageContent2Type> = ({
  className = "",
}) => {
  const onUVVideoHowClick = useCallback(() => {
    window.open("youtube.com/watch?v=PHgHpOGa4ho");
  }, []);

  const router = useRouter();
  const onContactButtonClick = useCallback(() => {
    router.push("/contact-us1");
  }, [router]);
  return (
    <section
      className={`self-stretch bg-white flex flex-row flex-wrap items-center justify-center py-space-1600 px-[26px] box-border gap-[40px] opacity-[0.8] max-w-full text-left text-3xl text-black1 font-small-text mq825:gap-[20px] mq825:pt-[42px] mq825:pb-[42px] mq825:box-border ${className}`}
    >
      <div className="h-[218px] w-[340px] flex flex-col items-start justify-start gap-[44px] max-w-full mq450:gap-[22px]">
        <div className="w-[284px] flex flex-row items-start justify-start">
          <h3
            className="m-0 h-[29px] flex-1 relative text-inherit tracking-[0.25px] leading-[20px] font-bold font-inherit inline-block cursor-pointer mq450:text-lg mq450:leading-[16px]"
            onClick={onUVVideoHowClick}
          >
            <p className="m-0">UV Video</p>
            <p className="m-0">How does it work?</p>
          </h3>
          <div
            className="overflow-hidden flex flex-col items-start justify-start py-1.5 pr-px pl-0.5 cursor-pointer"
            onClick={onUVVideoHowClick}
          >
            <img
              className="w-[41.3px] h-[23.8px] relative"
              alt=""
              src="/icon-1.svg"
            />
          </div>
        </div>
        <img
          className="self-stretch flex-1 max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
          alt=""
          src="/image-2@2x.png"
          onClick={onUVVideoHowClick}
        />
      </div>
      <img
        className="h-[350px] flex-1 max-w-full overflow-hidden object-cover min-w-[315px]"
        alt=""
        src="/image-3@2x.png"
      />
      <div className="flex-1 flex flex-col items-center justify-center gap-[24px] min-w-[315px] max-w-full text-base text-text-default-default">
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[22px] box-border gap-[24px] min-w-[300px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-5xl">
            <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[29px] font-semibold font-inherit mq450:text-lgi mq450:leading-[23px]">
              Utilizing your local lake as a water source
            </h3>
            <div className="self-stretch relative text-xl leading-[120%] text-text-default-secondary mq450:text-base mq450:leading-[19px]">
              Lake Water- Can you drink it?
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start max-w-full">
            <div className="flex-1 relative leading-[140%] inline-block max-w-full">
              With the right filtration, enjoying fresh clean lake water is
              possible.
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start max-w-full">
            <div className="h-44 flex-1 relative leading-[140%] inline-block max-w-full">
              <p className="m-0">{`Let us help ensure the purity of every drop you drink with our additional UV purification system. Water filters and softeners may reduce organic contaminants and sediment, but only a UV system can guarantee protection against bacteria and viruses. `}</p>
              <p className="m-0">
                We are here to guide and help you with getting great tasting
                drinking water for residential use directly from a local lake.
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">Let’s take this journey together!</p>
            </div>
          </div>
        </div>
        <button className="cursor-pointer py-2.5 px-[11px] bg-background-brand-default w-[92px] rounded-radius-200 box-border overflow-hidden flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-background-brand-default">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden min-h-[16px]"
            alt=""
            src="/star.svg"
          />
          <div className="bg-transparent relative text-base leading-[100%] font-small-text text-text-brand-on-brand text-left inline-block min-w-[68px]"
          onClick={onContactButtonClick}>
            Call Now
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

export default PanelImageContent2;
