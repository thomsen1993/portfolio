"use client";

import React, { useState } from "react";
import Image from "next/image";
import wave from "../../public/assets/net-wave.png";
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

  const [selectedOption, setSelectedOption] = useState("en");

  const handleOptionClick = (option) => {
    setSelectedOption(option.value);
  };

  const getData = () => {
    switch (selectedOption) {
      case "da":
        return da;
      case "pt":
        return pt;
      default:
        return en;
    }
  };

  const data = getData();

  return (
    <>
      <figure className="fixed top-1/2 -translate-y-1/2 -z-50">
        <Image src={wave} alt="Net wave" />
      </figure>
      <main className="grid lg:grid-cols-4 gap-5 lg:max-w-[1200px] lg:mx-auto mx-5 mt-5 sm:mt-10">
        <Profile data={data}/>
        <About data={data}/>
        <File data={data}/>
        <div className="grid grid-cols-3 lg:col-start-2 lg:col-span-2 col-start-1 col-span-3 gap-5">
          <h4 className="col-span-3">{data.buttons[5].button}</h4>
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className={`border rounded-md hover:border-borderColor p-1 active:scale-95 ${
                selectedOption === option.value 
                ? "border-borderColor"
                : "border-transparent"
              }`}
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
