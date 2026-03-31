import Image from "next/image"
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
export default function Resume() {
    return(
        <section className="flex flex-col justify-center items-center gap-8 lg:gap-0 lg:grid grid-cols-2 w-10/12 mx-auto my-10">
            <section className="text-center lg:text-left">
                <h1 className="text-2xl font-semibold mb-4">My Resume 📄</h1>
                <p className="text-xl leading-8">Freshly graduated web developer with a focus on modern frontend and backend technologies.
                   I am looking for a position where I can develop my skills and
                    contribute to the development of modern digital solutions.</p>
            </section>
            <div className="flex flex-col justify-self-center items-center gap-6">

                <Image 
                src="/portfolio/cv.png" 
                alt="resume" width={200} 
                height={300} 
                unoptimized
                className="rounded-lg shadow-lg brightness-85"/>
                <div className="flex gap-4 items-center">
                    <a href="/portfolio/Denisse_Daugaard_CV.pdf" download className="bg-sky-500 hover:bg-sky-700 inline-block px-4 py-2 rounded">
                        <FaCloudDownloadAlt size={20} />
                    </a>
                    <a href="/portfolio/Denisse_Daugaard_CV.pdf" target="_blank" className="bg-sky-500 hover:bg-sky-700 inline-block px-4 py-2 rounded">
                        <FaEye size={20} />
                    </a>
                </div>
            </div>
        </section>
    )
}