import {
  Upload,
  Eye,
  CreditCard,
  Printer,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload",
    text: "Upload your PDF using QR Code, USB drive or your mobile device.",
  },
  {
    number: "02",
    icon: Eye,
    title: "Preview",
    text: "Preview your document and choose copies, color mode and paper size.",
  },
  {
    number: "03",
    icon: CreditCard,
    title: "Pay",
    text: "Pay securely using UPI and receive instant payment confirmation.",
  },
  {
    number: "04",
    icon: Printer,
    title: "Print",
    text: "Your document prints automatically. Collect it from the output tray in seconds.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-950 py-28">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-20">

          <p className="text-emerald-400 font-semibold tracking-widest uppercase">
            Simple Process
          </p>

          <h2 className="text-5xl lg:text-6xl font-black text-white mt-4">
            How INSTAPRINT Works
          </h2>

          <p className="text-slate-400 mt-6 max-w-3xl mx-auto text-lg">
            Print documents in less than two minutes with our smart self-service
            printing kiosks.
          </p>

        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (

              <div
                key={index}
                className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-2xl hover:shadow-emerald-500/20"
              >

                <div className="absolute top-6 right-6 text-5xl font-black text-slate-800">
                  {step.number}
                </div>

                <div className="w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center mb-8">

                  <Icon size={30} className="text-white" />

                </div>

                <h3 className="text-2xl font-bold text-white mb-4">

                  {step.title}

                </h3>

                <p className="text-slate-400 leading-8">

                  {step.text}

                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}