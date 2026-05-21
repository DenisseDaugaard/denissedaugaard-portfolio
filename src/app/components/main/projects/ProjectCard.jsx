import RevealOnScroll from "./RevealOnScroll";
import { projects } from "@/app/assets/items";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard() {
  return (
    <section className="scroll-mt-24">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
            Selected work
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-5xl">
            Projects that show how I think and build
          </h2>
        </div>
        <p className="max-w-xl leading-7 text-white/65">
          Each project highlights a practical product skill: data fetching, booking flows, mobile UX, e-commerce, or search-oriented interfaces.
        </p>
      </div>

      <section className="mt-10 grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <RevealOnScroll key={project.title} delay={index * 120}>
            <Link
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-pink-200/45 hover:bg-white/[0.07]"
            >
              <div className="flex min-h-16 items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-cyan-200">
                    {project.role}
                  </p>
                </div>
                <Image
                  src={project.logoUrl}
                  alt=""
                  width={96}
                  height={64}
                  className="max-h-12 w-24 object-contain object-right opacity-90 transition group-hover:opacity-100"
                />
              </div>

              <p className="mt-5 text-lg font-semibold leading-7 text-white/90">
                {project.summary}
              </p>
              <p className="mt-3 flex-1 leading-7 text-white/65">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-white/10 px-3 py-1 text-xs font-semibold text-white/75"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="text-sm leading-6 text-pink-100/85">
                  {project.impact}
                </p>
              </div>
            </Link>
          </RevealOnScroll>
        ))}
      </section>
    </section>
  );
}
