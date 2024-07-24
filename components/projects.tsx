import type { NextPage } from "next";
import PhotoHolderBoxIcon from "../components/photo-holder-box-icon";

const ProjectGallery: NextPage = () => {
  return (
    <div className="w-full relative bg-white flex flex-col items-start justify-start gap-[40px] leading-[normal] tracking-[normal] text-left text-45xl text-dark-blue font-small-text mq750:gap-[20px]">
      <main className="self-stretch flex flex-row flex-wrap items-start justify-center py-0 px-5 box-border gap-[40px_38px] max-w-full mq675:gap-[19px]">
        <PhotoHolderBoxIcon photoHolderBox="/photoholderbox@2x.png" />
        <PhotoHolderBoxIcon photoHolderBox="/photoholderbox-1@2x.png" />
        <PhotoHolderBoxIcon photoHolderBox="/photoholderbox-2@2x.png" />
        <PhotoHolderBoxIcon photoHolderBox="/photoholderbox-3@2x.png" />
        <PhotoHolderBoxIcon photoHolderBox="/photoholderbox-4@2x.png" />
        <PhotoHolderBoxIcon photoHolderBox="/photoholderbox-5@2x.png" />
        <PhotoHolderBoxIcon photoHolderBox="/photoholderbox-6@2x.png" />
        <PhotoHolderBoxIcon photoHolderBox="/photoholderbox-7@2x.png" />
        <PhotoHolderBoxIcon photoHolderBox="/photoholderbox-8@2x.png" />
        <PhotoHolderBoxIcon photoHolderBox="/photoholderbox-9@2x.png" />
        <PhotoHolderBoxIcon photoHolderBox="/photoholderbox-10@2x.png" />
        <PhotoHolderBoxIcon photoHolderBox="/photoholderbox-11@2x.png" />
        <PhotoHolderBoxIcon photoHolderBox="/photoholderbox-12@2x.png" />
        <PhotoHolderBoxIcon photoHolderBox="/photoholderbox-13@2x.png" />
        <PhotoHolderBoxIcon photoHolderBox="/photoholderbox-14@2x.png" />
        <PhotoHolderBoxIcon photoHolderBox="/photoholderbox-15@2x.png" />
        <PhotoHolderBoxIcon photoHolderBox="/photoholderbox-16@2x.png" />
        <PhotoHolderBoxIcon photoHolderBox="/photoholderbox-17@2x.png" />
        <PhotoHolderBoxIcon photoHolderBox="/photoholderbox-18@2x.png" />
        <PhotoHolderBoxIcon photoHolderBox="/photoholderbox-19@2x.png" />
        <PhotoHolderBoxIcon photoHolderBox="/photoholderbox-20@2x.png" />
        <PhotoHolderBoxIcon photoHolderBox="/photoholderbox-21@2x.png" />
        <PhotoHolderBoxIcon photoHolderBox="/photoholderbox-22@2x.png" />
        <PhotoHolderBoxIcon photoHolderBox="/photoholderbox-23@2x.png" />
        <PhotoHolderBoxIcon photoHolderBox="/photoholderbox-24@2x.png" />
      </main>
    </div>
  );
};

export default ProjectGallery;
