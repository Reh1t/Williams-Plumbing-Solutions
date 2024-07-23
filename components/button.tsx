import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback } from "react";

export type ButtonType = {
  className?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];

  /** Action props */
  onButtonClick?: () => void;
};

const Button: NextPage<ButtonType> = ({
  className = "",
  propAlignSelf,
  propWidth,
  onButtonClick,
}) => {
  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const onButtonClick1 = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='backgroundBorderShadowContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <button
      className={`cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-start justify-start ${className}`}
      onClick={onButtonClick}
      style={buttonStyle}
    >
      <div className="flex-1 rounded-lg bg-green flex flex-row items-center justify-center py-[18px] px-5 whitespace-nowrap">
        <b className="relative text-base inline-block font-button text-dark-yellow text-center min-w-[117px]">
          Services Detail
        </b>
      </div>
    </button>
  );
};

export default Button;
