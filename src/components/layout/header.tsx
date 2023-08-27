import { Link } from "@tanstack/react-router";
import logoLight from "../../assets/shared/desktop/logo-dark.png";
import { useState } from "react";

export const Header = () => {
  const [toggle, setToggle] = useState(false);

  const updateMenu = () => {
    setToggle(!toggle);
  };
  return (
    <div className="max-w-[689px] md:max-w-[1111px] mx-auto">
      <div className="flex flex-row justify-between md:mt-[64px] mx-6 md:mx-10 lg:mx-0 my-9">
        <div className="w-[202px]">
          <Link to="/">
            <img src={logoLight} alt="" />
          </Link>
        </div>
        <div className="hidden md:flex gap-[42px] h-[14px] tracking-[2px] text-sm leading-[14px] uppercase my-auto text-clrBlackLight">
          <Link to="/ourCompany">Our Company</Link>
          <Link to="/locations">Locations</Link>
          <Link to="/Contact">Contact</Link>
        </div>
        <div className="md:hidden cursor-pointer" onClick={updateMenu}>
          <svg
            style={{ display: toggle ? "none" : "block" }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="20"
            viewBox="0 0 24 20"
            fill="none"
          >
            <rect width="24" height="4" fill="#1D1C1E" />
            <rect y="8" width="24" height="4" fill="#1D1C1E" />
            <rect y="16" width="24" height="4" fill="#1D1C1E" />
          </svg>
          <svg
            style={{ display: toggle ? "flex" : "none" }}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.0001 7.17165L2.92901 0.100586L0.100586 2.92901L7.17165 10.0001L0.100586 17.0711L2.92901 19.8996L10.0001 12.8285L17.0711 19.8996L19.8996 17.0711L12.8285 10.0001L19.8996 2.92901L17.0711 0.100586L10.0001 7.17165Z"
              fill="#1D1C1E"
            />
          </svg>
        </div>
      </div>
      <div
        id="menu-elements"
        className="absolute min-w-full md:hidden flex-col bg-clrBlackDark text-white px-6 py-[48px] tracking-[2px] uppercase text-2xl space-y-5"
        style={{ display: toggle ? "flex" : "none" }}
      >
        <Link to="/ourCompany">Our Company</Link>
        <Link to="/locations">Locations</Link>
        <Link to="/Contact">Contact</Link>
      </div>
    </div>
  );
};
