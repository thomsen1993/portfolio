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
      <section className="max-w-[1200px] mx-auto mb-10">
        <Profile />
        <div>
          <button
            onClick={() => setActiveSection("education")}
            className={`myButtons ${
              activeSection === "education" ? "border border-b-0" : "border"
            }`}
          >
            {data.buttons.education}
          </button>
          <button
            onClick={() => setActiveSection("jobs")}
            className={`myButtons ${
              activeSection === "jobs" ? "border-t border-b-0 border-r" : "border-t border-b border-r"
            }`}
          >
            {data.buttons.job}
          </button>
          <button
            onClick={() => setActiveSection("skills")}
            className={`myButtons ${
              activeSection === "skills" ? "border-t border-b-0 border-r" : "border-t border-b border-r"
            }`}
          >
            {data.buttons.skills}
          </button>
          <button
            onClick={() => setActiveSection("language")}
            className={`myButtons ${
              activeSection === "language" ? "border-t border-b-0 border-r" : "border-t border-b border-r"
            }`}
          >
            {data.buttons.language}
          </button>
        </div>
        <div className="border-b border-x p-5">
          {activeSection === "education" && <Education />}
          {activeSection === "jobs" && <Jobs />}
          {activeSection === "skills" && <Skills />}
          {activeSection === "language" && <Language />}
        </div>
      </section>
    </main>
  );
}
