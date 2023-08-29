interface ButtonDarkProps {
  label: string;
}

export const ButtonDark = ({ label }: ButtonDarkProps) => {
  return (
    <button className="uppercase w-[152px] h-14 bg-white text-clrBlackLight font-medium tracking-[1px] pb-4 pt-[18px] hover:bg-clrPinkLight hover:text-white rounded-lg ">
      {label}
    </button>
  );
};
