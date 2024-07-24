import type { NextPage } from "next";
import { useCallback } from "react";

export type UVWaterPurificationType = {
  className?: string;
};

const UVWaterPurification: NextPage<UVWaterPurificationType> = ({
  className = "",
}) => {
  const onStoryOfUVClick = useCallback(() => {
    window.open("youtube.com/watch?v=PHgHpOGa4ho");
  }, []);

  return (
    <section
      className={`self-stretch bg-white flex flex-row items-start justify-between pt-space-1600 px-space-1600 pb-1.5 box-border opacity-[0.8] max-w-full gap-[20px] text-left text-base text-text-default-default font-small-text mq825:pt-[42px] mq825:pb-5 mq825:box-border mq1425:flex-wrap mq1425:pl-8 mq1425:pr-8 mq1425:box-border ${className}`}
    >
      <div className="w-[484px] flex flex-col items-start justify-start gap-[24px] min-w-[300px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-5xl">
          <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[29px] font-semibold font-inherit mq450:text-lgi mq450:leading-[23px]">
            UV Water Purification
          </h3>
          <div className="self-stretch relative text-xl leading-[120%] text-text-default-secondary mq450:text-base mq450:leading-[19px]">
            How do they work?
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
          <div className="h-auto flex-1 relative leading-[140%] inline-block max-w-full">
            <p className="m-0">
              Enjoy a safe and clean drinking water supply by using one of our
              UV Water Purifiers!
            </p>
            <p className="m-0">
              Our advanced purification systems uses ultraviolet light to
              eradicate harmful bacteria and viruses without any added
              chemicals. This powerful antiviral technology penetrates the
              genetic core (DNA) of disease causing microorganisms, rendering
              them unable to reproduce - up to 99.99% effective in eliminating
              their threat! Disinfecting your water with Ultraviolet light is
              exceptionally simple, effective and environmentally safe. UV water
              purification is usually used with other forms of filtration such
              as reverse osmosis systems or carbon block filters. Keep your
              loved ones healthy while reducing environmental waste with easy
              installation for no change in taste or odour from your home’s tap
              water.
            </p>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
          <div className="h-[22px] flex-1 relative leading-[140%] inline-block max-w-full" />
        </div>
      </div>
      <img
        className="h-[350px] w-[484px] overflow-hidden shrink-0 object-cover max-w-full"
        loading="lazy"
        alt=""
        src="/image@2x.png"
      />
      <div className="h-[263px] w-[269px] flex flex-col items-center justify-start gap-[52px] text-xl text-black1 mq450:gap-[26px]">
        <div className="w-[193px] flex flex-row items-start justify-start gap-[30px]">
          <b
            className="h-[25px] flex-1 relative tracking-[0.25px] leading-[20px] inline-block cursor-pointer mq450:text-base mq450:leading-[16px]"
            onClick={onStoryOfUVClick}
          >
            Story of UV Video
          </b>
          <div
            className="overflow-hidden flex flex-col items-start justify-start py-1.5 pr-px pl-0.5 cursor-pointer"
            onClick={onStoryOfUVClick}
          >
            <img
              className="w-[42.2px] h-[23.8px] relative"
              loading="lazy"
              alt=""
              src="/icon1.svg"
            />
          </div>
        </div>
        <img
          className="self-stretch flex-1 max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
          alt=""
          src="/image-1@2x.png"
          onClick={onStoryOfUVClick}
        />
      </div>
    </section>
  );
};

export default UVWaterPurification;
