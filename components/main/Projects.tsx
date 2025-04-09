import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { SparklesIcon } from "@heroicons/react/24/solid";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-10">
        <ProjectCard
          src="/ShedCal.png"
          title="ShedCal"
          link="https://weatherapp-rupesh-khadkas-projects.vercel.app"
          description="SchedCal is a powerful and fully customizable scheduling app that integrates seamlessly with the Nylas Calendar API, offering users the ability to create, cancel, and search for meetings effortlessly. With its rich set of features, including real-time availability updates, OAuth authentication, custom booking forms, and a beautifully designed responsive interface.s"
        />
        <ProjectCard
          src="/CardImage.png"
          link="https://weatherapp-rupesh-khadkas-projects.vercel.app"
          title="Expense Tracker"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, purus eu venenatis sagittis, nisi leo ullamcorper eros, vitae scelerisque nisl lectus non erat."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          link="https://weatherapp-rupesh-khadkas-projects.vercel.app"
          title="Modern NextJs portfolio"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, purus eu venenatis sagittis, nisi leo ullamcorper eros, vitae scelerisque nisl lectus non erat."
        />
        <ProjectCard
          src="/WeatherApp.png"
          link="https://weatherapp-rupesh-khadkas-projects.vercel.app"
          title="Weather app"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, purus eu venenatis sagittis, nisi leo ullamcorper eros, vitae scelerisque nisl lectus non erat."
        />
      </div>
    </section>
  );
};

export default Projects;
