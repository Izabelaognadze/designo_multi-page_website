import {
  Header,
  Footer,
  TalkAbout,
  DesignSection,
  CompanyDesctiptions,
  HomeDesigns,
} from "../../components/layout";
export const Home = () => {
  return (
    <div className="">
      <Header />
      <DesignSection />
      <HomeDesigns />
      <CompanyDesctiptions />
      <TalkAbout />
      <Footer />
    </div>
  );
};
