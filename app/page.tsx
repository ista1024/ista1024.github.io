"use client";
import LetterAnimation from "../components/letterAnimation";
import { FaLinkedin, FaGithub, FaEnvelope, FaCode, FaMobile, FaRocket, FaUsers } from "react-icons/fa";
import { SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiMongodb, SiNodedotjs } from "react-icons/si";
import { useEffect, useState } from "react";

const skills = [
  { icon: <SiReact className="h-8 w-8" />, name: "React", level: "Expert" },
  { icon: <SiNextdotjs className="h-8 w-8" />, name: "Next.js", level: "Advanced" },
  { icon: <SiTypescript className="h-8 w-8" />, name: "TypeScript", level: "Advanced" },
  { icon: <SiJavascript className="h-8 w-8" />, name: "JavaScript", level: "Expert" },
  { icon: <SiReact className="h-8 w-8" />, name: "React Native", level: "Advanced" },
  { icon: <SiTailwindcss className="h-8 w-8" />, name: "Tailwind CSS", level: "Expert" },
  { icon: <SiMongodb className="h-8 w-8" />, name: "MongoDB", level: "Intermediate" },
  { icon: <SiNodedotjs className="h-8 w-8" />, name: "Node.js", level: "Advanced" },
];

const highlights = [
  {
    icon: <FaCode className="h-6 w-6" />,
    title: "Full-Stack Development",
    description: "Specializing in javascript and front-end optimization with a passion for clean, efficient code."
  },
  {
    icon: <FaMobile className="h-6 w-6" />,
    title: "User Experience",
    description: "Passionate about building user-friendly interfaces and leveraging technology to create impactful solutions."
  },
  {
    icon: <FaRocket className="h-6 w-6" />,
    title: "Innovation Driven",
    description: "Eager to contribute to innovative projects and continue learning within a collaborative team environment."
  },
  {
    icon: <FaUsers className="h-6 w-6" />,
    title: "Team Collaboration",
    description: "Thriving in collaborative environments, bringing creativity and problem-solving skills to every project."
  },
];

export default function Home() {
  const [isLoad, setIsLoad] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoad(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="container">
      {/* Hero Section */}
      <section className="relative w-full mb-16 mt-8 py-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-3xl rounded-full opacity-50 animate-pulse" />
        <div className={`relative z-10 text-center transition-all duration-1000 ${!isLoad ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0"}`}>
          <div className="inline-block mb-4">
            <span className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              Hello, I'm Yong
            </span>
          </div>
          <div className="mt-4 mb-6">
            <LetterAnimation />
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mt-6 leading-relaxed">
            A passionate <span className="font-semibold text-foreground">Full-Stack Developer</span>
            <br />
            specializing in javascript with front-end optimization.
            <br />
            Transforming ideas into exceptional digital experiences.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="w-full mb-16">
        <div className={`relative z-10 text-center transition-all duration-1000 ${!isLoad ? "opacity-0 -translate-x-10" : "opacity-100 translate-x-0"}`}>
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-md p-6 shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/30 hover:border-blue-400/50 cursor-pointer skill-card `}
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent dark:from-white/10 pointer-events-none rounded-2xl" />
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl pointer-events-none`} />

                <div className="relative z-10 flex flex-col items-center justify-center space-y-3">
                  <div className={`transition-transform duration-300 ${hoveredSkill === index ? "scale-125 rotate-6" : "scale-100"}`}>
                    {skill.icon}
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-sm md:text-base">{skill.name}</h3>
                    {/* <p className="text-xs text-muted-foreground mt-1">{skill.level}</p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="w-full mb-16">
        <div className={`relative z-10 text-center transition-all duration-1000 ${!isLoad ? "opacity-0 translate-x-10" : "opacity-100 translate-x-0"}`}>
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            What I Bring
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 dark:from-white/5 dark:to-white/[0.02] backdrop-blur-md p-8 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-400/30 highlight-card }`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {highlight.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full max-w-2xl mx-auto">
        <div className={`text-center transition-all duration-1000 ${!isLoad ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Open to opportunities and collaborations
          </p>
          <div className="flex justify-center items-center gap-6">
            <a
              href="https://www.linkedin.com/in/yong-tae-kim-658572244/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin className="w-7 h-7 text-white" />
              <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="https://github.com/ista1024/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-14 h-14 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-gray-500/50 transition-all duration-300 hover:scale-110"
            >
              <FaGithub className="w-7 h-7 text-white" />
              <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="mailto:ista1024.app@gmail.com"
              className="group relative w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-110"
            >
              <FaEnvelope className="w-7 h-7 text-white" />
              <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
