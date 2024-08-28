import type { NextPage } from "next";
import { handleFormSubmit } from "./handleFormSubmit";
import { useEffect } from "react";
export type CONTACTFormType = {
  className?: string;
};

const CONTACTForm: NextPage<CONTACTFormType> = ({ className = "" }) => {

  useEffect(() => {
    // Load the script
    const script = document.createElement("script");
    script.src =
      "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";
    script.setAttribute("clienthub_id", "c6ab68fa-74c2-4d46-9066-ff2210b88264");
    script.setAttribute(
      "form_url",
      "https://clienthub.getjobber.com/client_hubs/c6ab68fa-74c2-4d46-9066-ff2210b88264/public/work_request/embedded_work_request_form"
    );
    document.body.appendChild(script);

    script.onload = () => {
      // Apply Tailwind CSS classes to the embedded form elements once the script is loaded
      const form = document.getElementById(
        "c6ab68fa-74c2-4d46-9066-ff2210b88264"
      );

      if (form) {
        form.classList.add(
          "bg-white",
          "p-6",
          "rounded-lg",
          "shadow-md",
          "max-w-lg",
          "mx-auto",
          "my-8"
        );

        const inputs = form.querySelectorAll("input, textarea, select");
        inputs.forEach((input) => {
          input.classList.add(
            "w-full",
            "px-4",
            "py-2",
            "mb-4",
            "border",
            "border-gray-300",
            "rounded",
            "focus:outline-none",
            "focus:ring-2",
            "focus:ring-blue-500"
          );
        });

        const labels = form.querySelectorAll("label");
        labels.forEach((label) => {
          label.classList.add(
            "block",
            "text-sm",
            "font-medium",
            "text-gray-700",
            "mb-2"
          );
        });

        const buttons = form.querySelectorAll("button");
        buttons.forEach((button) => {
          button.classList.add(
            "bg-blue-500",
            "text-white",
            "px-4",
            "py-2",
            "rounded",
            "hover:bg-blue-600",
            "focus:outline-none",
            "focus:ring-2",
            "focus:ring-blue-500"
          );
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className={`self-stretch bg-whitesmoke-200 overflow-hidden flex flex-row items-start justify-center py-20 px-40 box-border gap-[160px] max-w-full text-left text-29xl text-black1 font-small-text lg:flex-wrap lg:gap-[80px] lg:pl-20 lg:pr-20 lg:box-border mq750:gap-[40px] mq750:pl-10 mq750:pr-10 mq750:box-border mq1050:pt-[52px] mq1050:pb-[52px] mq1050:box-border mq450:gap-[20px] mq450:pt-[34px] mq450:pb-[34px] mq450:box-border ${className}`}
    >
        <div id="c6ab68fa-74c2-4d46-9066-ff2210b88264"></div>
      
      <img
        className="w-[428px] relative max-h-full object-contain max-w-full lg:flex-1"
        alt=""
        src="/WilliamsLogo.png"
      />
    </div>
  );
};

export default CONTACTForm;
