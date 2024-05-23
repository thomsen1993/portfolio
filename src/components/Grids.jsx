import React from "react";

const Grids = ({ children }) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2">
      {children}
    </div>
  );
};

export default Grids;
