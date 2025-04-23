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
          src="/JobNest-SS.png"
          title="JobNest"
          link="https://job-nest-nu.vercel.app"
          description="Built with Next.js 15, TypeScript, TailwindCSS, and Shadcn UI, JobNest offers secure authentication, custom onboarding for job seekers and organizations, and powerful job post management with CRUD, rich text editing (Tiptap), salary sliders, image uploads, and expiration logic. It integrates Stripe for payments, uses Inngest for automated job summaries, and applies Arcjet security for protection against XSS and SQL injection. Features include favorites, filtering, pagination, rate limiting, and a responsive, performance-optimized UI—deployed on Vercel."
        />
        <ProjectCard
          src="/ShedCal.png"
          title="ShedCal"
          link="https://sched-cal.vercel.app"
          description="SchedCal is a powerful and fully customizable scheduling app that integrates seamlessly with the Nylas Calendar API, offering users the ability to create, cancel, and search for meetings effortlessly. With its rich set of features, including real-time availability updates, OAuth authentication, custom booking forms, and a beautifully designed responsive interface.s"
        />
        <ProjectCard
          src="/CardImage.png"
          link="https://weatherapp-rupesh-khadkas-projects.vercel.app"
          title="School Website"
          description="Discover my portfolio on the official NVM school website — a dynamic platform showcasing my work and accomplishments. Features include an interactive gallery with full CRUD functionality, downloadable notices with real-time pop-up alerts, and a modern, SEO-optimized design. Built for performance, accessibility, and user engagement, this project reflects
"
        />
        <ProjectCard
          src="/WeatherApp.png"
          link="https://weatherapp-rupesh-khadkas-projects.vercel.app"
          title="Weather app"
          description="A sleek weather application built with TypeScript and Next.js, powered by the OpenWeather API. This app provides real-time weather data with dynamic background transitions that visually reflect current conditions - from sunny skies to stormy nights. Designed with a responsive UI and performance-first architecture, it delivers an engaging and informative user experience."
        />
      </div>
    </section>
  );
};

export default Projects;
