import { ButtonDark } from ".";
export const TalkAbout = () => {
  return (
    <div className="bg-clrPinkDark text-white mx-6 md:mx-[39px] max-w-[1111px] flex flex-col lg:flex-row lg:mx-auto rounded-2xl py-16 md:py-[57px] lg:py-[72px]">
      <div className="flex flex-col text-center">
        <div className="text-[32px] md:text-[40px] font-medium leading-9 md:leading-10 lg:max-w-[280px] lg:text-start">
          Let&apos;s talk about your project
        </div>
        <div className="text-[15px] font-normal leading-[25px]">
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </div>
      </div>
      <ButtonDark />
    </div>
  );
};
