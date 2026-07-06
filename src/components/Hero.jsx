import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950">

      <div className="absolute left-0 top-0 h-full w-1/2 bg-emerald-500/10 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-8 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <div className="inline-flex items-center px-4 py-2 rounded-full border border-emerald-500 text-emerald-400 text-sm mb-8">

              🚀 India's Smart Self-Service Printing

            </div>

            <h1 className="text-6xl lg:text-8xl font-black leading-none text-white">

              India's Smart
              <br />

              Self-Service
              <br />

              <span className="text-emerald-400">

               Printing Network

              </span>

            </h1>

            <p className="mt-8 text-2xl text-slate-300">

              Upload your PDF, pay securely with UPI,
              and collect your prints in minutes from
              an INSTAPRINT kiosk.

            </p>

            <p className="mt-4 text-slate-400 text-lg max-w-xl">

              INSTAPRINT is building India's next generation
              self-service printing network for students,
              professionals, businesses and public spaces.

              Fast, secure and available whenever you need it.

            </p>

            <div className="flex gap-5 mt-10">

              <button className="bg-emerald-500 hover:bg-emerald-400 transition px-8 py-4 rounded-xl text-lg font-semibold flex items-center gap-2">

                Find a Machine

                <ArrowRight size={20} />

              </button>

              <button className="border border-slate-600 hover:border-white transition px-8 py-4 rounded-xl flex items-center gap-2">

                <Play size={18} />

                Request Demo

              </button>

            </div>
            <div className="grid grid-cols-2 gap-4 mt-10 max-w-xl">

  <div className="flex items-center gap-3 bg-slate-900/70 border border-slate-700 rounded-xl px-4 py-3">
    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
    <span className="text-slate-200 font-medium">QR Upload</span>
  </div>

  <div className="flex items-center gap-3 bg-slate-900/70 border border-slate-700 rounded-xl px-4 py-3">
    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
    <span className="text-slate-200 font-medium">USB Support</span>
  </div>

  <div className="flex items-center gap-3 bg-slate-900/70 border border-slate-700 rounded-xl px-4 py-3">
    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
    <span className="text-slate-200 font-medium">Secure UPI Payment</span>
  </div>

  <div className="flex items-center gap-3 bg-slate-900/70 border border-slate-700 rounded-xl px-4 py-3">
    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
    <span className="text-slate-200 font-medium">A4 & A3 Printing</span>
  </div>

</div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 flex items-center justify-center">

  <div className="w-80 h-80 bg-emerald-500/20 rounded-full blur-[120px]"></div>

</div>

            <motion.img
              animate={{
  y: [-12, 12, -12],
  rotate: [-1, 1, -1]
}}
              transition={{
                repeat: Infinity,
                duration: 6,
ease: "easeInOut"
              }}
              src="/assets/machine.png"
              alt="INSTAPRINT Machine"
              className="w-full max-w-lg mx-auto drop-shadow-[0_0_70px_rgba(16,185,129,0.5)]"
            />

          </motion.div>

        </div>

      </div>

    </section>
  );
}