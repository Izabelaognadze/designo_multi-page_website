import changeLogo from "../../assets/graphic-design/desktop/image-change.jpg";
import BoxedWaterLogo from "../../assets/graphic-design/desktop/image-boxed-water.jpg";
import ScienceLogo from "../../assets/graphic-design/desktop/image-science.jpg";

import WebMobileDesignlarge from "../../assets/home/mobile/image-web-design.jpg";
import AppMobileDesignlarge from "../../assets/home/mobile/image-app-design.jpg";

import WebTabletDesignlarge from "../../assets/home/tablet/image-web-design.jpg";
import AppTabletDesignlarge from "../../assets/home/tablet/image-app-design.jpg";

import WebdesktopDesignSmall from "../../assets/home/desktop/image-web-design-small.jpg";
import AppDesktopDesign from "../../assets/home/desktop/image-app-design.jpg";
import {
  Header,
  Footer,
  TalkAbout,
  DesignHeader,
  DesignMainContent,
  HomeDesign,
} from "../../components/layout";
import { Link } from "@tanstack/react-router";
export const GraphicDesign = () => {
  return (
    <div className="">
      <Header />
      <DesignHeader
        label="Graphic Design"
        paragraph="We deliver eye-catching branding materials that are tailored to meet your business objectives."
      />
      <div className="mt-[97px] space-y-10 lg:space-y-0 lg:gap-y-10 mx-auto max-w-[1111px] flex flex-col items-center lg:grid  lg:grid-cols-3">
        <DesignMainContent
          logo={changeLogo}
          header="TIM BROWN"
          label="A book cover designed for Tim Brown's new release, 'Change'"
        />
        <DesignMainContent
          logo={BoxedWaterLogo}
          header="BOXED WATER"
          label="A simple packaging concept made for Boxed Water"
        />
        <DesignMainContent
          logo={ScienceLogo}
          header="SCIENCE!"
          label="A poster made in collaboration with the Federal Art Project"
        />
      </div>
      <div className="text-white uppercase flex flex-col lg:flex-row gap-6 lg:gap-[30px] max-w-[1111px] mx-auto mt-[96px] md:mt-[120px] lg:mt-400">
        <Link to="/appDesign">
          <HomeDesign
            bgMobile={AppMobileDesignlarge}
            bgTab={AppTabletDesignlarge}
            bgDesk={AppDesktopDesign}
            header="APP DESIGN"
          />
        </Link>
        <Link to="/webDesign">
          <HomeDesign
            bgMobile={WebMobileDesignlarge}
            bgTab={WebTabletDesignlarge}
            bgDesk={WebdesktopDesignSmall}
            header="WEB DESIGN"
          />
        </Link>
      </div>
      <TalkAbout />
      <Footer />
    </div>
  );
};
