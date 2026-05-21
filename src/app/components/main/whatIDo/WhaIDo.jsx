import Image from "next/image";
import { highlights, services } from "@/app/assets/items";
import TechStak from "./TechStak";
import Resume from "./Resume";

export default function AboutMe() {
  return (
    <section
      id="skills"
      className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8"
    >
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
            Skills with proof
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-5xl">
            A developer profile built around usable products.
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/70">
            I combine frontend implementation, backend understanding, and design structure to build websites and applications that are easy to understand, use, and maintain.
          </p>
          <ul className="mt-8 space-y-3">
            {highlights.map((highlight) => (
              <li
                key={highlight}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-white/82"
              >
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-lg border border-white/10 bg-white/[0.05] p-5 transition hover:border-cyan-200/40 hover:bg-white/[0.08]"
            >
              <div className="flex gap-4">
                <Image
                  src={`/${service.icon}`}
                  alt=""
                  width={56}
                  height={56}
                  className="h-12 w-12 shrink-0 object-contain"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 leading-7 text-white/70">
                    {service.description}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-pink-200">
                    {service.proof}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <TechStak />
      <Resume />
    </section>
  );
}
