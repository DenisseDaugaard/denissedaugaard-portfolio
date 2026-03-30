import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
    return(
        <footer className="mx-auto w-full p-2 z-50 backdrop-blur-xl bg-[linear-gradient(0deg,rgba(156,86,153,0.44)_0%,rgba(127,156,173,0.49)_100%)]">
          <section className="grid grid-cols-3 flex-col md:flex-row">
            <span className="col-start-2 text-sm opacity-80 text-center flex items-center justify-center">
              © {new Date().getFullYear()} Denisse Daugaard. All rights reserved.
            </span>

           <div className="mr-4 flex justify-self-end gap-4 text-lg">
            <Link
              href="https://www.linkedin.com/in/denisse-daugaard-94155a364/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full p-2 opacity-80 transition hover:opacity-100 hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.7)]"
            >
              <IoLogoLinkedin size={30} />
            </Link>

            <Link
              href="https://github.com/DenisseDaugaard/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full p-2 opacity-80 transition hover:opacity-100 hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.7)]"
            >
              <FaGithub size={30} />
            </Link>
          </div>
          </section>
      </footer>
    )
}
