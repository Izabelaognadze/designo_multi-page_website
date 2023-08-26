import { Link } from "@tanstack/react-router";
import logoLight from "../../assets/shared/desktop/logo-dark.png";

export const Header = () => {
  return (
    <div className="max-w-[689px] md:max-w-[1111px] mx-auto">
      <div className="flex flex-row justify-between mt-[64px]">
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
      </div>
    </div>
  );
};
