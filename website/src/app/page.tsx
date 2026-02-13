import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import ForNetworks from "@/components/ForNetworks";
import Pricing from "@/components/Pricing";
import SocialProof from "@/components/SocialProof";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <ForNetworks />
        <Pricing />
        <SocialProof />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
