"use client";
import Link from 'next/link'
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function About() {
  return (
    <div className="contents">
      <header className="w-full flex jusify-center items-center flex-col">
        <h1 className="head_text">Hello there!</h1>
        <p className="desc mt-5 text-pre">
          I'm Yong, a passionate frontend developer with expertise in JavaScript, Typescript, and React.js.
          I excel in translating UI/UX designs into efficient applications, delivering high-quality code and exceptional user experiences.
          With a focus on continuous improvement, I thrive in collaborative environments, bringing creativity and problem-solving skills to every project.
          Let's create remarkable digital experiences together!
        </p>
        <div className="mt-5 flex jusify-center items-center flex-row gap-5">
          <Link
            href="https://www.linkedin.com/in/yong-tae-kim-658572244/"
            passHref={true}
            className="rounded-full hover:border w-10 h-10 flex jusify-center items-center p-2"
          >
            <FaLinkedin className="w-6 h-6" />
          </Link>
          <a
            href="https://github.com/ista1024/"
            target="blank"
            className="rounded-full hover:border w-10 h-10 flex jusify-center items-center p-2"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="mailto:ista1024.app@gmail.com"
            className="rounded-full hover:border w-10 h-10 flex jusify-center items-center p-2"
          >
            <FaEnvelope className="w-6 h-6" />
          </a>
        </div>
      </header>
    </div >
  )
}
