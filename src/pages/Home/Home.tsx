import {
  Header,
  Footer,
  TalkAbout,
  CompanyDesctiptions,
  HomeDesigns,
} from "../../components/layout";
export const Home = () => {
  return (
    <div className="">
      <Header />
      <HomeDesigns />
      <CompanyDesctiptions />
      <TalkAbout />
      <Footer />
    </div>
  );
};
