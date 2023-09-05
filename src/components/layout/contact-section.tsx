import { ButtonDark } from ".";
// import { ErrorMsg } from ".";
import bgImg from "../../assets/contact/desktop/bg-pattern-hero-desktop.svg";

export const ContactSection = () => {
  return (
    <div
      className="bg-clrPinkDark max-w-[1111px] md:mx-[39px] lg:mx-auto mx-auto text-white space-y-12 md:space-y-10 lg:space-y-0 px-6 md:px-14 md:rounded-[15px] flex flex-col lg:flex-row"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "max-width: 800px" ? "repeat" : "no-repeat",
      }}
    >
      <div className="text-center md:text-start lg:w-[50%] flex lg:justify-center flex-col">
        <h1 className="text-5xl pt-[72px] mb-6 lg:pt-0">Contact Us</h1>
        <p className="md:max-w-[573px] lg:max-w-[445px]">
          Ready to take it to the next level? Let&apos;s talk about your project
          or idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that&apos;s relatable to your
          users, drop us a line.
        </p>
        {/* <ErrorMsg /> */}
      </div>
      <div className="items-center md:items-end flex flex-col lg:w-[50%]">
        <div className="space-y-6 mb-10 flex flex-col lg:pt-[55px] w-full">
          {/* <p
            data-errormsg="name"
            className="opacity-0 relative z-0 text-red-500 text-xs transform translate-y-8 text-right transition-opacity duration-500"
          >
            Can&apos;t be empty
          </p>
          <label className="hidden" for="name">
            name
          </label> */}
          <input
            type="text"
            placeholder="Name"
            data-formfield="name"
            className="bg-inherit hover:border-b-[3px] hover:border-opacity-100 hover:placeholder:opacity-100 placeholder:text-white border-b-[1px] border-b-white border-solid placeholder:opacity-60 border-opacity-60"
            size={1}
          />
          <input
            type="email"
            placeholder="Email Address"
            className="bg-inherit hover:border-b-[3px] hover:border-opacity-100 hover:placeholder:opacity-100 placeholder:text-white border-b-[1px] border-b-white border-solid placeholder:opacity-60 border-opacity-60"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="bg-inherit hover:border-b-[3px] hover:border-opacity-100 hover:placeholder:opacity-100 placeholder:text-white border-b-[1px] border-b-white border-solid placeholder:opacity-60 border-opacity-60"
          />
          <textarea
            placeholder="Your Message"
            className="bg-inherit hover:border-b-[3px] hover:border-opacity-100 hover:placeholder:opacity-100 placeholder:text-white border-b-[1px] border-b-white border-solid placeholder:opacity-60 border-opacity-60 h-[102px] placeholder:text-"
          ></textarea>
        </div>
        <div className="pb-[72px]">
          <ButtonDark label="submit" />
        </div>
      </div>
    </div>
  );
};
