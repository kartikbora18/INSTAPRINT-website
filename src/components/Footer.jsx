import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-white">

      <div className="max-w-7xl mx-auto px-8 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-black text-emerald-400">
              INSTAPRINT
            </h2>

            <p className="text-slate-400 mt-4 leading-7">
              India's Smart Self-Service Printing Network.
              Fast, Secure and Easy document printing.
            </p>

          </div>

          {/* Product */}

          <div>

            <h3 className="text-xl font-bold mb-5">
              Product
            </h3>

            <div className="space-y-3">

              <a href="/#features" className="block hover:text-emerald-400">
                Features
              </a>

              <a href="/#contact" className="block hover:text-emerald-400">
                Request Demo
              </a>

              <a href="/#faq" className="block hover:text-emerald-400">
                FAQ
              </a>

            </div>

          </div>

          {/* Legal */}

          <div>

            <h3 className="text-xl font-bold mb-5">
              Legal
            </h3>

            <div className="space-y-3">

              <Link
                to="/privacy-policy"
                className="block hover:text-emerald-400"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms-and-conditions"
                className="block hover:text-emerald-400"
              >
                Terms & Conditions
              </Link>

              <Link
                to="/refund-policy"
                className="block hover:text-emerald-400"
              >
                Refund Policy
              </Link>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-bold mb-5">
              Contact
            </h3>

            <div className="space-y-3 text-slate-400">

              <p>📧 work.kartikbora@gmail.com</p>

              <p>📞 +91 9834371289</p>

              <p>📍 Pune, Maharashtra, India</p>

            </div>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-slate-500">
            © 2026 INSTAPRINT. All Rights Reserved.
          </p>

          <p className="text-slate-500 mt-4 md:mt-0">
            Made with ❤️ in India 🇮🇳
          </p>

        </div>

      </div>

    </footer>
  );
}