import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLink =
    "transition hover:text-emerald-400";

  const activeLink =
    "text-emerald-400 font-semibold";

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800"
    >
      <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">

        {/* Logo */}

        <Link to="/">

          <div>

            <h1 className="text-3xl font-black text-emerald-400">
              INSTAPRINT
            </h1>

            <p className="text-xs text-slate-400">
              Smart Self-Service Printing
            </p>

          </div>

        </Link>

        {/* Desktop Menu */}

        <nav className="hidden lg:flex items-center gap-10">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeLink : navLink
            }
          >
            Home
          </NavLink>
           <NavLink
  to="/about"
  className={({ isActive }) =>
    isActive ? activeLink : navLink
  }
>
  About
</NavLink>
          <a
            href="/#features"
            className={navLink}
          >
            Features
          </a>

          <a
            href="/#contact"
            className={navLink}
          >
            Contact
          </a>

          <NavLink
            to="/privacy-policy"
            className={({ isActive }) =>
              isActive ? activeLink : navLink
            }
          >
            Privacy
          </NavLink>

        </nav>

        {/* Request Demo */}

        <a
          href="/#contact"
          className="hidden lg:inline-flex bg-emerald-500 hover:bg-emerald-600 transition px-6 py-3 rounded-xl font-semibold"
        >
          Request Demo
        </a>

        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="lg:hidden bg-slate-900 border-t border-slate-800">

          <div className="flex flex-col p-6 gap-5">

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
              <NavLink
  to="/about"
  className={({ isActive }) =>
    isActive ? activeLink : navLink
  }
>
  About
</NavLink>
            <a
              href="/#features"
              onClick={() => setMenuOpen(false)}
            >
              Features
            </a>

            <a
              href="/#contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>

            <Link
              to="/privacy-policy"
              onClick={() => setMenuOpen(false)}
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms-and-conditions"
              onClick={() => setMenuOpen(false)}
            >
              Terms & Conditions
            </Link>

            <Link
              to="/refund-policy"
              onClick={() => setMenuOpen(false)}
            >
              Refund Policy
            </Link>

          </div>

        </div>

      )}

    </motion.header>
  );
}