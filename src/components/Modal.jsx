import React from "react";

const Modal = ({ children }) => {
  return (
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 border-2 border-white shadow-lg shadow-gray-400 bg-black/40 text-white rounded-md p-5 max-w-[50%]">
      {children}
    </div>
  );
};

export default Modal;