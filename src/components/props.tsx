import BackgroundImg from "../assets/app-design/desktop/bg-pattern-intro-app.svg";
import { ButtonLight } from "./button-on-light";

interface CompanyDesctiptionProps {
  logo: string;
  header: string;
  label: string;
}
export const CompanyDesctiption = ({
  logo,
  header,
  label,
}: CompanyDesctiptionProps) => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-col mx-6 md:mx-[39px] max-w-[1111px] lg:mx-auto">
      <img
        className="w-[202px] h-[202px] mx-auto md:mr-12 lg:mx-auto"
        src={logo}
        alt=""
      />
      <div className="flex flex-col text-clrBlackLight text-center md:text-start lg:text-center md:my-auto mt-12">
        <h4 className="text-[20px] tracking-[5px] leading-[20px] font-medium">
          {header}
        </h4>
        <p className="leading-[26px] font-normal text-base mt-8 max-w-lg mx-auto md:max-w-none">
          {label}
        </p>
      </div>
    </div>
  );
};
interface DesignHeaderProps {
  label: string;
  paragraph: string;
}
export const DesignHeader = ({ label, paragraph }: DesignHeaderProps) => {
  return (
    <div
      className="text-white flex flex-col bg-clrPinkDark text-center rounded-2xl py-[105px] md:py-16 max-w-[1111px] mx-auto space-y-6 px-6"
      style={{
        backgroundImage: `url(${BackgroundImg})`,
        backgroundPositionX: "-120%",
        backgroundPositionY: "40%",
      }}
    >
      <div className="text-[32px] font-medium leading-9">{label}</div>
      <div className="max-w-md mx-auto">{paragraph}</div>
    </div>
  );
};
export const DesignMainContent = ({
  logo,
  header,
  label,
}: CompanyDesctiptionProps) => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-col cursor-pointer rounded-2xl">
      <div className="max-w-xs rounded-2xl">
        <img src={logo} alt="" />
      </div>
      <div className="bg-clrWhiteDark text-center hover:bg-clrPinkDark group max-w-xs flex flex-col justify-center rounded-b-[14px] md:rounded-r-[15px]">
        <h1 className="text-clrPinkDark group-hover:text-white font-medium text-xl leading-[26px] tracking-[5px] mb-4 mt-5">
          {header}
        </h1>
        <p className="group-hover:text-white text-clrBlackDark font-normal text-base leading-[26px] pb-8">
          {label}
        </p>
      </div>
    </div>
  );
};
interface LocationsProps {
  logo: string;
  header: string;
}
export const Locations = ({ logo, header }: LocationsProps) => {
  return (
    <div className="mx-auto uppercase mt-[120px] lg:mt-12">
      <img src={logo} alt="" />
      <div className="text-center text-xl font-medium leading-6 tracking-[5px] mt-12 mb-8">
        {header}
      </div>
      <div className="flex justify-center">
        <ButtonLight label="See Locations" />
      </div>
    </div>
  );
};

interface AboutMainContentProps {
  img_mob: string;
  img_des: string;
  header: string;
  bg_col: string;
  display: string;
  paragraph: string;
  headerCol: string;
  paragraphCol: string;
  secParagraph: string;
}

export const AboutMainContent = ({
  img_mob,
  img_des,
  header,
  display,
  bg_col,
  paragraph,
  headerCol,
  paragraphCol,
  secParagraph,
}: AboutMainContentProps) => {
  return (
    <div
      className={`flex flex-col mx-10 rounded-[15px] max-w-[1111px] ${display}`}
      style={{ borderRadius: "15px" }}
    >
      <div className="lg:w-[34%]">
        <img className="block lg:hidden" src={img_mob} alt="" />
        <img className="hidden lg:block" src={img_des} alt="" />
      </div>
      <div
        className={`${bg_col} text-center space-y-6 lg:w-[66%] max-w-[689px] flex justify-center flex-col`}
      >
        <h3
          className={`mt-[68px] ${headerCol} text-[40px] leading-[48px] font-medium`}
        >
          {header}
        </h3>
        <p
          className={`font-normal leading-[26px] text-base ${paragraphCol} px-[59px]`}
        >
          {paragraph}
        </p>
        <p
          className={`font-normal leading-[26px] text-base ${paragraphCol} px-[59px]`}
        >
          {secParagraph}
        </p>
      </div>
    </div>
  );
};
interface HomeDesignsProps {
  bgMobile: string;
  bgTab: string;
  bgDesk: string;
  header: String;
}

export const HomeDesign = ({
  bgMobile,
  bgTab,
  bgDesk,
  header,
}: HomeDesignsProps) => {
  return (
    <div className="bg-clrPinkDark relative max-w-fit max-h-fit rounded-2xl mx-auto">
      <img
        className="hover:opacity-25 rounded-2xl md:hidden"
        src={bgMobile}
        alt=""
      />
      <img
        className="hover:opacity-25 rounded-2xl hidden md:block lg:hidden"
        src={bgTab}
        alt=""
      />
      <img
        className="hover:opacity-25 rounded-2xl hidden lg:block"
        src={bgDesk}
        alt=""
      />
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h1 className="text-[40px] font-medium leading-10 tracking-[2px] truncate">
          {header}
        </h1>
        <div className="flex flex-row mt-3 md:mt-6 ">
          <p className="text-[15px] font-medium leading-[5px] uppercase">
            VIEW PROJECTS
          </p>
          <div className="flex justify-start ml-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="10"
              viewBox="0 0 5 10"
              fill="none"
            >
              <path
                d="M1 1.13477L5 5.13477L1 9.13477"
                stroke="#E7816B"
                stroke-width="2"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
