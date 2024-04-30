import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";

const IncDecQuantity = () => {
  return (
    <div className="flex">
      <div className="flex gap-4 rounded border border-gray-300 dark:border-slate-700 items-center">
        <button className="border-r-[1px] border-gray-300 dark:border-slate-700 px-3 py-4">
          <FiMinus size={20} />
        </button>
        <p className="flex-grow  px-8 ">1</p>
        <button className="border-l-[1px] border-gray-300 dark:border-slate-700  px-3 py-4">
          <GoPlus size={20} />
        </button>
      </div>
    </div>
  );
};

export default IncDecQuantity;
