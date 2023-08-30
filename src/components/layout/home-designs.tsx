import WebMobileDesignlarge from "../../assets/home/mobile/image-web-design.jpg";
import AppMobileDesignlarge from "../../assets/home/mobile/image-app-design.jpg";
import GraphicMobileDesignlarge from "../../assets/home/mobile/image-graphic-design.jpg";

import WebTabletDesignlarge from "../../assets/home/tablet/image-web-design.jpg";
import AppTabletDesignlarge from "../../assets/home/tablet/image-app-design.jpg";
import GraphicTabletDesignlarge from "../../assets/home/tablet/image-graphic-design.jpg";

import WebdesktopDesignlarge from "../../assets/home/desktop/image-web-design-large.jpg";
import AppDesktopDesign from "../../assets/home/desktop/image-app-design.jpg";
import GraphicDesktopDesign from "../../assets/home/desktop/image-graphic-design.jpg";

import { Link } from "@tanstack/react-router";
import { HomeDesign } from ".";

export const HomeDesigns = () => {
  return (
    <div className="text-white gap-4 uppercase mx-auto grid lg:grid-flow-row-dense lg:grid-cols-2 max-w-[1111px] my-[120px] lg:my-40 ... ">
      <Link className="lg:row-span-2" to="/webDesign">
        <HomeDesign
          bgMobile={WebMobileDesignlarge}
          bgTab={WebTabletDesignlarge}
          bgDesk={WebdesktopDesignlarge}
          header="WEB DESIGN"
        />
      </Link>

      <Link className="lg:col-span-1" to="/appDesign">
        <HomeDesign
          bgMobile={AppMobileDesignlarge}
          bgTab={AppTabletDesignlarge}
          bgDesk={AppDesktopDesign}
          header="APP DESIGN"
        />
      </Link>

      <Link className="lg:col-span-1" to="/graphicDesign">
        <HomeDesign
          bgMobile={GraphicMobileDesignlarge}
          bgTab={GraphicTabletDesignlarge}
          bgDesk={GraphicDesktopDesign}
          header="GRAPHIC DESIGN"
        />
      </Link>
    </div>
  );
};
