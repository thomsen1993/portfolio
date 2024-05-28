"use client";

import { useState } from "react";
import Image from "next/image";
import bgPhoto from "../../../public/beja_torre.png";
import profilePhoto from "../../../public/benny.png";
import data from "../../../public/data/data.json";
import { FaLinkedin, FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosPhonePortrait } from "react-icons/io";
import {
  TbBrandJavascript,
  TbBrandTypescript,
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandTailwind,
  TbBrandNpm,
  TbApiApp,
  TbBrandNextjs,
  TbBrandGithub,
  TbBrandFigma,
} from "react-icons/tb";

const Profile = () => {
  const [phoneInfo, setPhoneInfo] = useState(false);
  const [emailInfo, setEmailInfo] = useState(false);

  return (
    <div className="bg-gradient-to-b from-white/50 border border-borderColor shadow-xl shadow-shadowColor rounded-b-3xl lg:row-span-2 lg:col-span-1 col-span-3 p-5">
      <div className="rounded-md mb-10">
        <div className="relative text-5xl border h-80 overflow-hidden">
          <TbBrandJavascript className="absolute top-2 -right-[5%] animate-movingMinusX"/>
          <TbBrandNextjs className="absolute top-1/2 -translate-y-1/2 left-[5%] animate-[throw_2s_ease-in-out_forwards_infinite]"/>
          <TbBrandHtml5 className="absolute top-1/2 -translate-y-1/2 left-[20%]"/>
          <TbBrandCss3 className="absolute top-1/2 -translate-y-1/2 left-[40%]"/>
          <TbBrandTailwind className="absolute top-1/2 -translate-y-1/2 left-[60%]"/>
          <TbBrandGithub className="absolute top-1/2 -translate-y-1/2 left-[80%]"/>
          <TbBrandTypescript className="absolute bottom-2 -left-[5%] animate-movingPlusX"/>
          
        </div>
        <Image
          src={profilePhoto}
          alt=""
          className="w-52 h-52 -translate-y-1/2 rounded-full bg-gradient-to-t from-slate-50 via-slate-50 to-slate-300 border-4 border-borderColor mx-auto z-10"
        ></Image>
      </div>
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
