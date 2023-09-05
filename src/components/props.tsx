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
    <div className="flex flex-col md:flex-row lg:flex-col cursor-pointer rounded-[15px] overflow-hidden group">
      <div className="max-w-xs group-hover:bg-clrPinkDark">
        <img src={logo} alt="" />
      </div>
      <div className="bg-clrWhiteDark text-center group-hover:bg-clrPinkDark group max-w-xs flex flex-col justify-center">
        <h1 className="text-clrPinkDark group-hover:text-white font-medium text-xl leading-[26px] tracking-[5px] mb-4 mt-5">
          {header}
        </h1>
        <p className="group-hover:text-white text-clrBlackDark font-normal text-base leading-[26px] pb-8 min-h-[84px]">
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
import AboutBgImg from "../assets/about/bg-pattern-hero-about-desktop.svg";
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
      className={`flex flex-col md:mx-10 max-w-[1111px] ${display} md:rounded-[15px] overflow-hidden`}
    >
      <picture className="lg:w-[38%]">
        <source srcSet={img_des} media="(min-width: 1024px)" />
        <img src={img_mob} alt="" />
      </picture>
      <div
        style={{
          backgroundImage: `url(${AboutBgImg})`,
          backgroundRepeat: "space",
          backgroundSize: "350px 350px",
        }}
        className={`${bg_col} text-center px-[59px] lg:text-start space-y-6 lg:w-[62%] max-w-[689px] flex justify-center flex-col pb-16 `}
      >
        <h3
          className={`mt-[68px] ${headerCol} text-[40px] leading-[48px] font-medium`}
        >
          {header}
        </h3>
        <p className={`font-normal leading-[26px] text-base ${paragraphCol}`}>
          {paragraph}
        </p>
        <p className={`font-normal leading-[26px] text-base ${paragraphCol}`}>
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
        <h1 className="text-[40px] font-medium leading-10 tracking-[2px]">
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
interface LocationsMapProps {
  header: string;
  label1: string;
  label2: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  paragraph4: string;
}

export const LocationsMap = ({
  header,
  label1,
  label2,
  paragraph1,
  paragraph2,
  paragraph3,
  paragraph4,
}: LocationsMapProps) => {
  return (
    <div
      className="flex w-[100%] md:w-auto whitespace-nowrap md:text-start flex-col md:rounded-[15px] text-center justify-center font-normal space-y-6 bg-clrWhiteDark md:max-w-[689px] lg:max-w-none mx-auto md:px-[23%] lg:px-[15%] py-20 md:py-24 lg:py-0"
      style={{
        backgroundImage: `url(${AboutBgImg})`,
        backgroundRepeat: "space",
        backgroundSize: "350px 350px",
      }}
    >
      <h3 className="text-clrPinkDark font-medium text-4xl leading-9">
        {header}
      </h3>
      <div className="flex flex-col md:flex-row md:space-x-6 ">
        <div className="flex flex-col">
          <p className="font-bold">{label1}</p>
          <p className="">{paragraph1}</p>
          <p className="">{paragraph2}</p>
        </div>
        <div className="flex flex-col">
          <p className="font-bold">{label2}</p>
          <p className="">{paragraph3}</p>
          <p className="">{paragraph4}</p>
        </div>
      </div>
    </div>
  );
};

export const ErrorMsg = () => {
  return (
    <div className="flex items-center text-center space-x-[9px]">
      <p className="text-white text-xs leading-7">Can&apos;t be empty</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <circle cx="10" cy="10" r="10" fill="white" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11 5H9V12H11V5ZM11 14H9V16H11V14Z"
          fill="#E7816B"
        />
      </svg>
    </div>
  );
};
