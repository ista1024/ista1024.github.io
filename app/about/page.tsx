import Header from "@/components/header";
import { SiNextdotjs, SiReact, SiMongodb, SiTailwindcss, SiTypescript } from "react-icons/si";
import { BrainCircuit, Code2, Bot, Sparkles, Database, Layout, Server } from "lucide-react";
import profilePictureAni from "@/public/images/profile/github_profile_ani_1.png";
import Image from "next/image";
import AnimatedText from "@/components/animatedText";

export default function About() {
  const techStack = [
    {
      category: "Frontend Architecture",
      icon: <Layout className="w-6 h-6 text-blue-400" />,
      items: [
        { icon: <SiNextdotjs className="w-8 h-8" />, name: "Next.js", desc: "App Router, Server Actions, and optimal SSR/SSG." },
        { icon: <SiReact className="w-8 h-8" />, name: "React", desc: "Server and Client Components architecture." },
        { icon: <SiTailwindcss className="w-8 h-8" />, name: "Tailwind CSS", desc: "Utility-first, heavily customized design system." },
      ]
    },
    {
      category: "Backend & Database",
      icon: <Server className="w-6 h-6 text-green-400" />,
      items: [
        { icon: <SiMongodb className="w-8 h-8" />, name: "MongoDB", desc: "Flexible NoSQL document storage for scalability." },
        { icon: <Database className="w-8 h-8" />, name: "Mongoose", desc: "Strict schema validation and complex query building." },
        { icon: <SiTypescript className="w-8 h-8" />, name: "TypeScript", desc: "End-to-end type safety across API routes." },
      ]
    }
  ];

  const aiWorkflows = [
    {
      title: "AI-Powered Ideation",
      description: "Implemented a Project Idea Generator using LLMs to convert abstract concepts into structured roadmaps, architectures, and automated task breakdowns.",
      icon: <BrainCircuit className="w-10 h-10 text-purple-400" />
    },
    {
      title: "Generative UI & Streaming",
      description: "Utilized Vercel AI SDK to stream responses directly to the client, providing a fluid, real-time feedback loop without loading spinners.",
      icon: <Sparkles className="w-10 h-10 text-yellow-400" />
    },
    {
      title: "Agentic Engineering Workflow",
      description: "Collaborated deeply with AI assistants to rapidly prototype components, debug complex state issues, and iterate on premium UI/UX designs.",
      icon: <Bot className="w-10 h-10 text-cyan-400" />
    }
  ];

  return (
    <main className="min-h-screen pb-20 overflow-x-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <Header title={"Engineering & Architecture"} />

        {/* Hero Section */}
        <section className="relative flex flex-col md:flex-row w-full items-center justify-between mt-12 mb-24 gap-12">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[600px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />

          <div className="md:w-1/2 z-10 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-blue-300 mb-4 animate-[fade-in-up_0.5s_ease-out]">
              <Code2 className="w-4 h-4" />
              <span>Full Stack Developer</span>
            </div>
            <AnimatedText
              text={"Translating Complex Requirements Into Scalable Reality"}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-black via-black to-black/40 dark:from-white dark:via-white dark:to-white/40 leading-tight lg:p-2 p-1"
              interval={40}
            />
            <p className="text-lg text-muted-foreground mt-6 leading-relaxed animate-[fade-in-up_0.5s_ease-out_0.5s_both]">
              I build modern, high-performance web applications with a focus on premium user experiences, robust cloud architecture, and cutting-edge AI integration.
            </p>
          </div>
          <div className="md:w-1/2 w-full max-w-md relative z-10 animate-[fade-in-up_0.5s_ease-out_0.2s_both]">
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-background/20 to-transparent z-10" />
              <Image
                src={profilePictureAni}
                alt="Developer Profile"
                className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-8 left-8 z-20">
                <h3 className="text-3xl font-bold tracking-tight">Yong</h3>
                <p className="text-blue-500 font-medium mt-1">Software Engineer</p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Workflow Section */}
        <section className="py-20 border-t border-white/10 relative">
          <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">How I Use AI in this Project</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Artificial Intelligence isn't just a buzzword; it's a core component of this application's architecture and my daily development workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiWorkflows.map((workflow, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.2)] animate-[fade-in-up_0.5s_ease-out_both]"
                style={{ animationDelay: `${0.5}s` }}
              >
                <div className="mb-6 p-4 rounded-xl bg-background/50 inline-block border border-white/5 group-hover:scale-110 transition-transform duration-500">
                  {workflow.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{workflow.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {workflow.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-20 border-t border-white/10 relative">
          <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Technical Architecture</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A carefully selected modern stack designed for scalability,<br /> type-safety, and developer velocity.
            </p>
          </div>

          <div className="space-y-12 max-w-5xl mx-auto">
            {techStack.map((stack, idx) => (
              <div key={idx} className="space-y-6">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  {stack.icon}
                  <h3 className="text-2xl font-semibold">{stack.category}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {stack.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="group flex items-start gap-4 p-6 rounded-xl border-black/10 transition-all duration-300 dark:border-white/10 dark:bg-gradient-to-b dark:from-white/5 dark:to-transparent border dark:border-white/10 hover:border-blue-500/30 hover:-translate-y-1"
                    >
                      <div className="mt-1 text-muted-foreground/80 transition-all duration-300 group-hover:text-blue-400 group-hover:scale-110">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">{item.name}</h4>
                        <p className="text-sm text-muted-foreground dark:text-white/50 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
