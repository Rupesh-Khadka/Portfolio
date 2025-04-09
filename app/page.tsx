import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Hire from "@/components/main/Hire";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className="h-full w-fll">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        <Hire />
      </div>
    </main>
  );
}
