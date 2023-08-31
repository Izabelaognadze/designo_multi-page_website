import {
  Header,
  Footer,
  TalkAbout,
  CompanyDesctiptions,
  HomeDesigns,
} from "../../components/layout";
import { HomeMainContent } from "../../components/layout/home-main-content";
export const Home = () => {
  return (
    <div className="">
      <Header />
      <HomeMainContent />
      <HomeDesigns />
      <CompanyDesctiptions />
      <TalkAbout />
      <Footer />
    </div>
  );
};
