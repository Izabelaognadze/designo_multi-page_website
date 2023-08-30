import changeLogo from "../../assets/graphic-design/desktop/image-change.jpg";
import BoxedWaterLogo from "../../assets/graphic-design/desktop/image-boxed-water.jpg";
import ScienceLogo from "../../assets/graphic-design/desktop/image-science.jpg";
import {
  Header,
  Footer,
  TalkAbout,
  DesignHeader,
  DesignMainContent,
} from "../../components/layout";
export const GraphicDesign = () => {
  return (
    <div className="">
      <Header />
      <DesignHeader
        label="Graphic Design"
        paragraph="We deliver eye-catching branding materials that are tailored to meet your business objectives."
      />
      <div className="mt-[97px] space-y-10">
        <DesignMainContent
          logo={changeLogo}
          header="TIM BROWN"
          label="A book cover designed for Tim Brown's new release, 'Change'"
        />
        <DesignMainContent
          logo={BoxedWaterLogo}
          header="TIM BROWN"
          label="A simple packaging concept made for Boxed Water"
        />
        <DesignMainContent
          logo={ScienceLogo}
          header="TIM BROWN"
          label="A poster made in collaboration with the Federal Art Project"
        />
      </div>
      <TalkAbout />
      <Footer />
    </div>
  );
};
