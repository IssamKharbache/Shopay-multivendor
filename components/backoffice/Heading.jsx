import React from "react";

const Heading = ({ title }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold font-poppins dark:text-gray-300 text-gray-700">
        {title}
      </h2>
    </div>
  );
};

export default Heading;
