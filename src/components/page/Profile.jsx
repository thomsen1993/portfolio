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
    <div className="bg-gradient-to-b from-white/50 border border-white/50 rounded-b-3xl lg:row-span-2 lg:col-span-1 col-span-3 p-5 mt-5">
      <figure className="rounded-md mb-10">
        <Image
          src={bgPhoto}
          alt=""
          className="w-full h-80 object-cover object-top border-b-4 border-white/50"
        ></Image>
        <Image
          src={profilePhoto}
          alt=""
          className="w-52 h-52 -translate-y-1/2 rounded-full bg-gradient-to-t from-slate-50 via-slate-50 to-slate-300 border-4 border-white/50 mx-auto z-10"
        ></Image>
      </figure>
      <div className="-mt-28">
        <h1 className="text-2xl w-max mx-auto uppercase drop-shadow-md">
          {data.intro.name}
          <p className="text-end text-gray-400 text-sm">{data.intro.job}</p>
        </h1>
        <ul className="mt-3 grid grid-cols-3 gap-2 text-[#FCF7F8]">
          {data.contact.slice(0, 3).map((event, index) => (
            <li key={index} className="hover:text-[#fd7f40] mx-auto">
              {event.link ? (
                <a href={event.link} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size="1.5rem" />
                </a>
              ) : event.email ? (
                <a href={`mailto:${event.email}`}>
                  <HiOutlineMail size="1.5rem" />
                </a>
              ) : (
                <a href={`tel:${event.phone}`}>
                  {event.icon === "IoIosPhonePortrait" && (
                    <IoIosPhonePortrait size="1.5rem" />
                  )}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
