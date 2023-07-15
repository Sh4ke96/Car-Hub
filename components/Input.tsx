import { FC } from "react";

interface InputProps {
  label: string;
}

const Input: FC<InputProps> = ({ label }) => {
  return (
    <div className="relative z-0 w-full">
      <input
        type="text"
        id="floating"
        className="block pt-8 pb-4 px-0 w-full text-[1.6rem] text-black bg-transparent border-0 border-b-4 border-black appearance-none focus:outline-none focus:ring-0 focus:text-white peer"
        placeholder=""
      />
      <label
        htmlFor="floating"
        className="absolute text-[1.6rem] text-black duration-300 text-bold transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[1.2rem] peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
