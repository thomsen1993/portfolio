import React from "react";

const SubTitles = ({ children }) => {
  return (
    <div className="relative">
      {children}
      <span className="absolute top-1/2 -translate-y-1/2 opacity-0 bg-red-400 w-24 h-[2px] group-hover/card:animate-[arrow_1s]"></span>
    </div>
  );
};

export default SubTitles;
