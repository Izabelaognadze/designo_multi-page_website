import {
  Header,
  TalkAbout,
  Footer,
  LocationsMap,
} from "../../components/layout";
import canadaMapDesk from "../../assets/locations/desktop/image-map-canada.png";
import AustraliaMapDesk from "../../assets/locations/desktop/image-map-australia.png";
import ukMapDesk from "../../assets/locations/desktop/image-map-united-kingdom.png";

import canadaMapMob from "../../assets/locations/tablet/image-map-canada.png";
import AustraliaMapMob from "../../assets/locations/tablet/image-map-australia.png";
import ukMapMob from "../../assets/locations/tablet/image-map-uk.png";

export const Locations = () => {
  return (
    <div className="">
      <Header />
      <div className="max-w-[1111px] mx-auto md:space-y-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <picture className="mx-auto rounded-[15px] overflow-hidden">
            <source media="(min-width: 1024px)" srcSet={canadaMapDesk} />
            <img src={canadaMapMob} alt="" />
          </picture>
          <LocationsMap
            header="Canada"
            label1="Designo Central Offic"
            label2="Contact"
            paragraph1="3886 Wellington Street"
            paragraph2="Toronto, Ontario M9C 3J5"
            paragraph3="P : +1 253-863-8967"
            paragraph4="M : contact@designo.co"
          />
        </div>
        <div className="flex flex-col lg:flex-row-reverse gap-8">
          <picture className="mx-auto rounded-[15px] overflow-hidden">
            <source media="(min-width: 1024px)" srcSet={AustraliaMapDesk} />
            <img src={AustraliaMapMob} alt="" />
          </picture>
          <LocationsMap
            header="Australia"
            label1="Designo AU Office"
            label2="Contact "
            paragraph1="19 Balonne Street"
            paragraph2="New South Wales 2443"
            paragraph3="P : (02) 6720 9092"
            paragraph4="M : contact@designo.au"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <picture className="mx-auto rounded-[15px] overflow-hidden">
            <source media="(min-width: 1024px)" srcSet={ukMapDesk} />
            <img src={ukMapMob} alt="" />
          </picture>
          <LocationsMap
            header="United Kingdom"
            label1="Designo UK Office"
            label2="Contact"
            paragraph1="13  Colorado Way"
            paragraph2="Rhyd-y-fro SA8 9GA"
            paragraph3="P : 078 3115 1400"
            paragraph4="M : contact@designo.uk"
          />
        </div>
      </div>
      <TalkAbout />
      <Footer />
    </div>
  );
};
