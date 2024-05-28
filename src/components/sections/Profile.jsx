"use client";

import { useState } from "react";
import Image from "next/image";
import bgPhoto from "../../../public/beja_torre.png";
import profilePhoto from "../../../public/benny.png";
import data from "../../../public/data/data.json";
import { FaLinkedin, FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosPhonePortrait } from "react-icons/io";

const Profile = () => {
  const [phoneInfo, setPhoneInfo] = useState(false);
  const [emailInfo, setEmailInfo] = useState(false);

  return (
    <div className="bg-gradient-to-b from-white/50 border border-borderColor shadow-xl shadow-shadowColor rounded-b-3xl lg:row-span-2 lg:col-span-1 col-span-3 p-5">
      <figure className="rounded-md mb-10">
        <Image
          src={bgPhoto}
          alt=""
          className="w-full h-80 object-cover object-top border-b-4 border-borderColor"
        ></Image>
        <Image
          src={profilePhoto}
          alt=""
          className="w-52 h-52 -translate-y-1/2 rounded-full bg-gradient-to-t from-slate-50 via-slate-50 to-slate-300 border-4 border-borderColor mx-auto z-10"
        ></Image>
      </figure>
      <div className="-mt-28">
        <h1 className="uppercase">
          {data.intro.name}
          <p className="text-end text-secondary text-sm">{data.intro.job}</p>
        </h1>
        <ul className="mt-8 grid grid-cols-3 gap-2 text-primary">
          {data.contact.map((event, index) => (
            <li
              key={index}
              className="text-4xl text-secondary hover:text-primary border border-borderColor rounded-md p-2 mx-auto relative"
            >
              {event.link ? (
                <a href={event.link} target="_blank">
                  {event.icon === "FaLinkedin" && <FaLinkedin />}
                  {event.icon === "FaInstagram" && <FaInstagram />}
                  {event.icon === "FaFacebook" && <FaFacebook />}
                  {event.icon === "FaGithub" && <FaGithub />}
                </a>
              ) : event.email ? (
                <a
                  href={`mailto:${event.email}`}
                  onMouseEnter={() => setEmailInfo(event)}
                  onMouseLeave={() =>
                    setTimeout(() => {
                      setEmailInfo(false);
                    }, 2000)
                  }
                >
                  <HiOutlineMail />
                  {emailInfo && (
                    <p className="text-sm absolute -top-5 left-1/2 -translate-x-1/2">
                      {event.email}
                    </p>
                  )}
                </a>
              ) : event.phone ? (
                <a
                  href={`tel:${event.phone}`}
                  onMouseEnter={() => setPhoneInfo(event)}
                  onMouseLeave={() =>
                    setTimeout(() => {
                      setPhoneInfo(false);
                    }, 2000)
                  }
                >
                  <IoIosPhonePortrait />
                  {phoneInfo && (
                    <p className="text-sm text-nowrap absolute -top-5 left-1/2 -translate-x-1/2 z-50">
                      {event.phone}
                    </p>
                  )}
                </a>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
