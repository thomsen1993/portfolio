"use client";

import { useState } from "react";
import Card from "../Card";
import data from "../../../public/data/data.json";
import Modal from "../Modal";
import {
  TbBrandJavascript,
  TbBrandTypescript,
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandTailwind,
  TbBrandNpm,
  TbApiApp,
  TbBrandNextjs,
  TbBrandGithub,
  TbBrandFigma,
} from "react-icons/tb";
import { FaNode } from "react-icons/fa";
import { SiWebpack } from "react-icons/si";
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
          >
            <div className="flex justify-center gap-2">
              {skills.headline[0].icon.map((icon, index) => (
                <div
                  key={index}
                  className="text-4xl border border-borderColor rounded-md p-2 mb-2 relative overflow-hidden"
                >
                  {(icon.name === "TbBrandJavascript" && <TbBrandJavascript />) ||
                    (icon.name === "TbBrandTypescript" && <TbBrandTypescript />) ||
                    (icon.name === "TbBrandHtml5" && <TbBrandHtml5 />) ||
                    (icon.name === "TbBrandCss3" && <TbBrandCss3 />) ||
                    (icon.name === "TbBrandTailwind" && <TbBrandTailwind />) ||
                    (icon.name === "FaNode" && <FaNode />) ||
                    (icon.name === "TbBrandNpm" && <TbBrandNpm />) ||
                    (icon.name === "SiWebpack" && <SiWebpack />) ||
                    (icon.name === "TbApiApp" && <TbApiApp />) ||
                    (icon.name === "TbBrandNextjs" && <TbBrandNextjs />) ||
                    (icon.name === "TbBrandGithub" && <TbBrandGithub />) ||
                    (icon.name === "TbBrandFigma" && <TbBrandFigma />)}
                    <div className="absolute -top-[10px] -left-[60px] bg-white/30 w-[100px] h-3 -rotate-45 group-hover:shine"></div>
                </div>
              ))}
            </div>
          </Card>
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
