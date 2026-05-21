import { techGroups, techs } from "@/app/assets/items";
import Image from "next/image";

export default function TechStak() {
  return (
    <section className="mt-20 border-t border-white/10 pt-12">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-pink-200">
            Stack
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white">
            Tools I use to ship work
          </h2>
        </div>
        <p className="max-w-xl leading-7 text-white/65">
          The icons show the core tools; the groups show how I use them across product work.
        </p>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {techs.map((tech) => (
          <div
            key={tech.title}
            className="flex min-h-24 items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-4"
          >
            <Image
              src={`/${tech.icon}`}
              alt=""
              width={48}
              height={48}
              className="h-9 w-9 object-contain"
            />
            <span className="font-semibold text-white/86">{tech.title}</span>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {techGroups.map((group) => (
          <article
            key={group.title}
            className="rounded-lg border border-cyan-200/15 bg-cyan-200/[0.05] p-5"
          >
            <h3 className="text-lg font-bold text-cyan-100">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-white/10 px-3 py-1 text-sm text-white/78"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
