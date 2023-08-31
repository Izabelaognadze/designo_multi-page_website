import Frame from "../../assets/home/desktop/image-hero-phone.png";
import BgImg from "../../assets/home/desktop/bg-pattern-hero-home.svg";
import MobFrame from "../../assets/home/desktop/mob-image-hero-phone.png";
import { ButtonDark } from ".";
export const HomeMainContent = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "100%",
        backgroundPositionY: Screen ? "40%" : "0%",
      }}
      className="overflow-hidden md:rounded-[15px] bg-clrPinkDark text-white max-w-[1111px] mx-auto items-center flex flex-col lg:flex-row md:mx-10 lg:mx-auto"
    >
      <div className="text-center space-y-6 lg:text-start lg:space-y-10 lg:pl-[95px]">
        <h3 className="text-5xl  font-fo font-medium max-w-[573px] mx-auto mt-20 md:mt-[60px] lg:mt-0">
          Award-winning custom designs and digital branding solutions
        </h3>
        <p className="max-w-[445px] mx-auto lg:mx-0">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <ButtonDark label="Learn More" />
      </div>
      <picture className="mx-auto">
        <source srcSet={Frame} media="(min-width: 1024px)" />
        <img src={MobFrame} alt="" />
      </picture>
    </div>
  );
};
