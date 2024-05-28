import React from "react";
import Card from "../Card";
import data from "../../../public/data/data.json";
import Grids from "../Grids";

const Jobs = () => {
  return (
    <Grids>
      <div className="flex flex-col gap-5 max-h-[454px] overflow-hidden overflow-y-scroll px-2 mx-2">
        {data.category.jobs.map((jobs, index) => (
          <Card
            key={index}
            title={jobs.headline}
            firma={jobs.firma}
            year={jobs.year}
            location={jobs.location}
            icon ={jobs.icon}
          ></Card>
        ))}
      </div>
    </Grids>
  );
};

export default Jobs;
