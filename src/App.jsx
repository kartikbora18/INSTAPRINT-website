import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Machine from "./components/Machine";
import Dashboard from "./components/Dashboard";
import Industries from "./components/Industries";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="bg-slate-950 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustedBy />
      <HowItWorks />
      <Features />
      <Machine />
      <Dashboard />
      <Industries />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}