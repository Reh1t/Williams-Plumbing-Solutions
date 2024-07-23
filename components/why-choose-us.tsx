import type { NextPage } from "next";
import Card from "./card";

export type WhyChooseUsType = {
  className?: string;
};

const WhyChooseUs: NextPage<WhyChooseUsType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-grey-light-2 overflow-hidden flex flex-row items-start justify-center py-0 px-[83px] box-border gap-[58px] max-w-full text-left text-45xl text-dark-blue font-small-text mq1275:flex-wrap mq750:gap-[29px] mq750:pl-[41px] mq750:pr-[41px] mq750:box-border ${className}`}
      data-scroll-to="whyChooseUs"
    >
      <div className="w-[358.8px] flex flex-row items-center justify-start min-w-[358.8px] max-w-full mq1275:flex-1 mq750:min-w-full">
        <img
          className="h-[600px] flex-1 relative max-w-full overflow-hidden mq1275:flex-1"
          alt=""
          src="/vector-11.svg"
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start pt-2.5 px-0 pb-[11px] box-border gap-[16px] min-w-[556px] max-w-full mq750:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] mq1275:self-stretch mq1275:w-auto">
            <h1 className="m-0 self-stretch relative text-inherit font-medium font-inherit mq450:text-19xl mq750:text-32xl">
              Why Choose Us
            </h1>
            <div className="self-stretch relative text-base leading-[26px] text-grey-1">
              When it comes to your plumbing needs, you need a team you can
              trust. At Williams Plumbing Solutions, we're committed to
              providing our clients with the highest quality plumbing solutions
              and exceptional customer service.
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full text-xl">
          <div className="self-stretch flex flex-row items-start justify-start max-w-full [row-gap:20px] mq750:flex-wrap">
            <Card
              consistentAndReliableServ="Consistent and Reliable Service"
              whenYouHaveAPlumbingEmerg="When you have a plumbing emergency, you need help fast. Our team of expert plumbers is available to provide reliable and efficient service when you need it most."
            />
            <Card
              consistentAndReliableServ="Affordable Rates"
              whenYouHaveAPlumbingEmerg="Plumbing repairs can be expensive, but we believe that quality service shouldn't break the bank. That's why we offer competitive and affordable rates."
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start max-w-full [row-gap:20px] mq750:flex-wrap">
            <Card
              consistentAndReliableServ="Quality Work"
              whenYouHaveAPlumbingEmerg="We believe in quality work no matter the job, big or small, you can count on us to provide quality solutions, every time. "
            />
            <Card
              consistentAndReliableServ="Comprehensive Services"
              whenYouHaveAPlumbingEmerg="From leaky faucets to sewer line repairs, we offer a comprehensive range of plumbing services to meet all of your needs. No job is too big or too small for our team of experts."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
