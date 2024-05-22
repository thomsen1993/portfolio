import React from "react";
import Image from "next/image";
import bgPhoto from "../../../public/beja_torre.png";
import profilePhoto from "../../../public/benny.png";
import data from "@/data/data.json";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosPhonePortrait } from "react-icons/io";

const Profile = () => {
  return (
    <div className="bg-gradient-to-t from-slate-50/50 to-slate-300/50 rounded-b-3xl px-5 pb-10 pt-5">
      <figure className="rounded-md mb-10">
        <Image
          src={bgPhoto}
          alt=""
          className="w-full h-80 object-cover object-top border-b-4 border-white"
        ></Image>
        <Image
          src={profilePhoto}
          alt=""
          className="w-52 h-52 -translate-y-1/2 rounded-full bg-gradient-to-t from-slate-50 via-slate-50 to-slate-300 border-4 border-white mx-auto z-10"
        ></Image>
      </figure>
      <div className="-mt-28">
        <h2 className="text-5xl text-slate-600 w-max mx-auto uppercase drop-shadow-md">
          {data.intro.name}
          <p className="text-end text-slate-400 text-xl">
            {data.intro.job}
          </p>
        </h2>
        <ul className="mx-auto mt-3 w-max">
          {data.contact.slice(0, 3).map((event, index) => (
            <li key={index} className="text-center p-2">
              {event.link ? (
                <a href={event.link} target="_blank" rel="noopener noreferrer">
                  {event.icon === "FaLinkedin" && (
                    <FaLinkedin size="1.5rem" className="mx-auto" />
                  )}
                  {event.link}
                </a>
              ) : event.email ? (
                <a href={`mailto:${event.email}`}>
                  {event.icon === "HiOutlineMail" && (
                    <HiOutlineMail size="1.5rem" className="mx-auto" />
                  )}
                  {event.email}
                </a>
              ) : (
                <a href={`tel:${event.phone}`}>
                  {event.icon === "IoIosPhonePortrait" && (
                    <IoIosPhonePortrait size="1.5rem" className="mx-auto" />
                  )}
                  {event.phone}
                </a>
              )}
            </li>
          ))}
        </ul>
        <div className="pt-5 mt-5 border-t">
          <h2>{data.intro.title}</h2>
          <p className="pb-3">{data.intro.text1}</p>
          <p>{data.intro.text2}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
