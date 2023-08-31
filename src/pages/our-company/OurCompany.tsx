import {
  Header,
  Footer,
  TalkAbout,
  Locations,
  AboutMainContent,
} from "../../components/layout";
import CanadaLogo from "../../assets/shared/Canada.svg";
import AustraliaLogo from "../../assets/shared/Australia.svg";
import UnitedKingdomLogo from "../../assets/shared/United-Kingdom.svg";
import RealMob from "../../assets/about/mob-image-real-deal.png";
import AboutMob from "../../assets/about/mob-image-about-hero.png";
import AboutDesk from "../../assets/about/desk-image-about-hero.jpg";
import RealDesk from "../../assets/about/desk-image-real-deal.jpg";
import TalentMob from "../../assets/about/mob-image-world-class-talent.png";
import talentDesk from "../../assets/about/desk-image-world-class-talent.jpg";
export const OurCompany = () => {
  return (
    <div className="">
      <Header />
      <div className="flex justify-center mb-0 md:mb-[120px] lg:mb-40">
        <AboutMainContent
          img_mob={AboutMob}
          paragraphCol="text-white"
          headerCol="text-white"
          bg_col=" bg-clrPinkDark "
          display="lg:flex-row-reverse"
          img_des={AboutDesk}
          header="About Us"
          paragraph="Founded in 2010, we are a creative agency that produces lasting results for our clients. We've partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences."
          secParagraph=""
        />
      </div>
      <div className="flex justify-center">
        <AboutMainContent
          img_mob={TalentMob}
          paragraphCol="text-clrBlackDark"
          headerCol="text-clrPinkDark"
          bg_col="bg-clrWhiteDark"
          display="lg:flex-row"
          img_des={talentDesk}
          header="World-class talent"
          paragraph="We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms."
          secParagraph="Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission."
        />
      </div>

      <div className="flex flex-col lg:flex-row space-y-12 lg:items-start lg:my-[60px] max-w-[1111px] mx-auto">
        {/* samoci px shesacvlelia */}
        <Locations logo={CanadaLogo} header="Canada" />
        <Locations logo={AustraliaLogo} header="Australia" />
        <Locations logo={UnitedKingdomLogo} header="United Kingdom" />
      </div>

      <div className="flex justify-center mt-[120px] lg:mt-40">
        <AboutMainContent
          img_mob={RealMob}
          paragraphCol="text-clrBlackDark"
          headerCol="text-clrPinkDark"
          img_des={RealDesk}
          bg_col="bg-clrWhiteDark"
          display="lg:flex-row-reverse"
          header="The real deal"
          paragraph="As strategic partners in our clients' businesses, we are ready to take on any challenge as our own.
          Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success."
          secParagraph="We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results."
        />
      </div>
      <TalkAbout />
      <Footer />
    </div>
  );
};
