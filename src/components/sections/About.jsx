"use client";

import React, { useState } from "react";

export const About = ({ data }) => {
  const [more, setMore] = useState(2);

  return (
    <section className="col-span-3">
      <h2>{data.intro.title}</h2>
      {data.intro.text.slice(0, more).map((text) => (
        <>
          <p className="pb-3" key={text.id}>
            {text.paragraph}
          </p>
        </>
      ))}
          <button
            className="w-full border border-borderColor rounded-b-3xl"
            onClick={() => setMore(more === 2 ? data.intro.text.length : 2)}
          >
            {more === 2 ? data.buttons[5].button : data.buttons[5].state}
          </button>
    </section>
  );
};
