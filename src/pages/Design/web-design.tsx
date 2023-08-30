import ExpressLogo from "../../assets/web-design/desktop/image-express.jpg";
import TransferLogo from "../../assets/web-design/desktop/image-transfer.jpg";
import PhotonLogo from "../../assets/web-design/desktop/image-photon.jpg";
import BuilderLogo from "../../assets/web-design/desktop/image-builder.jpg";
import BlogrLogo from "../../assets/web-design/desktop/image-blogr.jpg";
import CampLogo from "../../assets/web-design/desktop/image-camp.jpg";
import {
  Header,
  Footer,
  TalkAbout,
  DesignHeader,
  DesignMainContent,
} from "../../components/layout";
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
      <TalkAbout />
      <Footer />
    </div>
  );
};
