import type { NextPage } from "next";
import { useCallback } from "react";
import ColumnItem1 from "./column-item1";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  const onButtonClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='backgroundBorderShadowContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);
  const onButton2Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='backgroundBorderShadow']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-between py-0 px-40 box-border max-w-full shrink-0 gap-[20px] text-left text-9xl text-dark-blue font-button lg:flex-wrap lg:justify-center lg:pl-20 lg:pr-20 lg:box-border mq750:pl-10 mq750:pr-10 mq750:box-border ${className}`}
    >
      <div className="w-[395px] flex flex-col items-start justify-start gap-[19px] min-w-[395px] max-w-full lg:flex-1 mq750:min-w-full">
        <ColumnItem1
          carlingwood20172jpeg="/carlingwood2017-2jpeg1@2x.png"
          heading="Plumbing"
          serviceDescription="Our comprehensive plumbing services including repair, installation, and maintenance."
          onButtonClick={onButtonClick}
        />
        <div
          className="self-stretch shadow-[0px_8px_16px_rgba(55,_99,_244,_0.15)] rounded-2xl bg-whitesmoke-100 flex flex-col items-start justify-start py-[34px] pr-5 pl-[72px] gap-[16px] text-base text-gray-300 font-small-text border-[1px] border-solid border-gainsboro-100 mq450:pl-5 mq450:box-border mq750:pt-[22px] mq750:pb-[22px] mq750:box-border"
          data-scroll-to="backgroundBorderShadowContainer"
        >
          <div className="w-[251px] relative leading-[25.6px] flex items-center">
            Methane Gas Removal
          </div>
          <div className="w-[251px] relative leading-[25.6px] flex items-center">
            Well Pumps
          </div>
          <div className="w-[251px] relative leading-[25.6px] flex items-center">
            Sewage Pumps
          </div>
          <div className="w-[251px] relative leading-[25.6px] flex items-center">
            Sump Pumps
          </div>
          <div className="w-[251px] relative leading-[25.6px] flex items-center">
            Battery Backup and Alarms
          </div>
          <div className="w-[251px] relative leading-[25.6px] flex items-center">
            Toilet Installations
          </div>
          <div className="w-[251px] relative leading-[25.6px] flex items-center">
            Custom Showers
          </div>
          <div className="w-[251px] relative leading-[25.6px] flex items-center">
            Body Jets
          </div>
          <div className="w-[251px] relative leading-[25.6px] flex items-center">
            Steam Systems
          </div>
          <div className="w-[251px] relative leading-[25.6px] flex items-center">
            Rain Showers
          </div>
          <div className="w-[251px] relative leading-[25.6px] flex items-center">
            Fridge Waterline
          </div>
          <div className="w-[251px] relative leading-[25.6px] flex items-center">
            Kitchen Sinks and Faucets
          </div>
          <div className="w-[251px] relative leading-[25.6px] flex items-center">
            Pot Fillers
          </div>
          <div className="w-[251px] relative leading-[25.6px] flex items-center">
            Bar Sinks
          </div>
        </div>
      </div>
      <div className="h-[1162px] w-[379px] flex flex-col items-start justify-start gap-[19px] min-w-[379px] max-w-full text-base text-gray-300 font-small-text lg:flex-1 mq750:min-w-full">
        <ColumnItem1
          carlingwood20172jpeg="/carlingwood2017-2jpeg-1@2x.png"
          heading="Heating"
          serviceDescription="Our heating services include the installation, maintenance, and repair of efficient and reliable heating systems, ensuring your home or business stays warm and comfortable throughout the year"
          propHeight="600px"
          propGap="22px"
          propFlex="unset"
          onButtonClick={onButton2Click}
        />
        <div className="self-stretch flex-1 shadow-[0px_8px_16px_rgba(55,_99,_244,_0.15)] rounded-2xl bg-whitesmoke-100 flex flex-col items-start justify-start py-9 pr-5 pl-[72px] gap-[16px] border-[1px] border-solid border-gainsboro-100 mq450:pl-5 mq450:box-border"
          data-scroll-to="backgroundBorderShadow"
          >
          <div className="w-[235px] relative leading-[25.6px] flex items-center">
            Boilers
          </div>
          <div className="w-[235px] relative leading-[25.6px] flex items-center">
            Hydronic Heating
          </div>
          <div className="w-[235px] relative leading-[26px] flex items-center">
            Outdoor Wood Furnace
          </div>
          <div className="w-[235px] relative leading-[25.6px] flex items-center">
            Hot Water Tanks
          </div>
          <div className="w-[235px] relative leading-[25.6px] flex items-center">
            In-Floor Heating
          </div>
          <div className="w-[235px] relative leading-[25.6px] flex items-center">
            Fan Coils
          </div>
          <div className="w-[235px] relative leading-[26px] flex items-center">
            Cast Iron Radiators
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
