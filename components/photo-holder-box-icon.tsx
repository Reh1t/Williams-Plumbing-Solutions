import type { NextPage } from "next";

export type PhotoHolderBoxIconType = {
  className?: string;
  photoHolderBox?: string;
};

const PhotoHolderBoxIcon: NextPage<PhotoHolderBoxIconType> = ({
  className = "",
  photoHolderBox,
}) => {
  return (
    <img
      className={`w-[400px] relative rounded-xl max-h-full overflow-hidden shrink-0 object-cover max-w-full ${className}`}
      loading="lazy"
      alt=""
      src={photoHolderBox}
    />
  );
};

export default PhotoHolderBoxIcon;
