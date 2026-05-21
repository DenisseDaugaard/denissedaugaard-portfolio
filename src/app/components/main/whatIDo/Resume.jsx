import Image from "next/image";
import { FaCloudDownloadAlt, FaEye } from "react-icons/fa";

export default function Resume() {
  return (
    <section className="mt-20 grid gap-8 rounded-lg border border-white/10 bg-white/[0.04] p-6 lg:grid-cols-[1fr_280px] lg:items-center lg:p-8">
      <section>
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-pink-200">
          Resume
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white">
          Ready for a junior web developer role
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-white/70">
          Freshly graduated web developer focused on modern frontend and backend technologies. I am looking for a position where I can keep developing my skills and contribute to practical digital solutions.
        </p>
      </section>

      <div className="flex flex-col items-center gap-5 lg:justify-self-end">
        <Image
          src="/portfolio/cv.png"
          alt="Resume preview"
          width={200}
          height={300}
          unoptimized
          className="rounded-lg shadow-lg brightness-90"
        />
        <div className="flex gap-4">
          <a
            href="/portfolio/Denisse_Daugaard_CV.pdf"
            download
            className="inline-flex items-center justify-center rounded-lg bg-cyan-300 px-4 py-3 text-slate-950 transition hover:bg-white"
            aria-label="Download CV"
          >
            <FaCloudDownloadAlt size={20} />
          </a>
          <a
            href="/portfolio/Denisse_Daugaard_CV.pdf"
            target="_blank"
            className="inline-flex items-center justify-center rounded-lg border border-white/20 px-4 py-3 text-white transition hover:border-cyan-200 hover:text-cyan-100"
            aria-label="View CV"
          >
            <FaEye size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
