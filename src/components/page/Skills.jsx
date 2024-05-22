"use client";

import { useState } from "react";
import Card from "../Card";
import data from "@/data/data.json";
import Modal from "../Modal";
import Button from "../Button";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import Grids from "../Grids";

const Skills = () => {
  const [modal, setModal] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState(null);

  const openModal = (skills) => {
    setSelectedSkills(skills);
    setModal(true);
  };

  return (
    <Grids>
      <div className="flex flex-col gap-5 max-h-[454px] overflow-hidden overflow-y-scroll">
        {data.category.skills.map((skills) => (
          <Card key={skills.id}>
            <p className="font-bold text-center">{skills.headline[0].title}</p>
            <div onClick={() => openModal(skills)}>
              <Button>Læs mere</Button>
            </div>
          </Card>
        ))}
      </div>
      {modal && (
        <Modal>
          <h4>{selectedSkills.headline[0].title}</h4>
          <ul className="list-disc list-inside">
            <li>{selectedSkills.content}</li>
          </ul>
        </Modal>
      )}
    </Grids>
  );
};

export default Skills;
