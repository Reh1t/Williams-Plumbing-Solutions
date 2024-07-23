import type { NextPage } from "next";
import { handleFormSubmit } from "./handleFormSubmit";
export type CONTACTFormType = {
  className?: string;
};

const CONTACTForm: NextPage<CONTACTFormType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-whitesmoke-200 overflow-hidden flex flex-row items-center justify-center py-20 px-40 box-border gap-[160px] max-w-full text-left text-29xl text-black1 font-small-text lg:flex-wrap lg:gap-[80px] lg:pl-20 lg:pr-20 lg:box-border mq750:gap-[40px] mq750:pl-10 mq750:pr-10 mq750:box-border mq1050:pt-[52px] mq1050:pb-[52px] mq1050:box-border mq450:gap-[20px] mq450:pt-[34px] mq450:pb-[34px] mq450:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[346px] max-w-full mq750:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] font-semibold font-inherit mq1050:text-19xl mq450:text-10xl">
            Contact us
          </h1>
          <div className="self-stretch relative text-xl leading-[150%] text-gray-200 mq450:text-base mq450:leading-[24px]">{`We look forward to connecting with you soon. `}</div>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="self-stretch flex flex-col items-center justify-start gap-[24px] max-w-full text-base">
            <div className="self-stretch flex flex-row items-center justify-start gap-[32px] mq750:flex-wrap mq750:gap-[16px]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[162px]">
                <div className="self-stretch relative leading-[150%] font-medium">
                  First name
                </div>
                <div className="self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg bg-white flex flex-row items-start justify-start py-2.5 px-[15px] border-[1px] border-solid border-gainsboro-200">
                  <input
                    className="w-full [border:none] [outline:none] font-medium font-small-text text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-gray-200 text-left inline-block min-w-[131px] p-0"
                    placeholder="Jane"
                    id="first_name"
                    type="text"
                    defaultValue={""}
                    required
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[162px]">
                <div className="self-stretch relative leading-[150%] font-medium">
                  Last name
                </div>
                <div className="self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg bg-white flex flex-row items-start justify-start py-2.5 px-[15px] border-[1px] border-solid border-gainsboro-200">
                  <input
                    className="w-full [border:none] [outline:none] font-medium font-small-text text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-gray-200 text-left inline-block min-w-[131px] p-0"
                    placeholder="Smitherton"
                    id="last_name"
                    defaultValue={""}
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
              <div className="self-stretch relative leading-[150%] font-medium">
                Email address
              </div>
              <div className="self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg bg-white box-border flex flex-row items-start justify-start py-2.5 px-[15px] max-w-full border-[1px] border-solid border-gainsboro-200">
                <input
                  className="w-full [border:none] [outline:none] font-medium font-small-text text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-gray-200 text-left inline-block min-w-[250px] whitespace-nowrap max-w-full p-0"
                  placeholder="email@janesfakedomain.net"
                  id="email"
                  defaultValue={""}
                  type="email"
                  required
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch relative leading-[150%] font-medium">
                Your message
              </div>
              <textarea
                className="bg-white h-[162px] w-auto [outline:none] self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg box-border flex flex-row items-start justify-start py-3 px-4 font-small-text font-medium text-base text-gray-200 border-[1px] border-solid border-gainsboro-200"
                placeholder="Enter your question or message"
                id="project_details"
                defaultValue={""}
                required
                rows={8}
                cols={27}
              />
            </div>
            <button className="cursor-pointer [border:none] py-2 px-6 bg-black1 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg flex flex-row items-center justify-center hover:bg-darkslategray-200">
              <div className="relative text-xl leading-[150%] font-medium font-small-text text-white text-left inline-block min-w-[68px] mq450:text-base mq450:leading-[24px]">
                Submit
              </div>
            </button>
          </div>
        </form>
      </div>
      <img
        className="w-[428px] relative max-h-full object-contain max-w-full lg:flex-1"
        alt=""
        src="/WilliamsLogo.png"
      />
    </div>
  );
};

export default CONTACTForm;
