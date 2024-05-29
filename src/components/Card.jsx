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
  data,
}) => {
  return (
    <div
      className="border border-borderColor bg-white/10 rounded-3xl px-5 pt-5 cursor-pointer group"
      onClick={openModal}
    >
      {children}
      <div className="flex justify-center items-center gap-2  mb-2">
        {imgSrc && <Image src={imgSrc} alt="" width={35} height={35}></Image>}
        {title && <h3>{title}</h3>}
      </div>
      {degree && <p>{degree}</p>}
      {text && <p className="text-end">{text}</p>}
      {firma && <p>{firma}</p>}
      {year && <p className="text-sm text-end border-t">{year}</p>}
      <div className="flex items-center justify-end gap-2">
        {icon && <CiLocationOn className="group-hover:animate-bounce" />}
        {location && <p>{location}</p>}
      </div>
      <p className="text-center mt-5 group-hover:text-primary">
        {data.buttons[4].button}
      </p>
    </div>
  );
};

export default Card;
