import React from "react";
import Card from "../Card";
import data from "@/data/data.json";

const Jobs = () => {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-3 pt-2">
      {data.category.jobs.map((jobs, index) => (
        <Card key={index}>
          <p className="font-bold">{jobs.headline}</p>
          <p>{jobs.firma}</p>
          <p className="font-light text-end">{jobs.content}</p>
        </Card>
      ))}
    </div>
  );
};

export default Jobs;
