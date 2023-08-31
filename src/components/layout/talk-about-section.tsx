import { ButtonDark } from ".";
import backgroImage from "../../assets/app-design/desktop/bg-pattern-intro-app.svg";
export const TalkAbout = () => {
  return (
    <div
      className="bg-clrPinkDark translate-y-[50%] md:translate-y-[25%] text-white mx-6 md:mx-[39px] max-w-[1111px] flex flex-col lg:flex-row lg:mx-auto rounded-2xl py-16 md:py-[57px] lg:py-[72px]"
      style={{
        backgroundImage: `url(${backgroImage})`,
        backgroundRepeat: "repeat",
        backgroundPositionY: "-50%",
      }}
    >
      <div className="flex flex-col text-center mx-6 md:mx-[95px]">
        <div className="text-[32px] md:text-[40px] font-medium leading-9 md:leading-10 lg:max-w-[280px] lg:text-start mb-2">
          Let&apos;s talk about your project
        </div>
        <div className="text-[15px] font-normal leading-[25px] mt-[6px] max-w-md mx-auto my-8 md:text-center lg:text-start tracking-wider">
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </div>
      </div>
      <div className="mt-8 mx-auto md:mt-0 md:justify-center flex items-center">
        <ButtonDark label="Get in touch" />
      </div>
    </div>
  );
};
