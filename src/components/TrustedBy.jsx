import { motion } from "framer-motion";

const companies = [
  "Colleges",
  "Offices",
  "Libraries",
  "Hospitals",
  "Print Shops",
];

export default function TrustedBy() {
  return (
    <section className="py-24 border-y border-white/10 bg-slate-900">

      <div className="max-w-7xl mx-auto px-8">

        <motion.h2
          initial={{opacity:0,y:20}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="text-center text-3xl font-bold mb-14"
        >
          Perfect For
        </motion.h2>

        <div className="grid md:grid-cols-5 gap-6">

          {companies.map((item)=>(
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center hover:border-green-400 transition"
            >
              <h3 className="text-xl font-semibold">{item}</h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}