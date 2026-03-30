import Image from "next/image"
export default function Header(){
    return(
   <header className="header-enter absolute z-50 w-full rounded-full top-6
    p-2 backdrop-blur-md
    bg-[linear-gradient(0deg,rgba(156,86,153,0.44)_0%,rgba(127,156,173,0.49)_100%)]">
        <div className="grid grid-cols-3 items-center">
            <section>
                <Image
                src="/imgs/logo-cyan-no-bg.png"
                width={80}
                height={80}
                alt="Denisse Daugard porfolio image"
                className="drop-shadow-[0_5px_20px_rgba(59,130,246)] bg-blur white/10" //drop-shadow-[0_5px_20px_rgba(59,130,246)]
                />
            </section>
            <nav className="">
                <ul className="flex justify-around border border-white/20 rounded-[3rem] text-center p-4">
                    <li>
                        <a
                            href="#home"
                            className="inline-block transition duration-300 hover:scale-105 hover:text-red-300 hover:drop-shadow-[0_0_15px_rgba(236,72,153,0.6)]"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className="inline-block transition duration-300 hover:scale-105 hover:text-red-300 hover:drop-shadow-[0_0_15px_rgba(236,72,153,0.6)]"
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="inline-block transition duration-300 hover:scale-105 hover:text-red-300 hover:drop-shadow-[0_0_15px_rgba(236,72,153,0.6)]"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
            <figure className="flex justify-end items-center mr-4">
                <Image
                    src="/portfolio/portfolio_pic_neon.jpg"
                    alt="Denisse Daugaard Portfolio Picture"
                    width={60}
                    height={60}
                    className="rounded-full"
                />
            </figure>
        </div>
    </header>
    )
}