import React from "react";
import data from "@/data/data.json";
import Card from "../Card";
import SubTitles from "../SubTitles";

const Language = () => {
  return (
    <div className="pl-5 mt-5">
      <div className="group/card">
        <SubTitles>
          <h3>Sprog</h3>
        </SubTitles>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-3 pt-2">
          {data.category.languages.map((event, index) => (
            <Card key={index}>
              <p className="font-bold">{event.title}</p>
              <span className="font-light">{event.degree}</span>
              <p>{event.firma}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Language;
