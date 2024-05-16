import Education from "@/components/page/Education";
import Jobs from "@/components/page/Jobs";
import Language from "@/components/page/Language";
import Profile from "@/components/page/Profile";
import Skills from "@/components/page/Skills";

export default function Home() {
  return (
    <main className="max-w-[1200px] mx-auto mb-10">
      <section>
        <Profile />
        <div className="border-l-4 border-double border-slate-400">
          <Education />
          <Jobs />
          <Skills />
          <Language />
        </div>
      </section>
    </main>
  );
}
