import type { NextPage } from "next";
import ColumnItem1 from "./column-item1";
import { useCallback } from "react";

export type ColumnItemType = {
  className?: string;
};

const ColumnItem: NextPage<ColumnItemType> = ({ className = "" }) => {
  const onButtonClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='scrollarea']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-between py-[60px] px-40 box-border max-w-full shrink-0 gap-[20px] text-left text-base text-gray-300 font-small-text lg:flex-wrap lg:py-[39px] lg:px-20 lg:box-border mq750:py-[25px] mq750:px-10 mq750:box-border ${className}`}
    >
      <div className="h-[1028px] w-[396px] flex flex-col items-start justify-start gap-[24px] min-w-[396px] max-w-full lg:flex-1 mq750:min-w-full">
        <ColumnItem1
          carlingwood20172jpeg="/WaterTreatment.png"
          heading="Water Treatment"
          serviceDescription="Our water treatment service involves diagnosing and fixing issues."
          propHeight="unset"
          propGap="unset"
          propFlex="1"
          onButtonClick={onButtonClick}
        />
        <div
          className="self-stretch h-[468px] shadow-[0px_8px_16px_rgba(55,_99,_244,_0.15)] rounded-2xl bg-whitesmoke-100 box-border flex flex-col items-start justify-start py-9 pr-5 pl-[72px] gap-[16px] flex-[0.8419] border-[1px] border-solid border-gainsboro-100 mq450:pl-5 mq450:box-border"
          data-scroll-to="scrollarea"
        >
          <div className="w-[252px] relative leading-[25.6px] flex items-center">
            Water Softeners
          </div>
          <div className="w-[252px] relative leading-[25.6px] flex items-center">
            UV Water Purification
          </div>
          <div className="w-[252px] relative leading-[26px] flex items-center">
            Iron Removal
          </div>
          <div className="w-[252px] relative leading-[25.6px] flex items-center">
            Sulphar Removal
          </div>
          <div className="w-[252px] relative leading-[25.6px] flex items-center">
            Filter Systems
          </div>
          <div className="w-[252px] relative leading-[25.6px] flex items-center">
            Reverse Osmosis
          </div>
        </div>
      </div>
      <div className="w-[393px] flex flex-col items-center justify-start gap-[18px] min-w-[396px] max-w-full lg:flex-1 mq750:min-w-full">
        <ColumnItem1
          carlingwood20172jpeg="/commercial-4jpg@2x.png"
          heading={`Commercial & Industrial`}
          serviceDescription="Our water heater repair service involves diagnosing and fixing issues."
          propHeight="unset"
          propGap="unset"
          propFlex="unset"
        />
        <div className="self-stretch shadow-[0px_8px_16px_rgba(55,_99,_244,_0.15)] rounded-2xl bg-whitesmoke-100 flex flex-col items-start justify-start py-[34px] pr-5 pl-[72px] gap-[16px] border-[1px] border-solid border-gainsboro-100 mq450:pl-5 mq450:box-border mq750:pt-[22px] mq750:pb-[22px] mq750:box-border">
          <div className="w-[249px] relative leading-[26px] flex items-center">
            Condo and Apartment Complex
          </div>
          <div className="w-[249px] relative leading-[26px] flex items-center">
            Commercial Kitchen
          </div>
          <div className="w-[249px] relative leading-[26px] flex items-center">
            Restaurants
          </div>
          <div className="w-[249px] relative leading-[26px] flex items-center">
            Hair Salons
          </div>
          <div className="w-[249px] relative leading-[26px] flex items-center">
            Spa’s
          </div>
          <div className="w-[249px] relative leading-[26px] flex items-center">
            Grease Interceptors
          </div>
          <div className="w-[249px] relative leading-[26px] flex items-center">
            Shops and Factories
          </div>
          <div className="w-[249px] relative leading-[26px] flex items-center">
            Process Piping
          </div>
          <div className="w-[249px] relative leading-[26px] flex items-center">
            Compressed Air Lines
          </div>
          <div className="w-[249px] relative leading-[26px] flex items-center">
            High Pressure Line
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColumnItem;
