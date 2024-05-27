"use client";

import { useState } from "react";
import data from "@/data/data.json";
import Card from "../Card";
import Grids from "../Grids";
import Modal from "../Modal";
import { RiSpeakFill } from "react-icons/ri";
import { FaBookOpenReader } from "react-icons/fa6";
import { TfiWrite } from "react-icons/tfi";

const Language = () => {
  const [modal, setModal] = useState(false);
  const [selectedLang, setSelectedLang] = useState(null);

  const openModal = (lang) => {
    setSelectedLang(lang);
    setModal(true);
  };

  return (
    <Grids>
      <div className="flex flex-col gap-5 max-h-[454px] overflow-hidden overflow-y-scroll px-2 mx-2">
        {data.category.languages.map((lang, index) => (
          <Card
            key={index}
            title={lang.title}
            degree={lang.degree}
            openModal={() => openModal(lang)}
            imgSrc={lang.flag.replace("/public", "")}
          ></Card>
        ))}
      </div>
      {modal && (
        <Modal title={selectedLang.title}>
          <div className="grid grid-cols-3 h-full gap-5">
            {selectedLang.bar.map((event, index) => (
              <div className="flex flex-col" key={index}>
                <div className="border border-borderColor w-max h-full rounded-b-full rotate-180 mx-auto">
                  <div
                    className="bg-blue-500 w-max h-full rounded-b-full bar"
                    style={{
                      height: `${parseInt(event.percentage)}%`,
                      transition: 'height .7s ease-in-out'
                    }}
                  >
                    <div className="flex flex-col justify-between h-full py-5 px-2">
                      <p className="rotate-180">{event.percentage}%</p>
                      <div className="text-xl">
                        {event.icon === "RiSpeakFill" && (
                          <RiSpeakFill className="rotate-180 mx-auto" />
                        )}
                        {event.icon === "FaBookOpenReader" && (
                          <FaBookOpenReader className="rotate-180 mx-auto" />
                        )}
                        {event.icon === "TfiWrite" && (
                          <TfiWrite className="rotate-180 mx-auto" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-center">{event.text}</p>
              </div>
            ))}
          </div>
        </Modal>
      )}
    </Grids>
  );
};

export default Language;