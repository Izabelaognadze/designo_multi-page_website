import { Header, Footer, TalkAbout, Locations } from "../../components/layout";
import CanadaLogo from "../../assets/shared/Canada.svg";
import AustraliaLogo from "../../assets/shared/Australia.svg";
import UnitedKingdomLogo from "../../assets/shared/United-Kingdom.svg";
export const Contact = () => {
  return (
    <div className="">
      <body>
        <Header />
        <div className="flex flex-col lg:flex-row space-y-12 lg:items-start lg:my-[60px]">
          {/* samoci px shesacvlelia */}
          <Locations logo={CanadaLogo} header="Canada" />
          <Locations logo={AustraliaLogo} header="Australia" />
          <Locations logo={UnitedKingdomLogo} header="United Kingdom" />
        </div>
        <TalkAbout />
        <Footer />
      </body>
    </div>
  );
};
