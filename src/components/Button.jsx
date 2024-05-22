import React from "react";

const Button = ({ openModal }) => {
  return (
    <button
      className="cursor-pointer rounded-b-md bg-gradient-to-tr from-slate-300 via-slate-200 to-slate-300 transition absolute bottom-0 left-0 w-full "
      onClick={openModal}
    >Læs mere</button>
  );
};

export default Button;
