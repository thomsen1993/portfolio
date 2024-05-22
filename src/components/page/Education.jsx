"use client";

import { useState } from "react";
import Card from "../Card";
import data from "@/data/data.json";
import Modal from "../Modal";
import Button from "../Button";
import Grids from "../Grids";

const Education = () => {
  const [modal, setModal] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState(null);

  const openModal = (education) => {
    setSelectedEducation(education);
    setModal(true);
  };

  return (
    <Grids>
      <div className="flex flex-col gap-5">
        {data.category.education.map((education) => (
          <Card key={education.id}>
            <h4 className="">{education.headline[0].school}</h4>
            <p className="text-end">{education.headline[0].location}</p>
            <Button openModal={() => openModal(education)}>Læs mere</Button>
          </Card>
        ))}
      </div>
      {modal && (
        <Modal>
          <h4>{selectedEducation.headline[0].school}</h4>
          <ul className="list-disc list-inside">
            {selectedEducation.list.map((event, index) => (
              <li key={index}>{event.text}</li>
            ))}
          </ul>
        </Modal>
      )}
    </Grids>
  );
};

export default Education;
