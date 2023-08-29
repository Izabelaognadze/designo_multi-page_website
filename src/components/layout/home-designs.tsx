import WebMobileDesignlarge from "../../assets/home/mobile/image-web-design.jpg";
import AppMobileDesignlarge from "../../assets/home/mobile/image-app-design.jpg";
import GraphicMobileDesignlarge from "../../assets/home/mobile/image-graphic-design.jpg";

import WebTabletDesignlarge from "../../assets/home/tablet/image-web-design.jpg";
import AppTabletDesignlarge from "../../assets/home/mobile/image-app-design.jpg";
import GraphicTabletDesignlarge from "../../assets/home/mobile/image-graphic-design.jpg";

// import WebdesktopDesignSmall from "../../assets/home/desktop/image-web-design-small.jpg";
import WebdesktopDesignlarge from "../../assets/home/desktop/image-web-design-large.jpg";
import AppDesktopDesign from "../../assets/home/desktop/image-app-design.jpg";
import GraphicDesktopDesign from "../../assets/home/desktop/image-graphic-design.jpg";
import { Link } from "@tanstack/react-router";

export const HomeDesigns = () => {
  return (
    <div className="text-white uppercase border-2 mx-auto max-w-[1111px] grid">
      <Link to="/webDesign">
        <div className="bg-clrPinkDark relative max-w-fit max-h-fit rounded-2xl">
          <img
            className="hover:opacity-25 rounded-2xl md:hidden"
            src={WebMobileDesignlarge}
            alt=""
          />
          <img
            className="hover:opacity-25 rounded-2xl hidden md:block lg:hidden"
            src={WebTabletDesignlarge}
            alt=""
          />
          <img
            className="hover:opacity-25 rounded-2xl hidden lg:block"
            src={WebdesktopDesignlarge}
            alt=""
          />
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h1 className="text-[40px] font-medium leading-10 tracking-[2px] truncate">
              WEB DESIGN
            </h1>
            <p className="">design</p>
          </div>
        </div>
      </Link>

      <Link to="/appDesign">
        <div className="bg-clrPinkDark relative max-w-fit max-h-[308px] rounded-2xl">
          <img
            className="hover:opacity-25 rounded-2xl md:hidden"
            src={AppMobileDesignlarge}
            alt=""
          />
          <img
            className="hover:opacity-25 rounded-2xl hidden md:block lg:hidden"
            src={AppTabletDesignlarge}
            alt=""
          />
          <img
            className="hover:opacity-25 rounded-2xl hidden lg:block"
            src={AppDesktopDesign}
            alt=""
          />
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h1 className="text-[40px] font-medium leading-10 tracking-[2px] truncate">
              WEB DESIGN
            </h1>
            <p className="">design</p>
          </div>
        </div>
      </Link>

      <Link to="/graphicDesign">
        <div className="bg-clrPinkDark relative max-w-fit max-h-[308px] rounded-2xl">
          <img
            className="hover:opacity-25 rounded-2xl md:hidden"
            src={GraphicMobileDesignlarge}
            alt=""
          />
          <img
            className="hover:opacity-25 rounded-2xl hidden md:block lg:hidden"
            src={GraphicTabletDesignlarge}
            alt=""
          />
          <img
            className="hover:opacity-25 rounded-2xl hidden lg:block"
            src={GraphicDesktopDesign}
            alt=""
          />
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h1 className="text-[40px] font-medium leading-10 tracking-[2px] truncate">
              WEB DESIGN
            </h1>
            <p className="">design</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
