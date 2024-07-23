import type { NextPage } from "next";

export type PanelImageContent1Type = {
  className?: string;
};

const PanelImageContent1: NextPage<PanelImageContent1Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch bg-white flex flex-row items-center justify-between p-16 box-border opacity-[0.8] [row-gap:20px] max-w-full gap-[0px] text-left text-5xl text-text-default-default font-small-text mq825:py-space-1600 mq825:px-space-1600 mq825:box-border mq1425:flex-wrap ${className}`}
    >
      <div className="h-[351px] w-[484px] flex flex-col items-start justify-start min-w-[484px] max-w-full mq825:min-w-full mq1425:flex-1">
        <img
          className="self-stretch flex-1 relative rounded-17xl max-w-full overflow-hidden max-h-full object-cover mq1425:self-stretch mq1425:w-auto"
          alt=""
          src="/image-4@2x.png"
        />
      </div>
      <div className="w-[828px] flex flex-col items-center justify-center py-[72px] px-2.5 box-border gap-[24px] min-w-[828px] max-w-full lg:min-w-full mq450:pt-[47px] mq450:pb-[47px] mq450:box-border mq1425:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[29px] font-semibold font-inherit mq450:text-lgi mq450:leading-[23px]">
            Rural Water and Water Tests
          </h3>
          <div className="w-[113px] relative text-xl leading-[120%] text-text-default-secondary hidden mq450:text-base mq450:leading-[19px]">
            Subheading
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start max-w-full text-base">
          <div className="flex-1 relative leading-[140%] inline-block max-w-full">
            It is typically rural-living individuals who are interested in an
            ultraviolet light water filter and it is usually a bad water test
            that begins their journey through the sometimes confusing world of
            water purification. A bad water test is a test that shows the
            presence of e.coli, or coliform bacteria. Both should not be present
            in a drinking water supply. Any lab that tests water will be able to
            test for these two bacteria. Once it’s been established that either
            of these two bacteria are present in a water supply, it’s left to
            the property owner to decide how to proceed. Most rural
            professionals will offer two choices when it comes to dealing with
            bacteria in your water: UV or Chlorine.
          </div>
        </div>
      </div>
    </section>
  );
};

export default PanelImageContent1;
