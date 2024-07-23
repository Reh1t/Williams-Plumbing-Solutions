import type { NextPage } from "next";

export type CardType = {
  className?: string;
  consistentAndReliableServ?: string;
  whenYouHaveAPlumbingEmerg?: string;
};

const Card: NextPage<CardType> = ({
  className = "",
  consistentAndReliableServ,
  whenYouHaveAPlumbingEmerg,
}) => {
  return (
    <div
      className={`flex-1 rounded-xl overflow-hidden flex flex-col items-start justify-start gap-[20px] min-w-[278px] max-w-full text-left text-xl text-dark-blue font-small-text ${className}`}
    >
      <div className="rounded-lg bg-green overflow-hidden flex flex-row items-center justify-center p-6">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/tool.svg"
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[14px] max-w-full">
        <b className="self-stretch relative mq450:text-base">
          {consistentAndReliableServ}
        </b>
        <div className="self-stretch flex flex-row items-center justify-center py-0 px-2.5 box-border max-w-full text-sm text-grey-1">
          <div className="flex-1 relative leading-[24px] inline-block max-w-full">
            {whenYouHaveAPlumbingEmerg}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
