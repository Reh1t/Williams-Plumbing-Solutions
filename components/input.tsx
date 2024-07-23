import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type InputType = {
  className?: string;
  firstName?: string;
  labelPlaceholder?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const Input: NextPage<InputType> = ({
  className = "",
  firstName,
  labelPlaceholder,
  propFlex,
  propMinWidth,
  propAlignSelf,
}) => {
  const inputStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propMinWidth, propAlignSelf]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[162px] text-left text-base text-black1 font-small-text ${className}`}
      style={inputStyle}
    >
      <div className="self-stretch relative leading-[150%] font-medium">
        {firstName}
      </div>
      <div className="self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg bg-white flex flex-row items-start justify-start py-2.5 px-[15px] border-[1px] border-solid border-gainsboro-200">
        <input
          className="w-full [border:none] [outline:none] font-medium font-small-text text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-gray-200 text-left inline-block min-w-[131px] p-0"
          placeholder={labelPlaceholder}
          type="text"
        />
      </div>
    </div>
  );
};

export default Input;
