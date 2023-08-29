interface ButtonLightProps {
  label: string;
}

export const ButtonLight = ({ label }: ButtonLightProps) => {
  return (
    <button className="uppercase w-[152px] h-14 bg-clrPinkDark text-white font-medium tracking-[1px]  hover:bg-clrPinkLight rounded-lg ">
      {label}
    </button>
  );
};
