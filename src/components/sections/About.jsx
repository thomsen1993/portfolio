import React from "react";
import data from "../../../public/data/data.json";

export const About = () => {
  return (
    <section className="col-span-3">
      <h2>{data.intro.title}</h2>
      <p className="pb-3">{data.intro.text1}</p>
      <p>{data.intro.text2}</p>
    </section>
  );
};
