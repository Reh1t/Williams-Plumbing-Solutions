import type { NextPage } from "next";

export type PanelImageContentReverseType = {
  className?: string;
};

const PanelImageContentReverse: NextPage<PanelImageContentReverseType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch bg-white flex flex-row items-center justify-between p-16 box-border opacity-[0.8] [row-gap:20px] max-w-full gap-[0px] text-left text-base text-text-default-default font-small-text mq825:py-space-1600 mq825:px-space-1600 mq825:box-border mq1425:flex-wrap ${className}`}
    >
      <div className="w-[828px] flex flex-col items-center justify-center py-[49px] px-2.5 box-border gap-[24px] min-w-[828px] max-w-full lg:min-w-full mq450:pt-8 mq450:pb-8 mq450:box-border mq1425:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-5xl">
          <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[29px] font-semibold font-inherit mq450:text-lgi mq450:leading-[23px]">
            Chlorine
          </h3>
          <div className="w-[113px] relative text-xl leading-[120%] text-text-default-secondary hidden mq450:text-base mq450:leading-[19px]">{`A bit about it `}</div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
          <div className="flex-1 relative leading-[140%] inline-block max-w-full">
            Chlorine is an aggressive oxidizing agent. When it’s added to water
            it very quickly attacks the tissues of bacteria or other
            microorganisms that might be present in the water. The trouble is
            chlorine also mixes with some of the naturally occurring chemicals
            in the water to produce harmful disinfection byproducts that end up
            in the drinking water.
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
          <div className="flex-1 relative leading-[140%] inline-block max-w-full">{`UV, on the other hand, adds nothing to the water. It simply kills bacteria and other microorganisms as they pass by the UV light. Ultraviolet systems also include a power supply, sometimes called a ballast, for powering the lamp. Residential ultraviolet light water filters are usually plumbed on the main water line for a home or cottage. `}</div>
        </div>
      </div>
      <div className="h-[351px] w-[484px] flex flex-col items-center justify-center min-w-[484px] max-w-full mq825:min-w-full mq1425:flex-1">
        
      <img
        className="h-[351px] w-[484px] rounded-17xl overflow-hidden shrink-0 object-cover max-w-full mq1425:flex-1"
        alt=""
        src="/image-5@2x.png"
      />
      </div>
    </section>
  );
};

export default PanelImageContentReverse;
