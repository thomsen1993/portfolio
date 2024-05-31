"use client";

import React, { useState } from "react";
import Image from "next/image";
import Profile from "@/components/sections/Profile";
import { About } from "@/components/sections/About";
import File from "@/components/sections/File";
import en from "../../public/data/en/data.json";
import da from "../../public/data/da/data.json";
import pt from "../../public/data/pt/data.json";
import BgPicture from "@/components/BgPicture";

export default function Home() {
  const options = [
    {
      id: 1,
      value: "en",
      label: "English",
      img: "/public/assets/flags/united-kingdom.png",
    },
    {
      id: 2,
      value: "da",
      label: "Danish",
      img: "/public/assets/flags/denmark.png",
    },
    {
      id: 3,
      value: "pt",
      label: "Portuguese",
      img: "/public/assets/flags/portugal.png",
    },
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
      <BgPicture />
      <main className="grid lg:grid-cols-4 gap-5 lg:max-w-[1200px] lg:mx-auto mt-5">
        <Profile data={data} />
        <About data={data} />
        <File data={data} />
        <div className="grid grid-cols-3 lg:col-start-2 lg:col-span-2 col-start-1 col-span-3 gap-5">
          <h4 className="col-span-3">{data.footer[0].text}</h4>
          {options.map((option) => (
            <button
              key={option.id}
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
                height={30}
                className="mx-auto"
              />
              <p>{option.label}</p>
            </button>
          ))}
        </div>
        <p className="flex justify-center items-center">
          {data.footer[0].update}
        </p>
      </main>
    </>
  );
}
