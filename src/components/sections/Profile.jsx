"use client";

import { useState } from "react";
import Image from "next/image";
import profilePhoto from "../../../public/assets/Benny2.jpg";
import { FaLinkedin, FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosPhonePortrait } from "react-icons/io";
import {
  TbBrandJavascript,
  TbBrandTypescript,
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandTailwind,
  TbBrandNextjs,
  TbBrandReact ,
} from "react-icons/tb";

const Profile = ({ data }) => {
  const [phoneInfo, setPhoneInfo] = useState(false);
  const [emailInfo, setEmailInfo] = useState(false);

  return (
    <div className="bg-gradient-to-b from-white/50 backdrop-blur-sm border border-borderColor shadow-xl shadow-shadowColor rounded-b-3xl lg:row-span-2 lg:col-span-1 col-span-3 p-5">
      <div className="mb-10">
        <div className="relative text-5xl border border-b-2 border-borderColor h-80 shadow-inner shadow-black overflow-hidden after:content-[''] after:absolute after:-left-[30%] after:w-full after:h-10 after:bg-white/20 after:-rotate-45">
          <TbBrandJavascript className="absolute top-2 -right-[5%] animate-movingMinusX" />
          <TbBrandNextjs className="absolute top-[37%] lg:left-[10%] left-[3%] animate-[throw3_4s_ease-in-out_forwards_infinite]" />
          <TbBrandHtml5 className="absolute top-[80%] left-[25%] animate-[throw_4s_ease-in-out_forwards_infinite.3s]" />
          <TbBrandCss3 className="absolute top-[57%] left-[45%] animate-[throw2_3s_ease-in-out_forwards_infinite]" />
          <TbBrandTailwind className="absolute top-[70%] left-[70%] animate-[throw_2s_ease-in-out_forwards_infinite.3s]" />
          <TbBrandReact  className="absolute top-[40%] lg:left-[75%] left-[90%] animate-[throw3_3s_ease-in-out_forwards_infinite.5s]" />
          <TbBrandTypescript className="absolute bottom-2 -left-[5%] animate-movingPlusX" />
        </div>
        <Image
          src={profilePhoto}
          alt=""
          className="w-52 h-52 object-cover -translate-y-1/2 rounded-full border-4 border-borderColor mx-auto z-10"
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
