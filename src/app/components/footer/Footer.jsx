import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#101114] px-6 py-8">
      <section className="mx-auto flex max-w-6xl flex-col gap-5 text-white/68 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-sm">
          © {new Date().getFullYear()} Denisse Daugaard. All rights reserved.
        </span>

        <div className="flex gap-3 text-lg">
          <Link
            href="https://www.linkedin.com/in/denisse-daugaard-94155a364/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-lg border border-white/10 p-3 transition hover:border-cyan-200 hover:text-cyan-100"
            aria-label="LinkedIn"
          >
            <IoLogoLinkedin size={24} />
          </Link>

          <Link
            href="https://github.com/DenisseDaugaard/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-lg border border-white/10 p-3 transition hover:border-cyan-200 hover:text-cyan-100"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </Link>
        </div>
      </section>
    </footer>
  );
}
