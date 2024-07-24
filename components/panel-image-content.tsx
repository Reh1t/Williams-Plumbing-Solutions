import type { NextPage } from "next";
import { useCallback } from "react";

export type PanelImageContentType = {
  className?: string;
};

const PanelImageContent: NextPage<PanelImageContentType> = ({
  className = "",
}) => {
  const onTextClick = useCallback(() => {
    window.open(
      "https://tappwater.co/blogs/blog/bottled-water-tap-water-in-canada "
    );
  }, []);

  return (
    <section
      className={`self-stretch bg-white flex flex-row items-center justify-between p-16 box-border opacity-[0.8] [row-gap:20px] max-w-full gap-[0px] text-left text-5xl text-text-default-default font-small-text mq825:py-space-1600 mq825:px-space-1600 mq825:box-border mq1425:flex-wrap ${className}`}
    >
      <div className="h-[351px] w-[484px] flex flex-col items-center justify-center min-w-[484px] max-w-full mq825:min-w-full mq1425:flex-1">

      <img
        className="h-auto w-[484px] overflow-hidden shrink-0 object-contain min-h-[351px] max-w-full mq1425:flex-1"
        alt=""
        src="/image-6@2x.png"
        data-scroll-to="scroller"
      />
      </div>
      <div className="w-auto flex flex-col items-center justify-center py-[77px] px-2.5 box-border gap-[24px] min-w-[828px] max-w-full lg:min-w-full mq450:pt-[50px] mq450:pb-[50px] mq450:box-border mq1425:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[29px] font-semibold font-inherit mq450:text-lgi mq450:leading-[23px]">
            We Know Water Treatment
          </h3>
          <div className="self-stretch relative text-xl leading-[120%] text-text-default-secondary mq450:text-base mq450:leading-[19px]">
            <p className="m-0">{`Something wrong with your water? `}</p>
            <p className="m-0">We have the solution!</p>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start text-base">
          <div
            className="h-[88px] relative leading-[140%] inline-block cursor-pointer"
            onClick={onTextClick}
          >
            <p className="m-0">
              Whether you have water provided by the municipality or by a well.
              We can make your water safe and good to drink.
            </p>
            <p className="m-0">NO MORE BOTTLED WATER</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PanelImageContent;
