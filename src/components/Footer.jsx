import React from "react";
import data from "@/data/data.json";
import { FaLinkedin, FaInstagram, FaFacebook, FaGithub  } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-white to bg-slate-400 text-center p-10">
      <h4>Mere om mig</h4>
      <ul className="flex justify-center gap-4 my-5">
        {data.contact.slice(2).map((event, index) => (
          <li key={index} className="hover:scale-125 transition-all">
            <a href={event.link} target="_blank">{event.icon === "FaLinkedin" && <FaLinkedin size="2rem" />}</a>
            <a href={event.link} target="_blank">{event.icon === "FaInstagram" && <FaInstagram size="2rem" />}</a>
            <a href={event.link} target="_blank">{event.icon === "FaFacebook" && <FaFacebook size="2rem" />}</a>
            <a href={event.link} target="_blank">{event.icon === "FaGithub" && <FaGithub size="2rem" />}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
