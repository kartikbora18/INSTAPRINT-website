import {
  GraduationCap,
  Building2,
  Library,
  Hospital,
  Store,
  Landmark
} from "lucide-react";

const industries = [
  { icon: GraduationCap, title: "Colleges" },
  { icon: Building2, title: "Corporate Offices" },
  { icon: Library, title: "Libraries" },
  { icon: Hospital, title: "Hospitals" },
  { icon: Store, title: "Print Shops" },
  { icon: Landmark, title: "Government Offices" }
];

export default function Industries() {
  return (
    <section className="py-32">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-black text-center mb-5">
          Perfect For Every Business
        </h2>

        <p className="text-center text-slate-400 mb-20">
          INSTAPRINT fits anywhere people need quick document printing.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {industries.map((item, index) => {

            const Icon = item.icon;

            return (

              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-slate-900 p-10 hover:border-green-400 hover:-translate-y-2 transition duration-300"
              >

                <Icon size={48} className="text-green-400 mb-6" />

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}