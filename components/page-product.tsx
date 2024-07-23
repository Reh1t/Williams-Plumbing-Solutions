import type { NextPage } from "next";

export type PageProductType = {
  className?: string;
};

const PageProduct: NextPage<PageProductType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-white flex flex-col items-start justify-start py-4 px-space-1600 box-border gap-[24px] min-w-[240px] max-w-full text-left text-15xl text-text-default-default font-header-1 mq825:pl-8 mq825:pr-8 mq825:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start max-w-full mq825:gap-[32px] mq450:gap-[16px]">
        <div className="flex-1 flex flex-col items-start justify-center gap-[24px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] font-bold font-inherit mq825:text-8xl mq450:text-xl">{`Water Treatment & UV Water Purification`}</h1>
          </div>
          <div className="self-stretch h-10 rounded-radius-200 bg-background-brand-default box-border overflow-hidden shrink-0 flex flex-row items-center justify-center p-3 gap-[8px] text-base text-text-brand-on-brand font-small-text border-[1px] border-solid border-background-brand-default">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/star.svg"
            />
            <div className="self-stretch w-[51px] relative leading-[100%] hidden">
              Button
            </div>
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/x.svg"
            />
          </div>
        </div>
      </div>
      <div className="w-[1213px] flex flex-row items-center justify-between max-w-full gap-[20px] lg:flex-wrap">
        <img
          className="w-[427px] relative max-h-full object-contain max-w-full lg:flex-1"
          loading="lazy"
          alt=""
          src="/uv20lady20imagejpg@2x.png"
        />
        <img
          className="w-[395px] relative rounded-3xl max-h-full object-cover max-w-full lg:flex-1"
          loading="lazy"
          alt=""
          src="/williams-install-4png@2x.png"
        />
      </div>
    </section>
  );
};

export default PageProduct;
