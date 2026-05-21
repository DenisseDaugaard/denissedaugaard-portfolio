
import Header from "./components/header/Header";
import AboutMe from "./components/main/whatIDo/WhaIDo";
import HeroVideo from "./components/main/welcome/VideoHero";
import Footer from "./components/footer/Footer";
import TypedText from "./components/main/welcome/TypedText";
import Projects from "./components/main/projects/Projects";
import ContactForm from "./components/main/contact/ContactForm";

export default function Home() {
  return (
   <div className="relative min-h-screen overflow-hidden bg-[#101114]" >
    <Header/>
    <main className="min-h-screen flex flex-col flex-1">
      <HeroVideo>
        <TypedText/>
      </HeroVideo>
      <AboutMe/>
      <Projects/>
      <ContactForm/>
    </main>
      <Footer/>
   </div>
 
  );
}
