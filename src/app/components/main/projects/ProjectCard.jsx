import RevealOnScroll from "./RevealOnScroll"
import {projects} from "@/app/assets/items"
import Image from "next/image"
import Link from "next/link"

export default function ProjectCard() {
    return (
        <section id="projects" className="scroll-mt-24 py-20 w-[80%] mx-auto">
  {/* <RevealOnScroll> */}
   <h1 className="text-3xl font-bold text-center mb-12 text-red-400"> My Projects</h1>
  {/* </RevealOnScroll> */}

  <section className="grid gap-12 md:grid-cols-2">
    {projects.map((project, index) => (
      <RevealOnScroll key={index} delay={index * 150}>
        <Link href={`${project.href}`} 
        target="_blank"
        rel="noopener noreferrer" 
        className="inline-block rounded-2xl overflow-hidden shadow-lg bg-white/20 backdrop-blur-xl border border-pink-500/50 lg:h-[18rem] p-6 hover:scale-105 transition-transform">
          <div className="flex items-center justify-between gap-4 mb-6">
            <h2 className="text-2xl font-semibold text-red-400">{project.title}</h2>
             <Image    
              src={project?.logoUrl? project.logoUrl : ""}
              alt={project.title}
              width={100}
              height={100}  
              className="h-10"
            />
          </div>
            <p className="text-gray-300">{project.description}</p>
        </Link>
      </RevealOnScroll>
    ))}
  </section>
</section>
    )
}
