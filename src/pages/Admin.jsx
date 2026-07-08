import { useEffect, useState } from "react";

export default function Admin() {
const [requests, setRequests] = useState([]);
const [loading, setLoading] = useState(true);
const [search, setSearch] = useState("");
const [selectedRequest, setSelectedRequest] = useState(null);
const filteredRequests = requests.filter((request) => {
  const value = search.toLowerCase();

  return (
    request.fullName.toLowerCase().includes(value) ||
    request.company.toLowerCase().includes(value) ||
    request.email.toLowerCase().includes(value) ||
    request.phone.toLowerCase().includes(value) ||
    request.city.toLowerCase().includes(value)
  );
});


useEffect(() => {
  const fetchRequests = async () => {
    try {
      const response = await fetch(
        "https://instaprint-server.onrender.com/api/demo-request"
      );

      const data = await response.json();

      if (data.success) {
        setRequests(data.data);
      }
    } catch (error) {
      console.error(error);
      alert("Unable to load demo requests.");
    }

    setLoading(false);
  };

  fetchRequests();
}, []);
  return (
    
    <div className="min-h-screen bg-slate-950 text-white pt-32 px-10">

      <h1 className="text-5xl font-bold text-emerald-400">
        INSTAPRINT Admin Dashboard
      </h1>

      <p className="text-slate-400 mt-4 mb-8">
  Total Demo Requests: {loading ? "Loading..." : requests.length}
</p>
<div className="mb-8">

<input
type="text"
placeholder="Search by Name, Company, Email, Phone or City..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-emerald-500"
/>

</div>
<div className="grid md:grid-cols-3 gap-6 mb-8">

  <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
    <p className="text-slate-400">
      Total Requests
    </p>

    <h2 className="text-4xl font-bold text-emerald-400 mt-3">
      {requests.length}
    </h2>
  </div>

  <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
    <p className="text-slate-400">
      Today's Requests
    </p>

    <h2 className="text-4xl font-bold text-blue-400 mt-3">
      {
        requests.filter(r =>
          new Date(r.createdAt).toDateString() ===
          new Date().toDateString()
        ).length
      }
    </h2>
  </div>

  <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
    <p className="text-slate-400">
      Database Status
    </p>

    <h2 className="text-2xl font-bold text-green-400 mt-4">
      Connected
    </h2>
  </div>

</div>
<div className="overflow-x-auto rounded-2xl border border-slate-800">
  <table className="w-full text-left">

    <thead className="bg-slate-900">
      <tr>

        <th className="p-4">#</th>
        <th className="p-4">Name</th>
        <th className="p-4">Company</th>
        <th className="p-4">Email</th>
        <th className="p-4">Phone</th>
        <th className="p-4">City</th>
        <th className="p-4">Machines</th>
        <th className="p-4">Message</th>
        <th className="p-4">Submitted</th>
        <th className="p-4">Status</th>
        <th className="p-4">Action</th>

      </tr>
    </thead>

    <tbody>

      {filteredRequests.map((request,index)=>(

        <tr
          key={request._id}
          className="border-t border-slate-800 hover:bg-slate-900"
        >
            <td className="p-4">{index+1}</td>

          <td className="p-4">{request.fullName}</td>

          <td className="p-4">{request.company}</td>

          <td className="p-4">{request.email}</td>

          <td className="p-4">{request.phone}</td>

          <td className="p-4">{request.city}</td>

          <td className="p-4">{request.machinesRequired}</td>
          <td className="p-4 max-w-xs">
          <div className="truncate" title={request.message}>
         {request.message}
       </div>
       
</td>
<td className="p-4 whitespace-nowrap">
  {new Date(request.createdAt).toLocaleString()}
</td>
        <td className="p-4">

<span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm">

New

</span>

</td>
<td className="p-4">
  <button
    onClick={() => setSelectedRequest(request)}
    className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-lg text-sm font-semibold"
  >
    View
  </button>
</td>
        </tr>

      ))}

    </tbody>

  </table>
</div>
{selectedRequest && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

    <div className="bg-slate-900 rounded-2xl p-8 max-w-2xl w-full border border-slate-700">

      <h2 className="text-3xl font-bold text-emerald-400 mb-6">
        Demo Request Details
      </h2>

      <div className="space-y-4">

        <p><strong>Name:</strong> {selectedRequest.fullName}</p>

        <p><strong>Company:</strong> {selectedRequest.company}</p>

        <p><strong>Email:</strong> {selectedRequest.email}</p>

        <p><strong>Phone:</strong> {selectedRequest.phone}</p>

        <p><strong>City:</strong> {selectedRequest.city}</p>

        <p><strong>Machines:</strong> {selectedRequest.machinesRequired}</p>

        <p><strong>Message:</strong></p>

        <div className="bg-slate-950 rounded-xl p-4 border border-slate-700 whitespace-pre-wrap">
          {selectedRequest.message}
        </div>

      </div>

      <button
        onClick={() => setSelectedRequest(null)}
        className="mt-8 w-full bg-red-500 hover:bg-red-600 py-3 rounded-xl font-bold"
      >
        Close
      </button>

    </div>

  </div>
)}
    </div>
  );
}