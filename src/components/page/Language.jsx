import React from "react";
import data from "@/data/data.json";
import Card from "../Card";

const Language = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-3">
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
                className="bg-black h-full rounded-r-full"
                style={{ width: `${parseInt(event.percentage)}%` }}
              ></div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Language;
