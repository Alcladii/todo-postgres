import { inputProps } from "@/types";

const input = ({ name, type, placeholder, value }: inputProps) => {
  return (
    <div>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        className="block w-full p-4 mx-2 boader rounded-lg text-base bg-gray-700 placeholder-gray-400 text-white"
      />
    </div>
  );
};

export default input;
