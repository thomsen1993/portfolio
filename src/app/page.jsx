import Education from "@/components/page/Education";
import Jobs from "@/components/page/Jobs";
import Language from "@/components/page/Language";
import Profile from "@/components/page/Profile";
import Skills from "@/components/page/Skills";
import Image from "next/image";
import wave from "../../public/net-wave.png";

export default function Home() {
  return (
    <main>
      <Image
        src={wave}
        alt="Net wave"
        className="fixed top-1/2 -translate-y-1/2 -z-50"
      ></Image>
      <section className="max-w-[1200px] mx-auto mb-10">
        <Profile />
        <Education />
        <Jobs />
        <Skills />
        <Language />
      </section>
    </main>
  );
}
