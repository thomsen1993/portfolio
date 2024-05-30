import React from "react";

export const About = ({ data }) => {
  return (
    <section className="col-span-3">
      <h2>{data.intro.title}</h2>
      {data.intro.text.map(text => (
        <>
          <p className="pb-3" key={text.id}>{text.paragraph}</p>
        </>
      ))}
    </section>
  );
};
