
import Header from "./components/header/Header";
import AboutMe from "./components/main/whatIDo/WhaIDo";
import HeroVideo from "./components/main/welcome/VideoHero";
import Footer from "./components/footer/Footer";
import TypedText from "./components/main/welcome/TypedText";
import Projects from "./components/main/projects/Projects";
import ContactForm from "./components/main/contact/ContactForm";

export default function Home() {
  return (
   <div className="wrapper relative" >
    <Header/>
    <main className="min-h-screen flex flex-col flex-1">
      <HeroVideo children={
        <TypedText/>
        } poinerEvents="pointer-events-none"/>
      <AboutMe/>
      <Projects/>
      <ContactForm/>
    </main>
      <Footer/>
   </div>
 
  );
}
