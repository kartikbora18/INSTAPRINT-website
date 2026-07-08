import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
  fullName: "",
  company: "",
  email: "",
  phone: "",
  city: "",
  machinesRequired: "",
  message: "",
});

const [loading, setLoading] = useState(false);

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

  try {
    const response = await fetch(
  "https://instaprint-server.onrender.com/api/demo-request",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    if (data.success) {
      alert("✅ Demo Request Submitted Successfully!");

      setFormData({
        fullName: "",
        company: "",
        email: "",
        phone: "",
        city: "",
        machinesRequired: "",
        message: "",
      });
    } else {
      alert("Something went wrong.");
    }
  } catch (error) {
    alert("Server Error");
  }

  setLoading(false);
};
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

<form onSubmit={handleSubmit}>

<div className="grid md:grid-cols-2 gap-5">

             <input
  type="text"
  name="fullName"
  value={formData.fullName}
  onChange={handleChange}
  placeholder="Full Name"
  required
  className="bg-slate-950 border border-slate-700 rounded-xl p-4 outline-none focus:border-emerald-500"
/>

              <input
  type="text"
  name="company"
  value={formData.company}
  onChange={handleChange}
  placeholder="Company / Shop"
  className="bg-slate-950 border border-slate-700 rounded-xl p-4 outline-none focus:border-emerald-500"
/>

             <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Email Address"
  required
  className="bg-slate-950 border border-slate-700 rounded-xl p-4 outline-none focus:border-emerald-500"
/>

             <input
  type="tel"
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  placeholder="Phone Number"
  required
  className="bg-slate-950 border border-slate-700 rounded-xl p-4 outline-none focus:border-emerald-500"
/>

             <input
  type="text"
  name="city"
  value={formData.city}
  onChange={handleChange}
  placeholder="City"
  className="bg-slate-950 border border-slate-700 rounded-xl p-4 outline-none focus:border-emerald-500"
/>

              <select
  name="machinesRequired"
  value={formData.machinesRequired}
  onChange={handleChange}
  className="bg-slate-950 border border-slate-700 rounded-xl p-4 outline-none focus:border-emerald-500"
>
  <option value="">Machines Required</option>
  <option value="1 Machine">1 Machine</option>
  <option value="2 - 5 Machines">2 - 5 Machines</option>
  <option value="5 - 10 Machines">5 - 10 Machines</option>
  <option value="10+ Machines">10+ Machines</option>
</select>

            </div>

           <textarea
  rows={6}
  name="message"
  value={formData.message}
  onChange={handleChange}
  placeholder="Tell us about your requirement..."
  className="w-full mt-5 bg-slate-950 border border-slate-700 rounded-xl p-4 outline-none focus:border-emerald-500 resize-none"
/>

           <button
  type="submit"
  disabled={loading}
  className="w-full mt-8 bg-emerald-500 hover:bg-emerald-600 transition rounded-xl py-4 font-bold text-lg disabled:opacity-50"
>
  {loading ? "Submitting..." : "Request Demo"}
</button>

            <p className="text-slate-500 text-center text-sm mt-5">
              Our team usually responds within 24 hours.
            </p>
             </form>
          </div>

        </div>

      </div>
    </section>
  );
}