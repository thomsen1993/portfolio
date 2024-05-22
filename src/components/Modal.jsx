import React from "react";

const Modal = ({ children }) => {
  return (
    <div className="py-10 lg:col-span-2 flex flex-col justify-center items-center border rounded-md backdrop-blur-sm bg-white/10">
        {children}
    </div>
  );
};

export default Modal;
