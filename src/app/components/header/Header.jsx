import Image from "next/image"
import logo from "@/app/assets/logo.png"
import denisse from "@/app/assets/denisse.png"

export default function Header(){
    const links = [
        { href: "#home", label: "Home" },
        { href: "#skills", label: "Skills" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ]

    return(
   <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between rounded-lg border border-white/15 bg-[#11151d]/80 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl">
            <a href="#home" className="flex items-center gap-3">
                <Image
                src={logo}
                width={48}
                height={48}
                unoptimized
                alt="Denisse Daugaard logo"
                className="h-11 w-11 object-contain"
                />
                <span className="hidden text-sm font-bold text-white sm:block">
                    Denisse Daugaard
                </span>
            </a>

            <nav aria-label="Main navigation">
                <ul className="flex items-center gap-1 text-sm text-white/76 sm:gap-3">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="rounded-lg px-2 py-2 transition hover:bg-white/10 hover:text-white sm:px-3"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul> 
            </nav>
            <figure className="hidden items-center justify-end sm:flex">
                <Image
                    src={denisse}
                    alt="Denisse Daugaard Portfolio Picture"
                    width={48}
                    height={48}
                    unoptimized
                    className="h-11 w-11 rounded-full object-cover ring-2 ring-cyan-200/40"
                />
            </figure>
        </div>
    </header>
    )
}
