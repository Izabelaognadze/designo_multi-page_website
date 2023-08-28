import {
  Header,
  Footer,
  TalkAbout,
  DesignSection,
} from "../../components/layout";
const Home = () => {
  return (
    <div className="">
      <Header />
      <div className="bg-red-500 text-2xl text-white">this is Home page</div>
      <DesignSection />
      <TalkAbout />
      <Footer />
    </div>
  );
};

export default Home;
