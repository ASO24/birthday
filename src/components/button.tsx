import { type FC } from "react";

interface Props {
  text: string;
  onCLick: () => void;
  isDisable: boolean;
}

const Button: FC<Props> = ({ text, onCLick, isDisable }) => {
  return (
    <div className="flex flex-row justify-center ">
      <button
        onClick={onCLick}
        disabled={isDisable}
        className={`
          w-1/2 px-4 py-2 rounded text-white font-semibold transition
          ${isDisable
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-[#bd6725] hover:bg-[#a75c1f] cursor-pointer'}
        `}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
