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
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-3 pt-2 relative before:content-[''] before:absolute before:-right-20 before:-top-10 before:bg-slate-200 before:w-52 before:h-52 before:rounded-full before:blur-sm">
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
