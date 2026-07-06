import { Menu } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-white/10 bg-slate-950/70"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-8">

        <div>

          <h1 className="text-3xl font-black tracking-tight text-green-400">
            INSTAPRINT
          </h1>

          <p className="text-xs text-slate-400">
            Smart Self-Service Printing
          </p>

        </div>

        <nav className="hidden md:flex gap-10">

          <a href="#" className="hover:text-green-400 transition">
            Home
          </a>

          <a href="#" className="hover:text-green-400 transition">
            Features
          </a>

          <a href="#" className="hover:text-green-400 transition">
            Machine
          </a>

          <a href="#" className="hover:text-green-400 transition">
            Contact
          </a>

        </nav>

        <button className="hidden md:block px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 transition font-semibold">
          Request Demo
        </button>

        <button className="md:hidden">
          <Menu />
        </button>

      </div>
    </motion.header>
  );
}