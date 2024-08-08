import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

export type Footer1Type = {
  className?: string;
  williams20Logo3transparen?: string;
  buttonsIcon?: string;
  buttonsIcon1?: string;
  buttonsIcon2?: string;
  buttonsIcon3?: string;
};

const Footer1: NextPage<Footer1Type> = ({
  className = "",
  williams20Logo3transparen,
  buttonsIcon,
  buttonsIcon1,
  buttonsIcon2,
  buttonsIcon3,
}) => {
  const router = useRouter();

  const onWilliams20Logo3transparentImageClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onSocialIconsContainerClick = useCallback(() => {
    window.open("https://ca.linkedin.com/in/williams-plumbing-solution");
  }, []);

  const onButtonsIconClick = useCallback(() => {
    window.open("https://www.facebook.com/williamsplumbingsolution/");
  }, []);

  const onButtonsIconClick1 = useCallback(() => {
    window.open("https://www.instagram.com/williamsplumbingsolution/");
  }, []);

  const onButtonsIconClick2 = useCallback(() => {
    window.open("https://www.youtube.com/watch?v=HdwCDhqtFuQ");
  }, []);

  const onServiesTextClick = useCallback(() => {
    router.push("/services");
  }, [router]);

  const onUVMoreTextClick = useCallback(() => {
    router.push("/more-u-v-water-purification");
  }, [router]);

  const onAboutUsTextClick = useCallback(() => {
    router.push("/about-us");
  }, [router]);

  const onContactUsTextClick = useCallback(() => {
    router.push("/contact-us1");
  }, [router]);
  
  const onWilliamsButtonClick = useCallback(() => {
    router.push("https://williams-septic.vercel.app/");
  }, [router]);

  return (
    <footer
      className={`self-stretch bg-whitesmoke-200 overflow-hidden flex flex-row flex-wrap items-start justify-center mq675:justify-start py-[38px] px-[26px] box-border gap-[12px] max-w-full text-left text-base text-black1 font-small-text ${className}`}
    >
      <div className="flex flex-col items-center justify-center py-0 px-2.5 box-border gap-[8px] max-w-full text-5xl">
        <div className="flex flex-row items-start justify-end py-0 pr-2.5 pl-[31px] shrink-0">
          <h3 className="m-0 relative text-inherit leading-[150%] font-bold font-inherit mq450:text-lgi mq450:leading-[29px]">
            Williams Plumbing Solutions
          </h3>
        </div>
        <img
          className="w-[78px] h-[78px] relative object-contain cursor-pointer"
          alt=""
          src={williams20Logo3transparen}
          onClick={onWilliams20Logo3transparentImageClick}
        />
        <div
          className="flex flex-row items-start justify-start gap-[8px] cursor-pointer"
          onClick={onSocialIconsContainerClick}
        >
          <img
            className="h-10 w-10 relative rounded object-cover min-h-[40px] cursor-pointer"
            loading="lazy"
            alt=""
            src={buttonsIcon}
            onClick={onButtonsIconClick}
          />
          <img
            className="h-10 w-10 relative rounded object-cover min-h-[40px]"
            alt=""
            src={buttonsIcon1}
          />
          <img
            className="h-10 w-10 relative rounded object-cover min-h-[40px] cursor-pointer"
            alt=""
            src={buttonsIcon2}
            onClick={onButtonsIconClick1}
          />
          <img
            className="h-10 w-10 relative rounded object-cover min-h-[40px] cursor-pointer"
            alt=""
            src={buttonsIcon3}
            onClick={onButtonsIconClick2}
          />
        </div>
      </div>
      <div className="w-[398px] flex flex-row items-start justify-center gap-[24px] max-w-full mq450:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start gap-[14px] min-w-[122px] cursor-pointer" onClick={onServiesTextClick}>
          <div className="flex flex-row items-center justify-center">
            <b className="relative leading-[150%] inline-block min-w-[46px]">
              Home
            </b>
          </div>
          <div className="self-stretch flex flex-col items-end justify-center gap-[14px] text-darkslategray-100">
            <div className="self-stretch relative leading-[150%] text-black1">
              Plumbing
            </div>
            <div className="self-stretch relative leading-[150%] font-medium">
              Heating
            </div>
            <div className="self-stretch relative leading-[150%] font-medium">
              Commercial & Industrial
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-center gap-[14px] min-w-[122px] cursor-pointer" onClick={onUVMoreTextClick}>

          <div className="self-stretch flex flex-col items-start justify-start gap-[14px] text-darkslategray-100">
            <div className="self-stretch relative leading-[150%] font-medium">
              Water Treatment
            </div>
            <div className="self-stretch relative leading-[150%] font-medium">
              Water Softeners
            </div>
            <div className="self-stretch relative leading-[150%] font-medium">
              UV Water Treatment
            </div>
            <div className="self-stretch relative leading-[150%] font-medium">
              Filter Systems
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start mq750:mt-7 gap-[14px]">
        <div
          className="relative leading-[150%] font-medium text-darkslategray-100 inline-block min-w-[86px] cursor-pointer"
          onClick={onAboutUsTextClick}
        >
          About Us
        </div>
        <div
          className="relative leading-[150%] font-medium text-darkslategray-100 inline-block min-w-[86px] cursor-pointer"
          onClick={onContactUsTextClick}
        >
          Contact Us
        </div>
        <div
          className="relative leading-[150%] font-medium text-darkslategray-100 inline-block min-w-[86px] cursor-pointer"
          onClick={onWilliamsButtonClick}
        >
          Septic
        </div>
      </div>
      <div className="flex-1 flex flex-col items-end justify-start py-0 px-3 box-border gap-[20px] min-w-[307px] max-w-full text-base-8 text-darkslategray-300">
        <div className="self-stretch flex flex-row items-center justify-start py-0 pr-10 pl-0 box-border gap-[34px] max-w-full mq450:flex-wrap mq450:gap-8 mq825:mt-7">
          <div className="w-6 overflow-hidden shrink-0 flex flex-col items-start justify-start py-px pr-[3px] pl-px box-border">
            <img
              className="w-[19.5px] h-[18.5px] relative"
              alt=""
              src="/vector-1.svg"
            />
          </div>
          <div className="flex-1 relative leading-[26px] font-semibold whitespace-pre-wrap inline-block min-w-[149px] max-w-full">
            Call Us: 705-492-8910
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[38px] pl-0 box-border gap-[22px] max-w-full mq450:flex-wrap">
          <div className="flex flex-col items-start justify-start p-0.5">
            <img
              className="w-[33.3px] h-[21.9px] relative"
              alt=""
              src="/vector-2.svg"
            />
          </div>
          <div className="flex-1 flex flex-row items-center justify-start gap-[8px] min-w-[227px] max-w-full mq450:flex-wrap">
            <div className="relative leading-[25.6px] font-semibold inline-block min-w-[70.4px]">
              Email Us:
            </div>
            <div className="relative leading-[25.6px] font-semibold whitespace-nowrap">
              info@williamsplumbingsolutions.ca
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
