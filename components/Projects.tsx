"use client";

import { projects } from "@/data";
import { Sparkle } from "./ui/Sparkle";
import Reveal from "./ui/Reveal";

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <Reveal>
        <h3>
          Recent{" "}
          <span className="bg-gradient-to-r from-purple to-red-700 bg-clip-text text-transparent">
            projects.
          </span>
        </h3>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-20">
        {projects.map((item) => (
          <Sparkle
            key={item.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            className="flex-col text-left p-3 md:p-5 lg:p-10 gap-5 min-h-full"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <p className="text-lg lg:text-3xl font-bold">{item.title}</p>
                <div className="flex gap-2">
                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer"
                    >
                      <img
                        src="assets/git.svg"
                        alt="GitHub"
                        className="min-w-8 transform transition-all duration-300 ease-in-out hover:scale-110 hover:fill-red-600"
                      />
                    </a>
                  )}
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer"
                    >
                      <img
                        src="assets/link.svg"
                        alt="External link"
                        className="min-w-8 transform transition-all duration-300 ease-in-out hover:scale-110 hover:fill-red-600"
                      />
                    </a>
                  )}
                </div>
              </div>
              <p className="font-extralight text-sm md:text-base opacity-70">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.techs?.map((tech) => (
                  <div
                    key={tech}
                    className="bg-white/10 text-sm font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-white/20 transition duration-200 ease-in-out"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </Sparkle>
        ))}
      </div>
    </section>
  );
};

export default Projects;
