"use clint";

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
          ></Card>
        ))}
      </div>
      {modal && (
        <Modal title={selectedLang.title}>
          <div className="grid grid-cols-3 h-full gap-5">
            {selectedLang.bar.map((event, index) => (
              <div className="flex flex-col">
                <div className="border w-max h-full rounded-b-full rotate-180 mx-auto">
                  <div
                    key={index}
                    className="bg-blue-500 w-max h-full rounded-b-full"
                    style={{
                      height: `${parseInt(event.percentage)}%`,
                    }}
                  >
                    <div className="flex flex-col justify-between h-full">
                      <p className="rotate-180">{event.percentage}%</p>
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
                <p>{event.text}</p>
              </div>
            ))}
          </div>
        </Modal>
      )}
    </Grids>
  );
};

export default Language;
