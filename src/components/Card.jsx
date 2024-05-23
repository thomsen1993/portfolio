import React from "react";
import Button from "./Button";

const Card = ({ openModal, title, text, degree, firma, location, year }) => {
  return (
    <div
      className="border border-white/50 backdrop-blur-sm bg-white/10 rounded-3xl px-5 pt-10 cursor-pointer group"
      onClick={openModal}
    >
      <h3>{title}</h3>
      <p>{degree}</p>
      <p className="text-end text-[#CED3DC]">{text}</p>
      <p>{firma}</p>
      <p>{year}</p>
      <p className="font-light text-end">{location}</p>
      <p className="text-center mt-10 group-hover:text-[#FCF7F8]">Læs mere</p>
    </div>
  );
};

export default Card;
