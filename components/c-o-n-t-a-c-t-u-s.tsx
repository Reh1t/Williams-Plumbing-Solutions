import type { NextPage } from "next";
import Input from "./input";

export type CONTACTUSType = {
  className?: string;
  williams20Logo3transparen?: string;
};

const CONTACTUS: NextPage<CONTACTUSType> = ({
  className = "",
  williams20Logo3transparen,
}) => {
  return (
    <div
      className={`bg-whitesmoke-200 max-w-full overflow-hidden flex flex-row items-center justify-between py-20 px-[92px] box-border leading-[normal] tracking-[normal] gap-[20px] text-left text-29xl text-black1 font-small-text self-stretch lg:flex-wrap lg:pl-[46px] lg:pr-[46px] lg:box-border mq750:pl-[23px] mq750:pr-[23px] mq750:box-border ${className}`}
    >
      <div className="w-[532px] flex flex-col items-start justify-start gap-[24px] min-w-[532px] max-w-full lg:flex-1 mq750:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] font-semibold font-inherit mq450:text-10xl mq1050:text-19xl">
            Contact us
          </h1>
          <div className="self-stretch relative text-xl leading-[150%] text-gray-200 mq450:text-base mq450:leading-[24px]">{`We look forward to connecting with you soon. `}</div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px] max-w-full text-base">
          <div className="self-stretch flex flex-row items-center justify-start gap-[32px] mq750:flex-wrap mq750:gap-[16px]">
            <Input firstName="First name" labelPlaceholder="Jane" />
            <Input
              firstName="Last name"
              labelPlaceholder="Smitherton"
              propFlex="1"
              propMinWidth="162px"
              propAlignSelf="unset"
            />
          </div>
          <Input
            firstName="Email address"
            labelPlaceholder="email@janesfakedomain.net"
            propFlex="unset"
            propMinWidth="unset"
            propAlignSelf="stretch"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch relative leading-[150%] font-medium">
              Your message
            </div>
            <textarea
              className="bg-white h-[162px] w-auto [outline:none] self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg box-border flex flex-row items-start justify-start py-3 px-4 font-small-text font-medium text-base text-gray-200 border-[1px] border-solid border-gainsboro-200"
              placeholder="Enter your question or message"
              rows={8}
              cols={27}
            />
          </div>
          <button className="cursor-pointer [border:none] py-4 px-[52px] bg-black1 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg flex flex-row items-center justify-center hover:bg-darkslategray-200">
            <div className="relative text-xl leading-[150%] font-medium font-small-text text-white text-left inline-block min-w-[68px] mq450:text-base mq450:leading-[24px]">
              Submit
            </div>
          </button>
        </div>
      </div>
      <img
        className="w-[428px] relative max-h-full object-contain max-w-full lg:flex-1"
        loading="lazy"
        alt=""
        src={williams20Logo3transparen}
      />
    </div>
  );
};

export default CONTACTUS;
