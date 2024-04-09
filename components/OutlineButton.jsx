import React from "react";

const OutlineButton = ({ icon, text, cn }) => {
  const Icon = icon;
  return (
    <button
      className={`${
        cn
          ? cn +
            "cursor-pointer rounded-lg font-semibold overflow-hidden relative z-100 border group"
          : "cursor-pointer rounded-lg font-semibold overflow-hidden relative z-100 border border-blue-500 group px-4 py-[6px]"
      }`}
    >
      <span className="flex items-center gap-2  relative z-10 text-blue-500 group-hover:text-white text-lg duration-500">
        <Icon className="text-2xl  " />
        <span className="sm:hidden lg:block hidden">{text}</span>
      </span>
      <span className="absolute w-full h-full bg-blue-500 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
      <span className="absolute w-full h-full bg-blue-500 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
    </button>
  );
};

export default OutlineButton;
