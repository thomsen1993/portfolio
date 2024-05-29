"use client"

import {useState} from "react";
import Card from "../Card";
import Grids from "../Grids";
import Modal from "../Modal";
import Image from "next/image";

const Jobs = ({ data }) => {

  const [modal, setModal] = useState(false);
  const [selectedJobs, setSelectedJobs] = useState(null);

  const openModal = (jobs) => {
    setSelectedJobs(jobs);
    setModal(true);
  };

  return (
    <Grids>
      <div className="flex flex-col gap-5 max-h-[454px] overflow-hidden overflow-y-scroll px-2 mx-2">
        {data.category.jobs.map((jobs, index) => (
          <Card
            key={index}
            openModal={() => openModal(jobs)}
            title={jobs.headline}
            firma={jobs.firma}
            year={jobs.year}
            location={jobs.location}
            icon ={jobs.icon}
            data={data}
          ></Card>
        ))}
      </div>
      {modal && (
        <Modal title={selectedJobs.headline}>
          <div>
            
          </div>
        </Modal>
      )}
    </Grids>
  );
};

export default Jobs;
