import type { NextPage } from "next";
import Header1 from "../components/header1";
import FrameComponent from "../components/frame-component";
import ServiceTwo from "../components/service-two";
import Feeback from "../components/feeback";
import Footer1 from "../components/footer1";
import { useRouter } from "next/router";
import { useCallback } from "react";
import ImageSlider from "../components/slider";
import CONTACTForm from "../components/c-o-n-t-a-c-t-form";

const images = [
  '/HomeCarousel1.png',
  '/HomeCarousel2.png',
  '/HomeCarousel3.png'
];

const Home: NextPage = () => {
  const router = useRouter();
  const onServicesTextClick = useCallback(() => {
    router.push("/services");
  }, [router]);
  return (
    <div className="w-full relative bg-white flex flex-col items-center justify-start leading-[normal] tracking-[normal]">
      <Header1 />
      <div className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover">
      <ImageSlider images={images} />
      </div >
      <section className="self-stretch flex flex-col items-center justify-start py-5 px-0 box-border gap-[48px] max-w-full text-left text-13xl text-black1 font-small-text mq825:gap-[24px]">
        <div className="self-stretch flex flex-row items-center justify-center py-2.5 px-5 text-29xl">
          <h1 className="m-0 relative text-inherit leading-[53px] font-semibold font-inherit mq825:text-19xl mq825:leading-[42px] mq450:text-10xl mq450:leading-[32px]">
            What We Can Offer For You
          </h1>
        </div>
        <FrameComponent />
        <div className="self-stretch flex flex-row items-center justify-between py-0 px-10 box-border max-w-full gap-[20px] mq1400:flex-wrap">
          <div className="h-auto w-[500px] flex flex-col items-start justify-start min-w-[500px] max-w-full mq825:min-w-full mq1400:flex-1">
            <img
              className="self-stretch flex-1 relative rounded-2xl max-w-full overflow-hidden max-h-full object-cover mq1400:self-stretch mq1400:w-auto"
              loading="lazy"
              alt=""
              src="/boilersystem1jpg@2x.png"
            />
          </div>
          <div className="w-[653px] flex flex-col items-start justify-center gap-[24px] min-w-[653px] max-w-full mq825:min-w-full mq1400:flex-1">
            <h1 className="m-0 self-stretch relative text-inherit leading-[110%] font-semibold font-inherit mq825:text-7xl mq825:leading-[28px] mq450:text-lgi mq450:leading-[21px]">
              Heating
            </h1>
            <div className="self-stretch flex flex-row items-center justify-start max-w-full text-base text-gray-200">
              <div className="flex-1 relative leading-[150%] inline-block max-w-full">
                We understand that keeping your home warm during the coldest
                days of winter isn’t just a convenience; it’s a necessity.
                That's why we specialize in hydronic heating, boilers and other
                reliable home comfort solutions. Let us help you find the
                perfect heating solution for your home so you're never left out
                in the cold!
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-2 px-3 bg-black1 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg flex flex-row items-center justify-center hover:bg-darkslategray-200">
              <div
                className="relative text-base leading-[150%] font-medium font-small-text text-white text-left inline-block min-w-[40px]"
                onClick={onServicesTextClick}
              >
                More
              </div>
            </button>
          </div>
        </div>
        <ServiceTwo />
        <div className="self-stretch flex flex-row items-center justify-between py-0 px-10 box-border max-w-full gap-[20px] mq1400:flex-wrap">
          <div className="h-auto w-auto flex flex-col items-start justify-start min-w-[653px] max-w-full mq825:min-w-full mq1400:flex-1">
            <img
              className="self-stretch flex-1 relative rounded-2xl max-w-full overflow-hidden max-h-full object-cover mq1400:self-stretch mq1400:w-auto"
              alt=""
              src="/commercial-4jpg@2x.png"
            />
          </div>
          <div className="w-[653px] flex flex-col items-start justify-center gap-[24px] min-w-[653px] max-w-full mq825:min-w-full mq1400:flex-1">
            <h1 className="m-0 self-stretch relative text-inherit leading-[110%] font-semibold font-inherit mq825:text-7xl mq825:leading-[28px] mq450:text-lgi mq450:leading-[21px]">
              Commerical/Industrial
            </h1>
            <div className="self-stretch flex flex-col items-center justify-center text-base text-gray-200">
              <div className="self-stretch relative leading-[150%]">
                Our commercial and industrial services are just as comprehensive
                as our residential work. We have experience with a broad range
                of commercial properties, from restaurants and hair salons to
                factories and shops. Our plumbing solutions for condo and
                apartment complexes ensure all residents have access to clean
                water and safe pipes. We’re also skilled in working with
                commercial kitchens, grease interceptors, process piping,
                compressed air lines, and high-pressure lines. Whatever your
                plumbing needs for your business or industrial facility,
                Williams Plumbing Solutions has the expertise to get the job
                done right.
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-2 px-3 bg-black1 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg flex flex-row items-center justify-center hover:bg-darkslategray-200">
              <div
                className="relative text-base leading-[150%] font-medium font-small-text text-white text-left inline-block min-w-[40px]"
                onClick={onServicesTextClick}
              >
                More
              </div>
            </button>
          </div>
        </div>
      </section>
      <Feeback />
      <CONTACTForm />
      <Footer1
        williams20Logo3transparen="/williams20logo3transparent20bgroundpng@2x.png"
        buttonsIcon="/buttons--icon@2x.png"
        buttonsIcon1="/buttons--icon-1@2x.png"
        buttonsIcon2="/buttons--icon-2@2x.png"
        buttonsIcon3="/buttons--icon-3@2x.png"
      />
    </div>
  );
};

export default Home;
