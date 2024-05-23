"use client";

import { useState } from "react";
import Card from "../Card";
import data from "@/data/data.json";
import Modal from "../Modal";
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
      <div className="flex flex-col gap-5 max-h-[454px] overflow-hidden overflow-y-scroll px-2 mx-2">
        {data.category.skills.map((skills) => (
          <Card
            key={skills.id}
            openModal={() => openModal(skills)}
            title={skills.headline[0].title}
          />
        ))}
      </div>
      {modal && (
        <Modal
          title={selectedSkills.headline[0].title}
          li={selectedSkills.list}
        />
      )}
    </Grids>
  );
};

export default Skills;
