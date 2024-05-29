import React from "react";

const Modal = ({ title, li, children }) => {
  return (
    <div className="py-10 px-5 mr-4 md:mt-0 mt-5 md:ml-0 ml-4 lg:col-span-2 flex flex-col justify-center items-center border border-border rounded-3xl bg-white/10">
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
