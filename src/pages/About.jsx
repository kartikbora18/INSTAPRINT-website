export default function About() {
  return (
    <section className="bg-slate-950 text-white min-h-screen py-28">

      <div className="max-w-6xl mx-auto px-8">

        {/* Hero */}

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] text-emerald-400 font-semibold">
            ABOUT INSTAPRINT
          </p>

          <h1 className="text-5xl lg:text-6xl font-black mt-5">
            Building India's Smart
            <br />
            <span className="text-emerald-400">
              Self-Service Printing Network
            </span>
          </h1>

          <p className="text-slate-400 text-xl max-w-3xl mx-auto mt-8 leading-9">
            INSTAPRINT is creating a modern self-service printing experience
            where anyone can upload, pay and print documents within minutes,
            without depending on a shop operator.
          </p>

        </div>

        {/* Story */}

        <div className="mt-24 grid lg:grid-cols-2 gap-16">

          <div>

            <h2 className="text-3xl font-bold mb-6">
              Our Story
            </h2>

            <p className="text-slate-400 leading-8 mb-6">
              Printing important documents should be simple, fast and available
              whenever people need it. Yet students and professionals often
              spend valuable time waiting in queues or searching for an open
              print shop.
            </p>

            <p className="text-slate-400 leading-8">
              INSTAPRINT was created to solve this problem by combining modern
              software, secure digital payments and automated printing into a
              single self-service kiosk.
            </p>

          </div>

          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-10">

            <h3 className="text-2xl font-bold mb-6 text-emerald-400">
              What We Believe
            </h3>

            <ul className="space-y-5 text-slate-300">

              <li>✓ Technology should simplify everyday tasks.</li>

              <li>✓ Printing should be available anytime.</li>

              <li>✓ Payments should be fast and secure.</li>

              <li>✓ Every user deserves a simple experience.</li>

              <li>✓ Automation creates better businesses.</li>

            </ul>

          </div>

        </div>

        {/* Mission & Vision */}

        <div className="grid lg:grid-cols-2 gap-10 mt-24">

          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-10">

            <h2 className="text-3xl font-bold mb-5 text-emerald-400">
              Our Mission
            </h2>

            <p className="text-slate-400 leading-8">
              To make document printing fast, secure and accessible through
              smart self-service kiosks across educational institutions,
              offices and public spaces.
            </p>

          </div>

          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-10">

            <h2 className="text-3xl font-bold mb-5 text-emerald-400">
              Our Vision
            </h2>

            <p className="text-slate-400 leading-8">
              To build India's largest smart self-service printing network,
              enabling people to print documents anywhere, anytime with just a
              few taps.
            </p>

          </div>

        </div>

        {/* Why INSTAPRINT */}

        <div className="mt-24">

          <h2 className="text-4xl font-black text-center">
            Why Choose
            <span className="text-emerald-400">
              {" "}INSTAPRINT
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-3">
                Fast
              </h3>

              <p className="text-slate-400">
                Print within minutes.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-3">
                Secure
              </h3>

              <p className="text-slate-400">
                Protected payments and document privacy.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-3">
                Convenient
              </h3>

              <p className="text-slate-400">
                No waiting. No shop operator required.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-3">
                Smart
              </h3>

              <p className="text-slate-400">
                Modern software powering automated printing.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}