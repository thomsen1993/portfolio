"use client";

import { useState } from "react";
import Card from "../Card";
// import data from "../../../public/data/data.json";
import Modal from "../Modal";
import Grids from "../Grids";

const Education = ({ data }) => {
  const [modal, setModal] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState(null);

  const openModal = (education) => {
    setSelectedEducation(education);
    setModal(true);
  };

  return (
    <Grids>
      <div className="flex flex-col gap-5 max-h-[454px] overflow-hidden overflow-y-scroll px-2 mx-2">
        {data.category.education.map((education) => (
          <Card
            key={education.id}
            openModal={() => openModal(education)}
            title={education.headline[0].school}
            location={education.headline[0].location}
            icon={education.headline[0].icon}
            degree={education.headline[0].degree}
            year={education.headline[0].year}
            data={data}
          />
        ))}
      </div>
      {modal && (
        <Modal
          src={selectedEducation.image.src}
          srcLogo={selectedEducation.image.srcLogo}
          title={selectedEducation.headline[0].school}
          li={selectedEducation.list}
        />
      )}
    </Grids>
  );
};

export default Education;
