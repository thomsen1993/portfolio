import React from "react";
import data from "@/data/data.json";
import Card from "../Card";
import Grids from "../Grids";

const Language = () => {
  return (
    <Grids>
      <div  className="flex flex-col gap-5">
        {data.category.languages.map((event, index) => (
          <Card key={index}>
            <p className="font-bold">{event.title}</p>
            <div className="border h-6 w-full rounded-r-full relative">
              <p
                className="font-bold text-center absolute w-full"
                style={{ color: `${event.color}` }}
              >
                {event.degree}
              </p>
              <div
                className="bg-slate-300 h-full rounded-r-full"
                style={{ width: `${parseInt(event.percentage)}%` }}
              ></div>
            </div>
          </Card>
        ))}
      </div>
    </Grids>
  );
};

export default Language;
