import type { NextPage } from "next";
import ProductBox from "./product-box";

export type ProjectsType = {
  className?: string;
};

const Projects: NextPage<ProjectsType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-white overflow-hidden flex flex-col items-center justify-start py-5 px-10 box-border max-w-full ${className}`}
    >
      <div className="self-stretch h-[1210.3px] relative max-w-full">
        <div className="absolute top-[0px] left-[0px] w-[1360px] grid flex-row items-center justify-center gap-[20px] max-w-full grid-cols-[repeat(3,_minmax(330px,_1fr))] lg:justify-center lg:grid-cols-[repeat(2,_minmax(330px,_572px))] mq750:grid-cols-[minmax(330px,_1fr)]">
          <ProductBox
            pictureNewbuild201620177j="/picture--newbuild20162017-7jpg@2x.png"
            productBoxPosition="unset"
            productBoxTop="unset"
            productBoxLeft="unset"
            productBoxWidth="unset"
          />
          <ProductBox
            pictureNewbuild201620177j="/picture--newbuild20162017-7jpg-1@2x.png"
            productBoxPosition="unset"
            productBoxTop="unset"
            productBoxLeft="unset"
            productBoxWidth="unset"
          />
          <ProductBox
            pictureNewbuild201620177j="/picture--newbuild20162017-7jpg-2@2x.png"
            productBoxPosition="unset"
            productBoxTop="unset"
            productBoxLeft="unset"
            productBoxWidth="unset"
          />
        </div>
        <div className="absolute top-[308.6px] left-[0px] w-[1360px] grid flex-row items-center justify-center gap-[20px] max-w-full grid-cols-[repeat(3,_minmax(330px,_1fr))] lg:justify-center lg:grid-cols-[repeat(2,_minmax(330px,_572px))] mq750:grid-cols-[minmax(330px,_1fr)]">
          <ProductBox
            pictureNewbuild201620177j="/picture--newbuild20162017-7jpg-3@2x.png"
            productBoxPosition="unset"
            productBoxTop="unset"
            productBoxLeft="unset"
            productBoxWidth="unset"
          />
          <ProductBox
            pictureNewbuild201620177j="/picture--newbuild20162017-7jpg-4@2x.png"
            productBoxPosition="unset"
            productBoxTop="unset"
            productBoxLeft="unset"
            productBoxWidth="unset"
          />
          <ProductBox
            pictureNewbuild201620177j="/picture--newbuild20162017-7jpg-5@2x.png"
            productBoxPosition="unset"
            productBoxTop="unset"
            productBoxLeft="unset"
            productBoxWidth="unset"
          />
        </div>
        <ProductBox
          pictureNewbuild201620177j="/picture--newbuild20162017-7jpg-6@2x.png"
          productBoxPosition="absolute"
          productBoxTop="617.1px"
          productBoxLeft="0px"
          productBoxWidth="440px"
        />
        <ProductBox
          pictureNewbuild201620177j="/picture--newbuild20162017-7jpg-7@2x.png"
          productBoxPosition="absolute"
          productBoxTop="617.1px"
          productBoxLeft="460px"
          productBoxWidth="440px"
        />
        <ProductBox
          pictureNewbuild201620177j="/picture--newbuild20162017-7jpg-8@2x.png"
          productBoxPosition="absolute"
          productBoxTop="617.1px"
          productBoxLeft="920px"
          productBoxWidth="440px"
        />
        <ProductBox
          pictureNewbuild201620177j="/picture--newbuild20162017-7jpg-9@2x.png"
          productBoxPosition="absolute"
          productBoxTop="925.7px"
          productBoxLeft="0px"
          productBoxWidth="440px"
        />
        <ProductBox
          pictureNewbuild201620177j="/picture--newbuild20162017-7jpg-10@2x.png"
          productBoxPosition="absolute"
          productBoxTop="925.7px"
          productBoxLeft="460px"
          productBoxWidth="440px"
        />
        <ProductBox
          pictureNewbuild201620177j="/picture--newbuild20162017-7jpg-11@2x.png"
          productBoxPosition="absolute"
          productBoxTop="925.7px"
          productBoxLeft="920px"
          productBoxWidth="440px"
        />
      </div>
    </section>
  );
};

export default Projects;
