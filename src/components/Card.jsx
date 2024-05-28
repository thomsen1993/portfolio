import React from "react";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";

const Card = ({
  children,
  imgSrc,
  openModal,
  title,
  text,
  degree,
  firma,
  year,
  location,
  icon,
}) => {
  return (
    <div
      className="border border-borderColor backdrop-blur-sm bg-white/10 rounded-3xl px-5 pt-10 cursor-pointer group"
      onClick={openModal}
    >
      {children}
      <div className="flex justify-center items-center gap-2  mb-2">
        {imgSrc && <Image src={imgSrc} alt="" width={35} height={35}></Image>}
        <h3>{title && title}</h3>
      </div>
      <p>{degree && degree}</p>
      <p className="text-end">{text && text}</p>
      <p>{firma && firma}</p>
      <p>{year && year}</p>
      <div className="flex items-center justify-end gap-2">
        {icon && <CiLocationOn className="group-hover:animate-bounce" />}
        <p>{location && location}</p>
      </div>
      <p className="text-center mt-5 group-hover:text-primary">Læs mere</p>
    </div>
  );
};

export default Card;
