import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type ProductBoxType = {
  className?: string;
  pictureNewbuild201620177j?: string;

  /** Style props */
  productBoxPosition?: CSSProperties["position"];
  productBoxTop?: CSSProperties["top"];
  productBoxLeft?: CSSProperties["left"];
  productBoxWidth?: CSSProperties["width"];
};

const ProductBox: NextPage<ProductBoxType> = ({
  className = "",
  pictureNewbuild201620177j,
  productBoxPosition,
  productBoxTop,
  productBoxLeft,
  productBoxWidth,
}) => {
  const productBoxStyle: CSSProperties = useMemo(() => {
    return {
      position: productBoxPosition,
      top: productBoxTop,
      left: productBoxLeft,
      width: productBoxWidth,
    };
  }, [productBoxPosition, productBoxTop, productBoxLeft, productBoxWidth]);

  return (
    <div
      className={`max-w-full flex flex-row items-center justify-start leading-[normal] tracking-[normal] ${className}`}
      style={productBoxStyle}
    >
      <img
        className="h-[284.6px] flex-1 relative max-w-full overflow-hidden object-cover"
        alt=""
        src={pictureNewbuild201620177j}
      />
    </div>
  );
};

export default ProductBox;
