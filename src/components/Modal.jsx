import React from "react";

const Modal = ({ src, srcLogo, title, li, children }) => {
  return (
    <div className="mr-4 md:mt-0 mt-5 md:ml-0 ml-4 lg:col-span-2 border border-border rounded-3xl bg-white/10 overflow-hidden">
      {src && (
        <figure className="grid">
          <img
            src={src}
            alt=""
            className="col-start-1 row-start-1 col-span-4 row-span-4 w-full h-32 object-cover"
          />
          <img
            src={srcLogo}
            alt=""
            className="col-start-4 row-start-4 w-14 h-14 justify-self-end"
          />
        </figure>
      )}
      <div className="mx-5 border-l border-borderColor h-full">
        {title && <h3 className="py-5">{title}</h3>}
        {li && (
          <ul>
            {li.map((event, index) => (
              <li key={index} className="border-l-4 border-borderColor mb-1 pl-1">
                {event.text}
              </li>
            ))}
          </ul>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal;
