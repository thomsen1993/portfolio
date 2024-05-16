import React from "react";
import Image from "next/image";
import benny from "../../../public/benny.jpg";
import data from "@/data/data.json";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosPhonePortrait } from "react-icons/io";

const Profile = () => {
  return (
    <section className="bg-gradient-to-t from-slate-50 to-slate-300 rounded-b-3xl px-5 pb-10 pt-5">
      <figure className="border-2 border-slate-400 rounded-md bg-white mb-10 h-96 overflow-hidden grid">
        <Image
          src={benny}
          alt=""
          className="w-full h-96 object-cover blur-md col-start-1 row-start-1"
        ></Image>
        <Image
          src={benny}
          alt=""
          className="w-[20rem] h-96 object-cover mx-auto col-start-1 row-start-1 z-10"
        ></Image>
      </figure>
      <div className="grid md:grid-cols-2">
        <div className="flex">
          <div className="relative pl-2">
            <h2 className="text-5xl uppercase text-slate-600 drop-shadow-md">
              {data.intro.title}
            </h2>
            <p className="absolute right-0 text-slate-400 text-xl">
              {data.intro.subTitle}
            </p>
          </div>
        </div>
        <ul>
          {data.contact.slice(0, 3).map((event, index) => (
            <li
              key={index}
              className="flex gap-2 rounded-md p-3 hover:shadow-md hover:-translate-y-1 transition-all "
            >
              {event.icon === "FaLinkedin" && <FaLinkedin size="1.5rem" />}
              {event.icon === "HiOutlineMail" && (
                <HiOutlineMail size="1.5rem" />
              )}
              {event.icon === "IoIosPhonePortrait" && (
                <IoIosPhonePortrait size="1.5rem" />
              )}
              {event.link ? (
                <a href={event.link} target="_blank" rel="noopener noreferrer">
                  {event.link}
                </a>
              ) : event.email ? (
                <a href={`mailto:${event.email}`}>{event.email}</a>
              ) : (
                <a href={`tel:${event.phone}`}>{event.phone}</a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Profile;
