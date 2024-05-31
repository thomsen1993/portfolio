"use client";

import { useState } from "react";
import Card from "../Card";
import Grids from "../Grids";
import Modal from "../Modal";
import { RiSpeakFill } from "react-icons/ri";
import { FaBookOpenReader } from "react-icons/fa6";
import { TfiWrite } from "react-icons/tfi";

const Language = ({ data }) => {
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
            data={data}
          ></Card>
        ))}
      </div>
      {modal && (
        <Modal title={selectedLang.title}>
          {selectedLang.bar.map((event, index) => (
            <div className="border-b border-borderColor last-of-type:border-none pb-2 px-6 mb-2" key={index}>
              <p>{event.text}</p>
              <div className="border border-borderColor w-full rounded-r-full my-2">
                <div
                  className="bg-blue-500 rounded-r-full"
                  style={{
                    width: `${parseInt(event.percentage)}%`,
                    transition: "width .7s",
                  }}
                >
                  <div className="flex justify-between py-1 px-2">
                    <p className="">{event.percentage}%</p>
                    <div className="text-xl">
                      {event.icon === "RiSpeakFill" && (
                        <RiSpeakFill className="" />
                      )}
                      {event.icon === "FaBookOpenReader" && (
                        <FaBookOpenReader className="" />
                      )}
                      {event.icon === "TfiWrite" && <TfiWrite className="" />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Modal>
      )}
    </Grids>
  );
};

export default Language;
