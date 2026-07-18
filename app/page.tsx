import Header from "./components/Header";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import ActivitiesFinder from "./components/ActivitiesFinder";
import LessonDemo from "./components/LessonDemo";
import Trust from "./components/Trust";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CountUp from "./components/CountUp";

export default function Home() {
  return (
    <>
      <CountUp />
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <ActivitiesFinder />
        <LessonDemo />
        <Trust />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
