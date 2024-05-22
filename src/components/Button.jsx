import React from "react";

const Button = ({ children }) => {
  return (
    <button className="cursor-pointer text-center text-white border-t rounded-b-md mt-2 w-full absolute bottom-0 left-0 bg-slate-500 hover:bg-slate-600 transition-all">
      {children}
    </button>
  );
};

export default Button;
