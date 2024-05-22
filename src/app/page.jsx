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
    <main>
      <Image
        src={wave}
        alt="Net wave"
        className="fixed top-1/2 -translate-y-1/2 -z-50"
      />
      <section className="grid lg:grid-cols-4 gap-5 max-w-[1200px] lg:mx-auto mx-5 mb-10">
        <Profile />
        <div className="mt-5 col-span-3">
          <h2>{data.intro.title}</h2>
          <p className="pb-3">{data.intro.text1}</p>
          <p>{data.intro.text2}</p>
        </div>
        <div className="mt-10 col-span-3">
          <button
            onClick={() => setActiveSection("education")}
            className={`myButtons ${
              activeSection === "education" ? "bg-white/50 text-gray-300" : "bg-transparent"
            }`}
          >
            {data.buttons.education}
          </button>
          <button
            onClick={() => setActiveSection("jobs")}
            className={`myButtons ${
              activeSection === "jobs" ? "bg-white/50 text-gray-300" : "bg-transparent"
            }`}
          >
            {data.buttons.job}
          </button>
          <button
            onClick={() => setActiveSection("skills")}
            className={`myButtons ${
              activeSection === "skills" ? "bg-white/50 text-gray-300" : "bg-transparent"
            }`}
          >
            {data.buttons.skills}
          </button>
          <button
            onClick={() => setActiveSection("language")}
            className={`myButtons ${
              activeSection === "language" ? "bg-white/50 text-gray-300" : "bg-transparent"
            }`}
          >
            {data.buttons.language}
          </button>
          <div className="bg-gradient-to-b from-white/50 rounded-r-3xl rounded-b-3xl py-5 px-5 -z-10">
            {activeSection === "education" && <Education />}
            {activeSection === "jobs" && <Jobs />}
            {activeSection === "skills" && <Skills />}
            {activeSection === "language" && <Language />}
          </div>
        </div>
      </section>
    </main>
  );
}
