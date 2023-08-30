import AirfilterLogo from "../../assets/app-design/desktop/image-airfilter.jpg";
import eyecamLogo from "../../assets/app-design/desktop/image-eyecam.jpg";
import faceitLogo from "../../assets/app-design/desktop/image-faceit.jpg";
import todoLogo from "../../assets/app-design/desktop/image-todo.jpg";
import loopstudiosLogo from "../../assets/app-design/desktop/image-loopstudios.jpg";

import WebMobileDesignlarge from "../../assets/home/mobile/image-web-design.jpg";
import GraphicMobileDesignlarge from "../../assets/home/mobile/image-graphic-design.jpg";

import WebTabletDesignlarge from "../../assets/home/tablet/image-web-design.jpg";
import GraphicTabletDesignlarge from "../../assets/home/tablet/image-graphic-design.jpg";

import WebdesktopDesignSmall from "../../assets/home/desktop/image-web-design-small.jpg";
import GraphicDesktopDesign from "../../assets/home/desktop/image-graphic-design.jpg";

import {
  Header,
  Footer,
  TalkAbout,
  DesignHeader,
  DesignMainContent,
  HomeDesign,
} from "../../components/layout";
import { Link } from "@tanstack/react-router";
export const AppDesign = () => {
  return (
    <div className="">
      <Header />
      <DesignHeader
        label="App Design"
        paragraph="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
      />
      <div className="mt-[97px] space-y-10">
        <DesignMainContent
          logo={AirfilterLogo}
          header="AIRFILTER"
          label="Solving the problem of poor indoor air quality by filtering the air"
        />
        <DesignMainContent
          logo={eyecamLogo}
          header="EYECAM"
          label="Product that lets you edit your favorite photos and videos at any time"
        />
        <DesignMainContent
          logo={faceitLogo}
          header="FACEIT"
          label="Get to meet your favorite internet superstar with the faceit app"
        />
        <DesignMainContent
          logo={todoLogo}
          header="TODO"
          label="A todo app that features cloud sync with light and dark mode"
        />
        <DesignMainContent
          logo={loopstudiosLogo}
          header="LOOPSTUDIOS"
          label="A VR experience app made for Loopstudios"
        />
      </div>
      <div className="text-white uppercase flex flex-col lg:flex-row gap-6 lg:gap-[30px] max-w-[1111px] mx-auto mt-[96px] md:mt-[120px] lg:mt-40">
        <Link to="/webDesign">
          <HomeDesign
            bgMobile={WebMobileDesignlarge}
            bgTab={WebTabletDesignlarge}
            bgDesk={WebdesktopDesignSmall}
            header="WEB DESIGN"
          />
        </Link>
        <Link to="/graphicDesign">
          <HomeDesign
            bgMobile={GraphicMobileDesignlarge}
            bgTab={GraphicTabletDesignlarge}
            bgDesk={GraphicDesktopDesign}
            header="GRAPHIC DESIGN"
          />
        </Link>
      </div>
      <TalkAbout />
      <Footer />
    </div>
  );
};
