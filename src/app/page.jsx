"use client";

import React, { useState } from "react";
import data from "@/data/data.json";
import Education from "@/components/page/Education";
import Jobs from "@/components/page/Jobs";
import Language from "@/components/page/Language";
import Profile from "@/components/page/Profile";
import Skills from "@/components/page/Skills";
import Image from "next/image";
import wave from "../../public/net-wave.png";

export default function Home() {
  const [activeSection, setActiveSection] = useState("education");

  return (
    <>
      <figure className="fixed top-1/2 -translate-y-1/2 -z-50">
        <Image src={wave} alt="Net wave" />
      </figure>
      <main className="grid lg:grid-cols-4 gap-5 lg:max-w-[1200px] lg:mx-auto mx-5 my-5 sm:my-10">
        <Profile />
        <section className="col-span-3">
          <h2>{data.intro.title}</h2>
          <p className="pb-3">{data.intro.text1}</p>
          <p>{data.intro.text2}</p>
        </section>
        <article className="col-span-3">
          {data.buttons.map((event, index) => (
            <button
              key={index}
              onClick={() => setActiveSection(event.state)}
              className={`myButtons ${
                activeSection === event.state
                  ? "bg-white/50 text-primary transition"
                  : "bg-transparent"
              }`}
            >
              {event.button}
            </button>
          ))}
          <div className="bg-gradient-to-b from-white/50 border border-borderColor shadow-xl shadow-shadowColor rounded-b-3xl py-5">
            {activeSection === "education" && <Education />}
            {activeSection === "jobs" && <Jobs />}
            {activeSection === "skills" && <Skills />}
            {activeSection === "language" && <Language />}
          </div>
        </article>
      </main>
    </>
  );
}
