import React from "react";
import Card from "../Card";
import data from "@/data/data.json";
import Grids from "../Grids";

const Jobs = () => {
  return (
    <Grids>
      <div className="flex flex-col gap-5 max-h-[454px] overflow-hidden overflow-y-scroll">
        {data.category.jobs.map((jobs, index) => (
          <Card key={index}>
            <p className="font-bold text-center">{jobs.headline}</p>
            <p>{jobs.firma}</p>
            <p>{jobs.year}</p>
            <p className="font-light text-end">{jobs.location}</p>
          </Card>
        ))}
      </div>
    </Grids>
  );
};

export default Jobs;
