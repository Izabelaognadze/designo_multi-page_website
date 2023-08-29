import passionateLogo from "../../assets/home/desktop/illustration-passionate.svg";
import resourcefulLogo from "../../assets/home/desktop/illustration-resourceful.svg";
import friendlyLogo from "../../assets/home/desktop/illustration-friendly.svg";
import { CompanyDesctiption } from ".";
export const CompanyDesctiptions = () => {
  return (
    <div className="flex flex-col lg:flex-row max-w-[1111px] mx-auto space-y-20 md:space-y-0 lg:space-x-[30px]">
      <CompanyDesctiption
        logo={passionateLogo}
        header="PASSIONATE"
        label="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
      />
      <CompanyDesctiption
        logo={resourcefulLogo}
        header="RESOURCEFUL"
        label="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
      />
      <CompanyDesctiption
        logo={friendlyLogo}
        header="FRIENDLY"
        label=" We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
      />
    </div>
  );
};
