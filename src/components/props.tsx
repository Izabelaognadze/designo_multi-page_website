interface CompanyDesctiptionProps {
  logo: string;
  header: string;
  label: string;
}
export const CompanyDesctiption = ({
  logo,
  header,
  label,
}: CompanyDesctiptionProps) => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-col mx-6 md:mx-[39px] max-w-[1111px] lg:mx-auto">
      <img className="w-[202px] h-[202px] mx-auto" src={logo} alt="" />
      <div className="flex flex-col text-clrBlackLight text-center md:text-start lg:text-center md:my-auto">
        <h4 className="text-[20px] tracking-[5px] leading-[20px] font-medium">
          {header}
        </h4>
        <p className="leading-[26px] font-normal text-base mt-8">{label}</p>
      </div>
    </div>
  );
};
// export const Design = ({logo, header})
