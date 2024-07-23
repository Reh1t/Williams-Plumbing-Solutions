import type { NextPage } from "next";
import { useCallback } from "react";

export type ContentType = {
  className?: string;
  heading?: string;
  text?: string;
  watchVideo?: string;

  /** Action props */
  onImageContainerClick?: () => void;
};

const Content: NextPage<ContentType> = ({
  className = "",
  heading,
  text,
  watchVideo,
  onImageContainerClick,
}) => {
  const onWatchVideoTextClick = useCallback(() => {
    window.open("https://vimeo.com/63522168");
  }, []);

  return (
    <div
      className={`self-stretch rounded-t-none rounded-b-xl bg-grey-light-2 overflow-hidden flex flex-col items-start justify-start pt-4 px-8 pb-[71px] gap-[20px] text-left text-5xl text-dark-blue font-button ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
        <div className="self-stretch flex flex-col items-start justify-start">
          <h3 className="m-0 self-stretch relative text-inherit font-bold font-inherit mq450:text-lgi">
            {heading}
          </h3>
        </div>
        <div className="self-stretch relative text-sm leading-[24px] font-form-field text-grey-1 whitespace-pre-wrap">
          {text}
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-[10px] text-base text-green">
        <div
          className="relative inline-block min-w-[93px] cursor-pointer"
          onClick={onImageContainerClick}
        >
          {watchVideo}
        </div>
        <img
          className="h-[7.4px] w-8 relative"
          loading="lazy"
          alt=""
          src="/line-21.svg"
        />
      </div>
    </div>
  );
};

export default Content;
