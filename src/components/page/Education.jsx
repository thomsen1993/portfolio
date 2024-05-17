"use client";

import { useState } from "react";
import Card from "../Card";
import data from "@/data/data.json";
import Modal from "../Modal";
import Button from "../Button";

const Education = () => {
  const [modal, setModal] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState(null);

  const openModal = (education) => {
    setSelectedEducation(education);
    setModal(true);
  };

  return (
    <div className="pl-5 mt-5">
      <div className="pb-5">
        <p className="pb-3">{data.intro.text1}</p>
        <p>{data.intro.text2}</p>
      </div>
      <div className="group/card">
          <h3>Uddannelse</h3>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-3 pt-2 ">
          {data.category.education.map((education, index) => (
            <Card key={index}>
              <p className="font-bold">{education.headline[0].school}</p>
              <p className="text-end">{education.headline[0].location}</p>
              <div onClick={() => openModal(education)}>
                <Button>Læs mere</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
      {modal && (
        <div
          className="fixed top-0 right-0 w-full h-full backdrop-blur-md z-50"
          onClick={() => setModal(false)}
        >
          <Modal>
            <h4>{selectedEducation.headline[0].school}</h4>
            <p>{selectedEducation.text}</p>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default Education;
