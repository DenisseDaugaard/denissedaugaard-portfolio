export default function TypedText() {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8">
      <div className="max-w-3xl">
        <p className="mb-5 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100">
          Web developer
        </p>
        <h1 className="text-4xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
          I build clean, responsive web products with frontend polish and backend logic.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
          Hi, I am Denisse Daugaard. I create React and Next.js interfaces, connect them to real data, and shape them into practical digital experiences.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-lg bg-cyan-300 px-5 py-3 font-bold text-slate-950 transition hover:bg-white"
          >
            View projects
          </a>
          <a
            href="/portfolio/Denisse_Daugaard_CV.pdf"
            target="_blank"
            className="inline-flex items-center justify-center rounded-lg border border-white/25 px-5 py-3 font-bold text-white transition hover:border-cyan-200 hover:text-cyan-100"
          >
            Open CV
          </a>
        </div>
      </div>

      <aside className="border-l border-white/15 pl-6 text-white/80">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-pink-200">
          Current focus
        </p>
        <ul className="mt-5 space-y-4 text-base leading-7">
          <li>Frontend roles where design quality and component thinking matter.</li>
          <li>Projects with real API data, CRUD flows, forms, and user journeys.</li>
          <li>Accessible, responsive interfaces that feel smooth on every screen.</li>
        </ul>
      </aside>
    </section>
  )
}
