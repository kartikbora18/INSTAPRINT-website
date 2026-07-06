import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-950 py-28 text-white">
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.25em] text-emerald-400 font-semibold">
            CONTACT US
          </p>

          <h2 className="text-5xl font-black mt-4">
            Request an{" "}
            <span className="text-emerald-400">
              INSTAPRINT Demo
            </span>
          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Interested in installing INSTAPRINT in your college,
            office, library or print shop? Fill the form below and
            we'll get back to you.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-14">

          {/* Left Side */}
          <div className="space-y-10">

            <div className="flex items-start gap-5">

              <div className="w-14 h-14 bg-emerald-500 rounded-xl flex items-center justify-center">
                <Mail className="text-white" size={24} />
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Email
                </h3>

                <p className="text-slate-400 mt-2">
                  work.kartikbora@gmail.com
                </p>
              </div>

            </div>

            <div className="flex items-start gap-5">

              <div className="w-14 h-14 bg-emerald-500 rounded-xl flex items-center justify-center">
                <Phone className="text-white" size={24} />
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Phone
                </h3>

                <p className="text-slate-400 mt-2">
                  +91 9834371289
                </p>
              </div>

            </div>

            <div className="flex items-start gap-5">

              <div className="w-14 h-14 bg-emerald-500 rounded-xl flex items-center justify-center">
                <MapPin className="text-white" size={24} />
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Office
                </h3>

                <p className="text-slate-400 mt-2">
                  Vision9, Kunal Icon Road, Pimple Saudagar,                      
                  Pune 411027, Maharashtra, India
                </p>
              </div>

            </div>

          </div>

          {/* Right Side */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

            <h3 className="text-3xl font-bold mb-8">
              Request a Demo
            </h3>

            <div className="grid md:grid-cols-2 gap-5">

              <input
                type="text"
                placeholder="Full Name"
                className="bg-slate-950 border border-slate-700 rounded-xl p-4 outline-none focus:border-emerald-500"
              />

              <input
                type="text"
                placeholder="Company / Shop"
                className="bg-slate-950 border border-slate-700 rounded-xl p-4 outline-none focus:border-emerald-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="bg-slate-950 border border-slate-700 rounded-xl p-4 outline-none focus:border-emerald-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="bg-slate-950 border border-slate-700 rounded-xl p-4 outline-none focus:border-emerald-500"
              />

              <input
                type="text"
                placeholder="City"
                className="bg-slate-950 border border-slate-700 rounded-xl p-4 outline-none focus:border-emerald-500"
              />

              <select
                className="bg-slate-950 border border-slate-700 rounded-xl p-4 outline-none focus:border-emerald-500"
              >
                <option>Machines Required</option>
                <option>1 Machine</option>
                <option>2 - 5 Machines</option>
                <option>5 - 10 Machines</option>
                <option>10+ Machines</option>
              </select>

            </div>

            <textarea
              rows={6}
              placeholder="Tell us about your requirement..."
              className="w-full mt-5 bg-slate-950 border border-slate-700 rounded-xl p-4 outline-none focus:border-emerald-500 resize-none"
            />

            <button
              className="w-full mt-8 bg-emerald-500 hover:bg-emerald-600 transition rounded-xl py-4 font-bold text-lg"
            >
              Request Demo
            </button>

            <p className="text-slate-500 text-center text-sm mt-5">
              Our team usually responds within 24 hours.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}