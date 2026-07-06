import { Monitor, Printer, QrCode, Cpu, ScanLine } from "lucide-react";
import { motion } from "framer-motion";

const parts = [
  {
    icon: Monitor,
    title: "21.5'' Touch Display",
    desc: "Large HD touch screen for easy document upload."
  },
  {
    icon: QrCode,
    title: "QR Payment",
    desc: "Instant UPI payments using any mobile app."
  },
  {
    icon: Printer,
    title: "High Speed Printer",
    desc: "Professional laser printing with excellent quality."
  },
  {
    icon: ScanLine,
    title: "Document Scanner",
    desc: "Future ready for scan and copy features."
  },
  {
    icon: Cpu,
    title: "Smart Controller",
    desc: "Cloud connected system with remote monitoring."
  }
];

export default function Machine() {
  return (
    <section className="py-32">

      <div className="max-w-7xl mx-auto px-8">

        <motion.h2
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="text-center text-5xl font-black mb-5"
        >
          Meet INSTAPRINT
        </motion.h2>

        <p className="text-center text-slate-400 mb-20 text-lg">
          Smart Self-Service Printing Machine
        </p>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{opacity:0,x:-50}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
          >

            <div className="rounded-[40px] bg-gradient-to-b from-slate-800 to-slate-900 border border-white/10 shadow-2xl overflow-hidden">

              <div className="bg-slate-950 py-5 text-center text-green-400 font-bold text-2xl">
                INSTAPRINT
              </div>

              <div className="h-[520px] flex items-center justify-center">

                <img
  src="/assets/machine.png"
  alt="INSTAPRINT Machine"
  className="w-full max-w-md mx-auto"
/>

              </div>

              <div className="text-center pb-10">

                <h3 className="text-3xl font-bold">
                  Smart Self-Service Printing
                </h3>

                <p className="text-slate-400 mt-3">
                  Upload • Pay • Print
                </p>

              </div>

            </div>

          </motion.div>

          <motion.div
            initial={{opacity:0,x:50}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
            className="space-y-6"
          >

            {parts.map((part, index) => {

              const Icon = part.icon;

              return (

                <div
                  key={index}
                  className="flex gap-5 rounded-3xl bg-slate-900 border border-white/10 p-6 hover:border-green-400 transition"
                >

                  <div className="w-16 h-16 rounded-2xl bg-green-500 flex items-center justify-center">

                    <Icon size={30} />

                  </div>

                  <div>

                    <h3 className="text-2xl font-bold">
                      {part.title}
                    </h3>

                    <p className="text-slate-400 mt-2">
                      {part.desc}
                    </p>

                  </div>

                </div>

              );

            })}

          </motion.div>

        </div>

      </div>

    </section>
  );
}