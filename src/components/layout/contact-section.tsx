import { ButtonDark } from ".";
import bgImg from "../../assets/contact/desktop/bg-pattern-hero-desktop.svg";

export const ContactSection = () => {
  return (
    <div
      className="bg-clrPinkDark max-w-[1111px] md:mx-[39px] lg:mx-auto mx-auto text-white space-y-12 md:space-y-10 lg:space-y-0 px-6 md:px-14 md:rounded-[15px] flex flex-col lg:flex-row"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "max-width: 800px" ? "repeat" : "no-repeat",
      }}
    >
      <div className="text-center md:text-start lg:w-[50%]">
        <h1 className="text-5xl pt-[72px] mb-6 lg:pt-0">Contact Us</h1>
        <p className="md:max-w-[573px] lg:max-w-[445px]">
          Ready to take it to the next level? Let&apos;s talk about your project
          or idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that&apos;s relatable to your
          users, drop us a line.
        </p>
      </div>
      <div className="items-center flex flex-col lg:w-[50%]">
        <div className="">
          <input type="text" placeholder="Name" className="inputClass" />
        </div>
        <ButtonDark label="submit" />
      </div>
    </div>
  );
};
