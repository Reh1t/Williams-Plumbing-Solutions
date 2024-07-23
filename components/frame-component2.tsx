import type { NextPage } from "next";
import { useCallback } from "react";
import Content from "./content";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  const onWatchVideoTextClick = useCallback(() => {
    window.open("https://vimeo.com/63522168");
  }, []);

  const onReadMoreTextClick = useCallback(() => {
    window.open(
      "https://www.water-right.com/homeowner-resources/how-do-reverse-osmosis-drinking-water-systems-work/"
    );
  }, []);

  const onReadMoreTextClick1 = useCallback(() => {
    window.open(
      "https://www.water-right.com/homeowner-resources/myths-about-water-softeners-8-things-people-get-wrong/"
    );
  }, []);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[102px] box-border max-w-full shrink-0 text-left text-base text-green font-button mq1050:pb-[66px] mq1050:box-border mq450:pb-[43px] mq450:box-border ${className}`}
    >
      <div className="w-[1140px] flex flex-col items-start justify-start gap-[64px] max-w-full lg:gap-[32px] mq750:gap-[16px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[949px] flex flex-col items-start justify-start gap-[16px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
              <div className="flex flex-row items-start justify-start gap-[10px]">
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <img
                    className="w-[18px] h-[18px] relative"
                    loading="lazy"
                    alt=""
                    src="/vector3.svg"
                  />
                </div>
                <div className="relative font-semibold inline-block min-w-[78px]">
                  Education
                </div>
              </div>
            </div>
            <h1 className="m-0 self-stretch relative text-45xl font-medium font-inherit text-dark-blue text-center mq1050:text-32xl mq450:text-19xl">
              Stay Up-to-Date with Plumbing Tips and Trends
            </h1>
          </div>
        </div>
        <div className="self-stretch grid flex-row items-start justify-start gap-[20px] max-w-full grid-cols-[repeat(3,_minmax(275px,_1fr))] mq750:grid-cols-[minmax(275px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(275px,_477px))]">
          <div className="flex flex-col items-start justify-start max-w-full">
            <div
              className="self-stretch rounded-t-xl rounded-b-none overflow-hidden flex flex-col items-start justify-end pt-[174px] px-8 pb-4 relative cursor-pointer"
              onClick={onWatchVideoTextClick}
            >
              <img
                className="w-[397px] h-[283px] absolute !m-[0] top-[-55px] left-[calc(50%_-_198.5px)] object-cover"
                loading="lazy"
                alt=""
                src="/replace-this@2x.png"
              />
              <div className="rounded-lg bg-green-light flex flex-row items-start justify-start py-1 px-2.5 whitespace-nowrap z-[1]">
                <div className="relative font-semibold inline-block min-w-[108px]">
                  Plumbing Tips
                </div>
              </div>
            </div>
            <Content
              heading="Poop Talk - It’s All About The Water"
              text="A must watch for all cottagers and rural based  homeowners that  have a septic system."
              watchVideo="Watch Video"
              onImageContainerClick={onWatchVideoTextClick}
            />
          </div>
          <div className="flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch h-[220px] rounded-t-xl rounded-b-none overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[174px] px-[15px] pb-4 box-border max-w-full mq450:pt-[113px] mq450:pb-5 mq450:box-border">
              <img
                className="mt-[-178px] w-[326px] h-[178px] relative object-contain max-w-full shrink-0"
                alt=""
                src="/replace-this-1@2x.png"
              />
              <div className="flex flex-row items-start justify-start py-0 px-[17px]">
                <div className="rounded-lg bg-green-light flex flex-row items-start justify-start py-1 px-2.5 whitespace-nowrap">
                  <div className="relative font-semibold">
                    Product Spotlight
                  </div>
                </div>
              </div>
            </div>
            <Content
              heading="Reverse Osmosis"
              text="Reverse osmosis is a great option for those who have water softeners or other filtration systems (such as a fixture-mounted carbon system) that aren’t quite meeting the homeowner’s needs."
              watchVideo="Read More"
              onImageContainerClick={onReadMoreTextClick}
            />
          </div>
          <div className="flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch rounded-t-xl rounded-b-none overflow-hidden flex flex-col items-start justify-end pt-[174px] px-8 pb-4">
              <div className="flex flex-row items-start justify-start relative">
                <img
                  className="h-[259px] w-[388px] absolute !m-[0] top-[-193px] right-[-191px] object-cover"
                  alt=""
                  src="/replace-this-2@2x.png"
                />
                <div className="rounded-lg bg-green-light flex flex-row items-start justify-start py-1 px-2.5 whitespace-nowrap z-[1]">
                  <div className="relative font-semibold">Maintenance Tips</div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-t-none rounded-b-xl bg-grey-light-2 overflow-hidden flex flex-col items-start justify-start pt-4 px-8 pb-8 gap-[20px] text-5xl text-dark-blue">
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <h3 className="m-0 self-stretch relative text-inherit font-bold font-inherit mq450:text-lgi">{`Issues with Hard Water? `}</h3>
                </div>
                <div className="self-stretch relative text-sm leading-[24px] font-form-field text-grey-1">
                  <p className="m-0">
                    Learn how to identify the signs that you need a water
                    softener in your home.
                  </p>
                  <p className="m-0">
                    Here’s the truth about what happens when you use a water
                    softener in your home as we bust eight different soft water
                    myths.
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[10px] text-base text-green">
                <a
                  className="[text-decoration:none] relative text-[inherit] inline-block min-w-[79px] cursor-pointer"
                  onClick={onReadMoreTextClick1}
                >
                  Read More
                </a>
                <img
                  className="h-[7.4px] w-8 relative"
                  alt=""
                  src="/line-21.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
