import type { NextPage } from "next";
import { handleFormSubmit } from "./handleFormSubmit";
import { useCallback, useEffect } from "react";
import router from "next/router";
export type CONTACTFormType = {
  className?: string;
};

const CONTACTForm: NextPage<CONTACTFormType> = ({ className = "" }) => {
  const onContactButtonClick = useCallback(() => {
    router.push(
      "https://clienthub.getjobber.com/client_hubs/c6ab68fa-74c2-4d46-9066-ff2210b88264/public/work_request/new?source=social_media"
    );
  }, [router]);

  return (
    <div
      className={`self-stretch bg-whitesmoke-200 overflow-hidden flex flex-row items-center justify-center py-20 px-40 box-border gap-[160px] max-w-full text-left text-29xl text-black1 font-small-text lg:flex-wrap lg:gap-[80px] lg:pl-20 lg:pr-20 lg:box-border mq750:gap-[40px] mq750:pl-10 mq750:pr-10 mq750:box-border mq1050:pt-[52px] mq1050:pb-[52px] mq1050:box-border mq450:gap-[20px] mq450:pt-[34px] mq450:pb-[34px] mq450:box-border ${className}`}
    >
      <button
        className="cursor-pointer py-10 px-10 ml-10 mb-10 bg-green shadow-[0px_8px_16px_rgba(55,_99,_244,_0.15)] rounded-13xl flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-mediumslateblue hover:bg-deepskyblue hover:box-border hover:border-[1px] hover:border-solid hover:border-royalblue"
        onClick={onContactButtonClick}
      >
        <a className="relative text-8xl leading-[25.6px] font-bold font-small-text text-white text-center">
          Contact Us Here
        </a>
      </button>

      <img
        className="w-[428px] relative max-h-full object-contain max-w-full lg:flex-1"
        alt=""
        src="/WilliamsLogo.png"
      />
    </div>
  );
};

export default CONTACTForm;
