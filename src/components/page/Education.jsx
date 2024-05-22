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
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
      <div>
        {data.category.education.map((education) => (
          <Card key={education.id}>
            <p className="font-bold">{education.headline[0].school}</p>
            <p className="text-end">{education.headline[0].location}</p>
            <div onClick={() => openModal(education)}>
              <Button>Læs mere</Button>
            </div>
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
    </div>
  );
};

export default Education;
