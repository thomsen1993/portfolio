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
    <div className="pl-5 mt-5">
      <div className="group/card">
          <h3>Skills</h3>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-3 pt-2">
          {data.category.skills.map((skills, index) => (
            <Card key={index}>
              <p className="font-bold">{skills.headline}</p>
              <div onClick={() => openModal(skills)}>
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
            <h4>{selectedSkills.headline}</h4>
            <p>{selectedSkills.content}</p>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default Skills;
