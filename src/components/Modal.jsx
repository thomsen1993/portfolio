import React from "react";

const Modal = ({ children }) => {
  return (
    <div className="mt-10 mb-10 lg:col-span-2 flex flex-col justify-center items-center">
        {children}
    </div>
  );
};

export default Modal;
