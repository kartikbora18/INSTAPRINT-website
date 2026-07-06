import { motion } from "framer-motion";
import {
  Activity,
  IndianRupee,
  FileText,
  Printer,
  CheckCircle
} from "lucide-react";

const stats = [
  {
    icon: FileText,
    title: "Today's Orders",
    value: "128"
  },
  {
    icon: IndianRupee,
    title: "Today's Revenue",
    value: "₹4,860"
  },
  {
    icon: Printer,
    title: "Pages Printed",
    value: "1,245"
  },
  {
    icon: CheckCircle,
    title: "Machine Status",
    value: "Online"
  }
];

export default function Dashboard() {

  return (

    <section className="py-32 bg-slate-900">

      <div className="max-w-7xl mx-auto px-8">

        <motion.h2
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="text-center text-5xl font-black"
        >

          Smart Cloud Dashboard

        </motion.h2>

        <p className="text-center text-slate-400 mt-5 mb-20">

          Monitor every INSTAPRINT machine remotely.

        </p>

        <div className="rounded-[35px] border border-white/10 bg-slate-950 p-10">

          <div className="grid lg:grid-cols-4 gap-6">

            {stats.map((item,index)=>{

              const Icon=item.icon;

              return(

                <div
                  key={index}
                  className="rounded-3xl bg-slate-900 p-8 border border-white/10"
                >

                  <Icon
                    size={34}
                    className="text-green-400"
                  />

                  <h3 className="text-slate-400 mt-6">

                    {item.title}

                  </h3>

                  <p className="text-4xl font-black mt-3">

                    {item.value}

                  </p>

                </div>

              )

            })}

          </div>

          <div className="mt-12 rounded-3xl bg-slate-900 border border-white/10 p-8">

            <div className="flex justify-between mb-8">

              <h3 className="text-3xl font-bold">

                Recent Orders

              </h3>

              <Activity className="text-green-400"/>

            </div>

            <table className="w-full">

              <thead>

                <tr className="text-slate-500">

                  <th className="text-left py-4">Order</th>
                  <th className="text-left">Pages</th>
                  <th className="text-left">Amount</th>
                  <th className="text-left">Status</th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-t border-white/10">

                  <td className="py-5">#PA84219</td>
                  <td>11</td>
                  <td>₹44</td>
                  <td className="text-green-400">Completed</td>

                </tr>

                <tr className="border-t border-white/10">

                  <td className="py-5">#PA84220</td>
                  <td>5</td>
                  <td>₹20</td>
                  <td className="text-green-400">Completed</td>

                </tr>

                <tr className="border-t border-white/10">

                  <td className="py-5">#PA84221</td>
                  <td>28</td>
                  <td>₹112</td>
                  <td className="text-yellow-400">Printing</td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </section>

  )

}