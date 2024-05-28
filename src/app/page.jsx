"use client";

import React, { useState } from "react";
import Image from "next/image";
import wave from "../../public/net-wave.png";
import Profile from "@/components/sections/Profile";
import { About } from "@/components/sections/About";
import File from "@/components/sections/File";
import en from "../../public/data/en/data.json";
import da from "../../public/data/da/data.json";
import pt from "../../public/data/pt/data.json";

export default function Home() {
  const options = [
    { value: "en", label: "English", img: "/public/united-kingdom.png" },
    { value: "da", label: "Danish", img: "/public/denmark.png" },
    { value: "pt", label: "Portuguese", img: "/public/portugal.png" },
  ];

  const [selectedOption, setSelectedOption] = useState("dk");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    // value(option.value);
    console.log(selectedOption);
  };

  return (
    <>
      <figure className="fixed top-1/2 -translate-y-1/2 -z-50">
        <Image src={wave} alt="Net wave" />
      </figure>
      <main className="grid lg:grid-cols-4 gap-5 lg:max-w-[1200px] lg:mx-auto mx-5 mt-5 sm:mt-10">
        <Profile />
        <About />
        <File />
        <div className="grid grid-cols-3 col-start-2 col-span-2">
          <h4 className="col-span-3 mb-2">Choose a language: </h4>
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className="border border-transparent rounded-md hover:border-borderColor"
            >
              <Image
                src={option.img.replace("/public", "")}
                alt={option.label}
                width={30}
                height={10}
                className="mx-auto"
              />
              <p>{option.label}</p>
            </button>
          ))}
        </div>
      </main>
    </>
  );
}
