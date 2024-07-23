import type { NextPage } from "next";

export type PanelImageContentReverse1Type = {
  className?: string;
};

const PanelImageContentReverse1: NextPage<PanelImageContentReverse1Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch bg-white flex flex-row items-center justify-between py-8 px-space-1600 box-border opacity-[0.8] [row-gap:20px] max-w-full gap-[0px] text-left text-base text-text-default-default font-small-text mq825:pl-8 mq825:pr-8 mq825:box-border mq450:pt-[21px] mq450:pb-[21px] mq450:box-border mq1425:flex-wrap ${className}`}
    >
      <div className="w-[837px] flex flex-col items-start justify-start py-0 px-2.5 box-border gap-[24px] min-w-[837px] max-w-full lg:min-w-full mq1425:flex-1">
        <div className="w-[484px] flex flex-col items-start justify-start max-w-full text-5xl">
          <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[29px] font-semibold font-inherit mq450:text-lgi mq450:leading-[23px]">
            Making the Decision
          </h3>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
          <div className="flex-1 relative leading-[140%] whitespace-pre-wrap inline-block max-w-full">
            As with all water purification devices, the decision to buy any
            product should be based on how that product will impact water
            quality. That is, decide what you need to fix in your water, and
            then start looking for a product to solve your problem.
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
          <div className="flex-1 relative leading-[140%] inline-block max-w-full">
            <p className="m-0">
              Not all water filtration or purification devices are created
              equal. Some products are designed to remove sediment, while some
              products will remove chemicals from the water.
            </p>
            <p className="m-0">
              Other devices are designed to remove biological contamination.
            </p>
            <p className="m-0">
              In the case of a UV system, it is the latter. Anybody who is
              concerned about possible or proven microbiological contamination
              in their drinking water should consider a UV system. Do not look
              to UV to remove any chemicals from water nor to improve the taste
              and odour of the water. It simply isn’t designed for this.
            </p>
          </div>
        </div>
      </div>
      <div className="h-[297px] w-[475px] flex flex-col items-start justify-start min-w-[475px] max-w-full mq825:min-w-full mq1425:flex-1">
        <img
          className="self-stretch flex-1 relative rounded-17xl max-w-full overflow-hidden max-h-full object-cover mq1425:self-stretch mq1425:w-auto"
          loading="lazy"
          alt=""
          src="/watersoftenerindexpagejpeg@2x.png"
        />
      </div>
    </section>
  );
};

export default PanelImageContentReverse1;
