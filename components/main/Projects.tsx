import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 ">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Food Delivery app"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, purus eu venenatis sagittis, nisi leo ullamcorper eros, vitae scelerisque nisl lectus non erat."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Expense Tracker"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, purus eu venenatis sagittis, nisi leo ullamcorper eros, vitae scelerisque nisl lectus non erat."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Modern NextJs portfolio"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, purus eu venenatis sagittis, nisi leo ullamcorper eros, vitae scelerisque nisl lectus non erat."
        />
      </div>
    </div>
  );
};

export default Projects;
