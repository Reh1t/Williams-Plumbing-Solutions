import type { NextPage } from "next";
import ImageSlider from "../components/review-slider";


export type FeebackType = {
  className?: string;
};

const Feeback: NextPage<FeebackType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-whitesmoke-200 box-border flex flex-row items-center justify-center py-0 px-[79px] gap-[40px] max-w-full text-center text-29xl text-darkslategray-300 font-small-text border-[1px] border-solid border-gray-500 lg:flex-wrap mq825:gap-[20px] mq825:pl-[39px] mq825:pr-[39px] mq825:box-border ${className}`}
    >
      <div className="w-s flex flex-col items-center justify-start py-5 px-0 box-border gap-[115px] min-w-[544px] max-w-full lg:flex-1 mq825:gap-[57px] mq825:min-w-full mq450:gap-[29px]">
        <h1 className="m-0 self-stretch relative text-inherit leading-[64px] font-semibold font-inherit mq825:text-19xl mq825:leading-[51px] mq450:text-10xl mq450:leading-[38px]">
          Testimonials
        </h1>
        <div className="w-auto min-w-[471px] rounded-xl bg-white flex flex-col items-start justify-start p-2.5 box-border max-w-full text-left text-base">
          <div className="self-stretch flex flex-col items-start justify-start gap-[48px] mq450:gap-[24px]">
            <ImageSlider />
          </div>
        </div>
      </div>
      <img
        className="flex-1 relative max-w-full overflow-hidden object-cover w-auto h-auto"
        loading="lazy"
        alt=""
        src="/pexels-photo-by-griffin-wooldridge@2x.png"
      />
    </section>
  );
};

export default Feeback;
