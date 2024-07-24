import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback } from "react";

export type ServiceTwoType = {
  className?: string;
};

const ServiceTwo: NextPage<ServiceTwoType> = ({ className = "" }) => {
  const router = useRouter();
  const onServicesTextClick = useCallback(() => {
    router.push("/services");
  }, [router]);
  return (
    <div
      className={`self-stretch bg-white flex flex-row items-center justify-between py-0 px-10 box-border max-w-full gap-[20px] text-left text-13xl text-black1 font-small-text mq1400:flex-wrap ${className}`}
    >
      <div className="w-[611px] flex flex-col items-start justify-center gap-[24px] min-w-[611px] max-w-full mq825:min-w-full mq1400:flex-1">
        <h1 className="m-0 self-stretch relative text-inherit leading-[110%] font-semibold font-inherit mq825:text-7xl mq825:leading-[28px] mq450:text-lgi mq450:leading-[21px]">
          Water Treatment
        </h1>
        <div className="self-stretch flex flex-row items-center justify-center max-w-full text-base text-gray-200">
          <div className="flex-1 relative leading-[150%] inline-block max-w-full">
            At Williams Plumbing solutions, we work hard to bring you safe,
            clean, and high-quality water that you can trust. No more buying
            pricey bottled watter-just turn on your tap!
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-2 px-3 bg-black1 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg flex flex-row items-center justify-center hover:bg-darkslategray-200">
          <div
            className="relative text-base leading-[150%] font-medium font-small-text text-white text-left inline-block min-w-[40px]"
            onClick={onServicesTextClick}
          >
            More
          </div>
        </button>
      </div>
      <div className="h-96 w-[650px] flex flex-col items-start justify-start min-w-[650px] max-w-full mq825:min-w-full mq1400:flex-1">
        <img
          className="self-stretch flex-1 relative rounded-2xl max-w-full overflow-hidden max-h-full object-cover mq1400:self-stretch mq1400:w-auto"
          loading="lazy"
          alt=""
          src="/WaterTreatment.png"
        />
      </div>
    </div>
  );
};

export default ServiceTwo;
