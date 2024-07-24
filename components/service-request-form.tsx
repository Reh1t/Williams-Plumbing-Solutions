import { handleRequestServiceSubmit } from "../components/handleRequestServiceSubmit";

const ServiceRequestForm = () => {

    return (
        <form
            onSubmit={handleRequestServiceSubmit}
            className="m-0 flex-1 rounded-xl bg-grey-light-1 overflow-hidden flex flex-col items-center justify-center p-9 box-border gap-[24px] min-w-[170px] max-w-full mq450:pt-[23px] mq450:pb-[23px] mq450:box-border"
          >
            <h3 className="m-0 w-[295px] text-center relative text-5xl font-bold font-button text-dark-blue inline-block mq450:text-lgi">
              Request a Service
            </h3>
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
              <label
                className="m-0 w-[295px] text-left relative text-sm text-grey-1 inline-block mq450:text-lgi"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full [border:none] [outline:none] bg-white self-stretch h-12 rounded-lg flex flex-row items-center justify-start py-4 px-6 box-border font-form-field text-xs text-grey-1 min-w-[209px]"
                placeholder="Your name"
                id="name"
                type="text"
                required
              />
              <label
                className="m-0 w-[295px] text-left relative text-sm text-grey-1 inline-block mq450:text-lgi"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full [border:none] [outline:none] bg-white self-stretch h-12 rounded-lg flex flex-row items-center justify-start py-4 px-6 box-border font-form-field text-xs text-black min-w-[209px]"
                placeholder="Email"
                id="email"
                type="email"
                required
              />
              <label
                className="m-0 w-[295px] text-left relative text-sm text-grey-1 inline-block mq450:text-lgi"
                htmlFor="phone"
              >
                Phone
              </label>
              <div className="w-full bg-white [border:none] [outline:none] rounded-lg flex items-center">
                <span className="font-footer-bold-text text-xs text-left flex items-center ml-3 text-grey-1">
                  +1
                </span>
                <input
                  className="w-full [border:none] [outline:none] bg-white self-stretch h-12 rounded-lg flex flex-row items-center justify-start py-4 px-[23px] box-border font-form-field text-xs text-black min-w-[209px]"
                  placeholder="Phone number"
                  id="phone"
                  type="tel"
                  pattern="[0-9]*"
                  maxLength={10}
                  required
                />
              </div>
              
            </div>
            <button
              type="submit"
              className="cursor-pointer w-full [border:none] py-[18px] px-[50px] bg-green rounded-lg flex flex-row items-center justify-center whitespace-nowrap hover:bg-deepskyblue"
            >
              <div className="relative text-base font-button text-dark-yellow text-center inline-block">
                Request Services
              </div>
            </button>
          </form>
    )
}

export default ServiceRequestForm;