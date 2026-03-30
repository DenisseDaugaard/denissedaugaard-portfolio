import ContactForm from "../contact/ContactForm"
import ProjectCard from "./ProjectCard"

export default function Projects() {
    return (
    <section className="z-50 w-[70%] mx-auto rounded-[2rem] backdrop-blur-2xl border border-pink-500/50 p-6 mt-20" id="projects">
        <ProjectCard />
    </section>
         
       )
}

//style={{backgroundImage: "url('imgs/code-bg.png')", backgroundPosition:"0", backgroundRepeat:"no-repeat"}}
//bg-[linear-gradient(238deg,rgb(54,8,39)_0%,_rgba(45,52,56,0.49)_100%)]