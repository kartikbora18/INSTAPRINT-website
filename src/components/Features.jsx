import { motion } from "framer-motion";
import {
  Printer,
  CreditCard,
  ShieldCheck,
  Clock3,
  Monitor,
  Building2,
} from "lucide-react";

const features = [
  {
    icon: Printer,
    title: "Instant Printing",
    text: "Print your documents within seconds without waiting in long queues.",
  },
  {
    icon: CreditCard,
    title: "Secure UPI Payment",
    text: "Pay instantly using PhonePe, Google Pay, Paytm or any UPI application.",
  },
  {
    icon: Clock3,
    title: "24×7 Availability",
    text: "Access printing services anytime from installed INSTAPRINT kiosks.",
  },
  {
    icon: ShieldCheck,
    title: "100% Secure",
    text: "Files are automatically removed after printing to protect your privacy.",
  },
  {
    icon: Monitor,
    title: "Smart Touchscreen",
    text: "Modern touch interface designed for anyone to use in just a few taps.",
  },
  {
    icon: Building2,
    title: "Perfect Locations",
    text: "Ideal for Colleges, Libraries, Offices, Hospitals, Hostels and Print Shops.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-slate-900 py-28"
    >
      <div className="max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="uppercase tracking-[0.25em] text-emerald-400 font-semibold">
            Why Choose Us
          </p>

          <h2 className="text-5xl lg:text-6xl font-black text-white mt-5">
            Built for Modern
            <span className="text-emerald-400"> Printing</span>
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto mt-6 text-lg leading-8">
            Every INSTAPRINT kiosk is designed to provide fast,
            secure and reliable document printing with an
            intuitive self-service experience.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group bg-slate-950 border border-slate-800 rounded-3xl p-8 transition-all duration-300 hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/10"
              >

                <div className="w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center mb-6 group-hover:scale-110 transition">

                  <Icon size={30} className="text-white"/>

                </div>

                <h3 className="text-2xl font-bold text-white mb-4">

                  {feature.title}

                </h3>

                <p className="text-slate-400 leading-8">

                  {feature.text}

                </p>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}