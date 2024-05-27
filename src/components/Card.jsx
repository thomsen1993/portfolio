import React from "react";
import Image from "next/image";

const Card = ({
  children,
  imgSrc,
  openModal,
  title,
  text,
  degree,
  firma,
  location,
  year,
}) => {
  return (
    <div
      className="border border-borderColor backdrop-blur-sm bg-white/10 rounded-3xl px-5 pt-10 cursor-pointer group"
      onClick={openModal}
    >
      {children}
      <div className="flex justify-center items-center gap-2  mb-2">
        {imgSrc && imgSrc.length > 0 ? (
          <Image src={imgSrc} alt="" width={35} height={35}></Image>
        ) : null}
        <h3>{title}</h3>
      </div>
      <p>{degree}</p>
      <p className="text-end">{text}</p>
      <p>{firma}</p>
      <p>{year}</p>
      <p className="font-light text-end">{location}</p>
      <p className="text-center mt-5 group-hover:text-primary">Læs mere</p>
    </div>
  );
};

export default Card;
