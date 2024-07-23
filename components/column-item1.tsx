import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Button from "./button";

export type ColumnItem1Type = {
  className?: string;
  carlingwood20172jpeg?: string;
  heading?: string;
  serviceDescription?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propGap?: CSSProperties["gap"];
  propFlex?: CSSProperties["flex"];

  /** Action props */
  onButtonClick?: () => void;
};

const ColumnItem1: NextPage<ColumnItem1Type> = ({
  className = "",
  carlingwood20172jpeg,
  heading,
  serviceDescription,
  propHeight,
  propGap,
  propFlex,
  onButtonClick,
}) => {
  const columnItemStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      gap: propGap,
      flex: propFlex,
    };
  }, [propHeight, propGap, propFlex]);

  return (
    <div
      className={`self-stretch h-[505px] flex flex-col items-start justify-start gap-[1px] text-left text-9xl text-dark-blue font-button ${className}`}
      style={columnItemStyle}
    >
      <img
        className="self-stretch flex-1 rounded-t-mid rounded-b-none max-w-full overflow-hidden max-h-full"
        loading="lazy"
        alt=""
        src={carlingwood20172jpeg}
      />
      <div className="self-stretch rounded-3xl bg-grey-light-2 overflow-hidden flex flex-col items-start justify-start pt-4 pb-8 pr-[60px] pl-8 gap-[20px] mq450:pr-5 mq450:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <h2 className="m-0 self-stretch relative text-inherit font-bold font-inherit mq450:text-3xl">
            {heading}
          </h2>
          <div className="self-stretch relative text-sm leading-[24px] font-form-field text-grey-1">
            {serviceDescription}
          </div>
        </div>
        <Button onButtonClick={onButtonClick} />
      </div>
    </div>
  );
};

export default ColumnItem1;
