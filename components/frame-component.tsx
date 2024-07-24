import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback } from "react";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  const router = useRouter();
  const onServicesTextClick = useCallback(() => {
    router.push("/services");
  }, [router]);
  return (
    <div
      className={`self-stretch flex flex-row items-center justify-between py-0 px-10 box-border max-w-full gap-[20px] text-left text-13xl text-black1 font-small-text mq1400:flex-wrap mq1400:justify-center ${className}`}
    >
      <div className="w-auto flex flex-col items-start justify-center gap-[24px] min-w-[659px] max-w-full mq825:min-w-full mq1400:flex-1">
        <div className="flex flex-row items-center justify-center">
          <h1 className="m-0 relative text-inherit leading-[110%] font-semibold font-inherit mq825:text-7xl mq825:leading-[28px] mq450:text-lgi mq450:leading-[21px]">
            Plumbing
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center py-0 px-2.5 box-border max-w-full text-base text-gray-200">
          <div className="flex-1 relative leading-[150%] inline-block max-w-full">
            <p className="m-0">{`At Williams Plumbing Solutions, we understand that plumbing problems can be extremely frustrating and time consuming. That's why we're here for you; offering comprehensive solutions for all your plumbing needs. `}</p>
            <p className="m-0">
              Whether you have a leaky faucet or require more advanced repairs,
              our experienced professionals are here to make sure any problem is
              fixed with a lasting solution.
            </p>
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-2 px-3 bg-black1 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg flex flex-row items-center justify-center hover:bg-darkslategray-200">
          <a
            className="relative text-base leading-[150%] font-medium font-small-text text-white text-left inline-block [text-decoration:none] min-w-[40px]"
            onClick={onServicesTextClick}
          >
            More
          </a>
        </button>
      </div>
      <div className="h-auto w-auto flex flex-col items-start justify-start min-w-[650px] max-w-full mq825:min-w-full mq1400:flex-1">
        <img
          className="self-stretch flex-1 relative rounded-2xl max-w-full overflow-hidden max-h-full object-cover mq1400:self-stretch mq1400:w-auto"
          loading="lazy"
          alt=""
          src="/carlingwood2017-2jpeg@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent;
