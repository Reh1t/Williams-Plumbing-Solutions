import type { NextPage } from "next";
import { useCallback } from "react";
import React from "react";
import { useRouter } from "next/router";

export type ConsulationCardComponent1Type = {
  className?: string;
};

const ConsulationCardComponent1: NextPage<ConsulationCardComponent1Type> = ({
  className = "",
}) => {
  const router = useRouter();
  const onContactButtonClick = useCallback(() => {
    router.push("/contact-us1");
  }, [router]);
  return (
    <section
      className={`self-stretch [background:linear-gradient(rgba(56,_141,_208,_0.4),_rgba(56,_141,_208,_0.4)),_rgba(56,_141,_208,_0.4)] flex flex-row items-center justify-center py-10 px-5 box-border max-w-full shrink-0 text-left text-base text-green font-small-text mq750:pt-[26px] mq750:pb-[26px] mq750:box-border ${className}`}
    >
      <div className="w-[426px] rounded-3xl bg-grey-light-1 overflow-hidden shrink-0 flex flex-col items-start justify-start py-[42px] px-[41px] box-border gap-[30px] max-w-full mq450:gap-[15px] mq750:pt-[27px] mq750:pb-[27px] mq750:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px] shrink-0">
          <div className="flex flex-row items-center justify-start gap-[10px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/pipe-icon.svg"
            />
            <div className="relative font-semibold inline-block min-w-[101px]">
              Special Offer
            </div>
          </div>
          <h1 className="m-0 self-stretch relative text-13xl font-semibold font-inherit text-dark-blue mq450:text-lgi mq1050:text-7xl">
            Get Your Free Consultation Today!
          </h1>
        </div>
        <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-grey-3" />
        <div className="self-stretch flex flex-col items-center justify-start gap-[32px] text-dark-blue mq450:gap-[16px]">
          <div className="self-stretch rounded-xl flex flex-col items-start justify-start py-0 pr-1.5 pl-0 gap-[10px]">
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <img
                className="h-5 w-5 relative"
                loading="lazy"
                alt=""
                src="/vector2.svg"
              />
              <div className="relative leading-[26px]">
                Fast Fixes, Affordable Prices
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
              <img className="h-5 w-5 relative" alt="" src="/vector2.svg" />
              <div className="relative leading-[26px]">
                Reliable Plumbing Solutions Guaranteed
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <img className="h-5 w-5 relative" alt="" src="/vector2.svg" />
              <div className="relative leading-[26px]">
                Expert Plumbers, Quality Service
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <img className="h-5 w-5 relative" alt="" src="/vector2.svg" />
              <div className="relative leading-[26px]">{`Exclusive Services Available `}</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <img className="h-5 w-5 relative" alt="" src="/vector2.svg" />
              <div className="relative leading-[26px]">
                Get Your Problems Solved Today!
              </div>
            </div>
          </div>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] w-[303px] flex flex-row items-start justify-start"
            onClick={onContactButtonClick}
          >
            <div className="flex-1 rounded-lg bg-green flex flex-row items-center justify-center py-[18px] px-5 whitespace-nowrap">
              <b className="relative text-base inline-block font-button text-dark-yellow text-center min-w-[117px]">
                Services Detail
              </b>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConsulationCardComponent1;
