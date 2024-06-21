"use client";

import React, { useState } from "react";
import Education from "@/components/modals/Education";
import Jobs from "@/components/modals/Jobs";
import Language from "@/components/modals/Language";
import Skills from "@/components/modals/Skills";

const File = ({ data }) => {
  const [activeSection, setActiveSection] = useState("education");

  return (
    <article className="col-span-3 backdrop-blur-sm">
      {data.buttons.slice(0, 4).map((event, index) => (
        <button
          key={index}
          onClick={() => setActiveSection(event.state)}
          className={`px-3 py-1 border-t border-l last-of-type:border-r border-borderColor rounded-t-md backdrop-blur-sm hover:text-primary hover:bg-borderColor uppercase text-sm ${
            activeSection === event.state
              ? "bg-white/50 text-primary"
              : "bg-transparent"
          }`}
        >
          {event.button}
        </button>
      ))}
      <div className="bg-gradient-to-b from-white/50 border border-borderColor shadow-xl shadow-shadowColor rounded-b-3xl py-5">
        {activeSection === "education" && <Education data={data} />}
        {activeSection === "jobs" && <Jobs data={data} />}
        {activeSection === "skills" && <Skills data={data} />}
        {activeSection === "language" && <Language data={data} />}
      </div>
    </article>
  );
};

export default File;
