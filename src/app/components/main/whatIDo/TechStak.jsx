import { techs } from "@/app/assets/items"
import Image from "next/image"

export default function TechStak(){
    return(
        <section className="w-full">
            <h1 className="text-2xl font-semibold text-center my-10">What I use 🛠️</h1>
         <section className="grid grid-cols-2 lg:grid-cols-5 mx-20 gap-4 mt-8">
            {techs.map((tech) => (
                <div key={tech.title} className="border border-white/20 bg-white/20 rounded-lg p-4 flex flex-col items-center gap-2">
                    <Image src={tech.icon} alt={tech.title} width={80} height={80} className="h-8 w-8 object-contain" /> 
                    <span className="text-sm text-white/90">{tech.title}</span>
                </div>
            ))}
         </section>
        </section>
    )
}