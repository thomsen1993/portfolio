import React from "react";
import Button from "./Button";

const Modal = ({ title, li, children }) => {
  return (
    <div className="py-10 mr-4 md:mt-0 mt-5 md:ml-0 ml-4 lg:col-span-2 flex flex-col justify-center items-center border border-white/50 rounded-3xl backdrop-blur-sm bg-white/10">
      <h3>{title}</h3>
      {li && li.length > 0 ? (
        <ul className="list-disc list-inside">
          {li.map((event, index) => (
            <li key={index}>{event.text}</li>
          ))}
        </ul>
      ) : null}
      {children}
    </div>
  );
};

export default Modal;
