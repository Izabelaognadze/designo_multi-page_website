import ExpressLogo from "../../assets/web-design/desktop/image-express.jpg";
import TransferLogo from "../../assets/web-design/desktop/image-transfer.jpg";
import PhotonLogo from "../../assets/web-design/desktop/image-photon.jpg";
import BuilderLogo from "../../assets/web-design/desktop/image-builder.jpg";
import BlogrLogo from "../../assets/web-design/desktop/image-blogr.jpg";
import CampLogo from "../../assets/web-design/desktop/image-camp.jpg";

import AppMobileDesignlarge from "../../assets/home/mobile/image-app-design.jpg";
import GraphicMobileDesignlarge from "../../assets/home/mobile/image-graphic-design.jpg";

import AppTabletDesignlarge from "../../assets/home/tablet/image-app-design.jpg";
import GraphicTabletDesignlarge from "../../assets/home/tablet/image-graphic-design.jpg";

import AppDesktopDesign from "../../assets/home/desktop/image-app-design.jpg";
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
export const WebDesign = () => {
  return (
    <div className="">
      <Header />
      <DesignHeader
        label="Web Design"
        paragraph="We build websites that serve as powerful marketing tools 
        and bring memorable brand experiences."
      />

      <div className="mt-[97px] space-y-10">
        <DesignMainContent
          logo={ExpressLogo}
          header="EXPRESS"
          label="A multi-carrier shipping website for ecommerce businesses"
        />
        <DesignMainContent
          logo={TransferLogo}
          header="TRANSFER"
          label="Site for low-cost money transfers and sending money within seconds"
        />
        <DesignMainContent
          logo={PhotonLogo}
          header="PHOTON"
          label="A state-of-the-art music player with high-resolution audio and DSP effects"
        />
        <DesignMainContent
          logo={BuilderLogo}
          header="BUILDER"
          label="Connects users with local contractors based on their location"
        />
        <DesignMainContent
          logo={BlogrLogo}
          header="BLOGR"
          label="Blogr is a platform for creating an online blog or publication"
        />
        <DesignMainContent
          logo={CampLogo}
          header="CAMP"
          label="Get expert training in coding, data, design, and digital marketing"
        />
      </div>
      <div className="text-white uppercase flex flex-col lg:flex-row gap-6 lg:gap-[30px] max-w-[1111px] mx-auto mt-[96px] md:mt-[120px] lg:mt-40">
        <Link to="/appDesign">
          <HomeDesign
            bgMobile={AppMobileDesignlarge}
            bgTab={AppTabletDesignlarge}
            bgDesk={AppDesktopDesign}
            header="APP DESIGN"
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
