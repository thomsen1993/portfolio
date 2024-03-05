import React from "react";
import Card from "../Card";
import data from "@/data/data.json";
import SubTitles from "../SubTitles";

const Jobs = () => {
  return (
    <div className="pl-5 mt-5">
      <div className="group/card">
        <SubTitles>
          <h3 className="">Jobs</h3>
          </SubTitles>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-3 pt-2">
          {data.category.jobs.map((jobs, index) => (
            <Card key={index}>
              <p className="font-bold">{jobs.headline}</p>
              <p>{jobs.firma}</p>
              <p className="font-light text-end">{jobs.content}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
