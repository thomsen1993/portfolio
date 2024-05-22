"use client";

import { useState } from "react";
import Card from "../Card";
import data from "@/data/data.json";
import Modal from "../Modal";
import Button from "../Button";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";

const Skills = () => {
  const [modal, setModal] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState(null);

  const openModal = (skills) => {
    setSelectedSkills(skills);
    setModal(true);
  };

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
      <div>
        {data.category.skills.map((skills) => (
          <Card key={skills.id}>
            <p className="font-bold">{skills.headline}</p>
            <div onClick={() => openModal(skills)}>
              <Button>Læs mere</Button>
            </div>
          </Card>
        ))}
      </div>
      {modal && (
        <Modal>
          <h4>{selectedSkills.headline}</h4>
          <ul className="list-disc list-inside">
            <li>{selectedSkills.content}</li>
          </ul>
        </Modal>
      )}
    </div>
  );
};

export default Skills;
