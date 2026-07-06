import { useState } from "react";

const faqs = [
  {
    q: "Can I print directly from my phone?",
    a: "Yes. Simply upload your PDF, pay securely using any UPI app and collect your print within minutes."
  },
  {
    q: "Which file formats are supported?",
    a: "Currently INSTAPRINT supports PDF documents for accurate printing."
  },
  {
    q: "Does INSTAPRINT support colour printing?",
    a: "Yes. Black & White and Colour printing are both supported."
  },
  {
    q: "Are my documents secure?",
    a: "Yes. Files are automatically deleted after printing to protect your privacy."
  },
  {
    q: "Can I print A3 documents?",
    a: "Selected INSTAPRINT kiosks support A3 printing. A4 is available on every machine."
  },
  {
    q: "Where will INSTAPRINT machines be available?",
    a: "INSTAPRINT kiosks are designed for Colleges, Libraries, Offices, Hospitals, Railway Stations, Malls and Public Places."
  }
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-slate-950 py-28">
      <div className="max-w-5xl mx-auto px-8">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.25em] text-emerald-400 font-semibold">
            FAQ
          </p>

          <h2 className="text-5xl font-black text-white mt-4">
            Frequently Asked{" "}
            <span className="text-emerald-400">Questions</span>
          </h2>

          <p className="text-slate-400 mt-6">
            Everything you need to know about INSTAPRINT.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? -1 : index)
                }
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="text-xl font-bold text-white">
                  {item.q}
                </span>

                <span className="text-2xl text-emerald-400">
                  {open === index ? "−" : "+"}
                </span>
              </button>

              {open === index && (
                <div className="px-6 pb-6">
                  <p className="text-slate-400 leading-8">
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}