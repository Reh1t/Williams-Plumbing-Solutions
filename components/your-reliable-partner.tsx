import type { NextPage } from "next";
import { handleRequestServiceSubmit } from "./handleRequestServiceSubmit";
import { useCallback } from "react";
import { useRouter } from "next/router";

export type YourReliablePartnerType = {
  className?: string;
};

const YourReliablePartner: NextPage<YourReliablePartnerType> = ({
  className = "",
}) => {
  const router = useRouter();

  const onServicesTextClick = useCallback(() => {
    router.push("/services");
  }, [router]);
  return (
    <section
      className={`self-stretch bg-white overflow-hidden flex flex-row flex-wrap items-center justify-center p-5 box-border max-w-full text-left text-45xl text-dark-blue font-small-text ${className}`}
    >
      <div className="w-[1249px] flex flex-row flex-wrap items-center justify-start py-0 pr-[142px] pl-0 box-border gap-[40px] min-h-[1291px] max-w-full mq1275:pr-[71px] mq1275:box-border mq750:gap-[20px] mq750:pr-[35px] mq750:box-border">
        <div className="w-[1107px] flex flex-row flex-wrap items-center justify-center gap-[160px_158px] max-w-full mq450:gap-[20px] mq1275:gap-[79px] mq750:gap-[39px]">
          <div className="flex-1 flex flex-col items-center justify-start gap-[123px] min-w-[335px] max-w-full mq450:gap-[31px] mq750:gap-[61px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
              <h1 className="m-0 self-stretch relative text-inherit font-medium font-inherit mq450:text-19xl mq750:text-32xl">
                <span>{`Your `}</span>
                <span className="text-green">Reliable</span>
                <span>{` `}</span>
                <span className="text-green">Plumber</span>
                <span>{` Partner `}</span>
              </h1>
              <div className="w-[448px] relative text-lg leading-[28px] text-grey-1 inline-block max-w-full">
                Williams Plumbing Solutions offers reliable plumbing services
                that cater to all your plumbing needs. From simple pipe repairs
                to complex installations and everything in between.
              </div>
            </div>
            <div className="w-[405px] flex flex-col items-start justify-start gap-[10px] max-w-full text-base">
              <div className="flex flex-row items-center justify-start gap-[17px] text-5xl font-button">
                <img
                  className="h-[60px] w-[60px] relative rounded-21xl overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/icon.svg"
                />
                <h3 className="m-0 relative text-inherit font-bold font-inherit mq450:text-lgi">
                  Our Services
                </h3>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[57px] mq450:flex-wrap mq450:gap-[28px]">
                <div className="flex-1 rounded-xl bg-green flex flex-col items-start justify-start py-6 pr-8 pl-6 box-border gap-[16px] min-w-[172px]">
                  <div className="flex flex-row items-center justify-start gap-[16px]">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/arrowrightcircle.svg"
                    />
                    <div className="relative leading-[26px]">
                      Plumbing Repairs
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      alt=""
                      src="/arrowrightcircle.svg"
                    />
                    <div className="relative leading-[26px]">
                      Plumbing Installations
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[16px]">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      alt=""
                      src="/arrowrightcircle.svg"
                    />
                    <div className="relative leading-[26px] inline-block min-w-[127px]">{`Water Treatment `}</div>
                  </div>
                </div>
                <div className="w-[83px] flex flex-col items-start justify-start gap-[1px] text-center text-29xl text-black font-button">
                  <div className="relative font-semibold inline-block min-w-[83px] whitespace-nowrap mq450:text-10xl mq750:text-19xl">
                    +35
                  </div>
                  <div className="self-stretch relative text-lg leading-[28px] font-small-text">
                    Other services
                  </div>
                </div>
              </div>
              <button
                onClick={onServicesTextClick}
                className="cursor-pointer flex flex-row items-center justify-start gap-[10px] text-green bg-transparent"
              >
                <div className="relative inline-block min-w-[88px] text-base">
                  All Services
                </div>
                <img
                  className="h-[7.4px] w-8 relative"
                  loading="lazy"
                  alt=""
                  src="/line-2.svg"
                />
              </button>
            </div>
          </div>
          <img
            className="w-[447px] relative max-h-full max-w-full"
            loading="lazy"
            alt=""
            src="/vector1.svg"
          />
        </div>
        <div className="w-[1107px] flex flex-row flex-wrap items-center justify-center py-0 px-[149px] box-border gap-[160px] max-w-full mq450:gap-[20px] mq1275:gap-[80px] mq1275:pl-[74px] mq1275:pr-[74px] mq1275:box-border mq750:gap-[40px] mq750:pl-[37px] mq750:pr-[37px] mq750:box-border">
          <form
            onSubmit={handleRequestServiceSubmit}
            className="m-0 flex-1 rounded-xl bg-grey-light-1 overflow-hidden flex flex-col items-start justify-start p-9 box-border gap-[24px] min-w-[170px] max-w-full mq450:pt-[23px] mq450:pb-[23px] mq450:box-border"
          >
            <h3 className="m-0 w-[295px] relative text-5xl font-bold font-button text-dark-blue text-left inline-block mq450:text-lgi">
              Request a Service
            </h3>
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
              <input
                className="w-full [border:none] [outline:none] bg-white self-stretch h-12 rounded-lg flex flex-row items-center justify-start py-4 px-6 box-border font-form-field text-xs text-grey-1 min-w-[209px]"
                placeholder="Your name"
                id="name"
                type="text"
                required
              />
              <input
                className="w-full [border:none] [outline:none] bg-white self-stretch h-12 rounded-lg flex flex-row items-center justify-start py-4 px-6 box-border font-form-field text-xs text-black min-w-[209px]"
                placeholder="Email"
                id="email"
                type="email"
                required
              />
              <div className="w-full bg-white [border:none] [outline:none] rounded-lg flex items-center">
                <span className="font-footer-bold-text text-xs text-left flex items-center ml-3 text-grey-1">
                  +1
                </span>
                <input
                  className="w-full [border:none] [outline:none] bg-white self-stretch h-12 rounded-lg flex flex-row items-center justify-start py-4 px-[23px] box-border font-form-field text-xs text-black min-w-[209px]"
                  placeholder="Phone number"
                  id="phone"
                  type="tel"
                  pattern="[0-9]*"
                  maxLength={10}
                  required
                />
              </div>
              <div className="self-stretch rounded-lg bg-white flex flex-row justify-start whitespace-nowrap">
                <select
                  className="w-full [border:none] [outline:none] bg-white h-12 rounded-lg flex flex-row items-center py-4 px-6 box-border font-form-field text-xs text-black min-w-[209px]"
                  defaultValue=""
                  id="service"
                  required
                >
                  <option value="" selected disabled>
                    Choose a Service
                  </option>
                  <option value="Plumbing">Plumbing</option>
                  <option value="Heating">Heating</option>
                  <option value="Water Treatment">Water Treatment</option>
                  <option value="Commerical/Industrial">
                    Commerical/Industrial
                  </option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="cursor-pointer [border:none] py-[18px] px-[50px] bg-green rounded-lg flex flex-row items-center justify-center whitespace-nowrap hover:bg-deepskyblue"
            >
              <div className="w-[130px] relative text-base font-button text-dark-yellow text-center inline-block">
                Request Services
              </div>
            </button>
          </form>
          <img
            className="h-[274px] w-[229px] relative rounded-8xl object-cover"
            loading="lazy"
            alt=""
            src="/pexels-photo-by-la-miko@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default YourReliablePartner;
