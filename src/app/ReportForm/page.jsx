"use client"
import { User, Mail, Key, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import emailjs from '@emailjs/browser'
import { useRouter } from "next/navigation";

const CarReportForm = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [vin, setVin] = useState('');

  const handleReport = async () => {
    if(!name || !email || !vin){
      alert('All fields are required');
      return;
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    if(vin.length !== 17){
      alert("Please enter a valid VIN number (17 characters)");
      return;
    }

    await emailjs.send(
      "service_ptu6cto",
      "template_0jwat6b",
      {
        to_name: name,
        to_email: email,
        vin_number: vin,
        message: `Your report for ${vin} is currently being processed and will be delivered to you soon. Please complete the payment if you haven't already to avoid any further delays.`,
        from_name: "Vehicle VIN Reports",
        from_email: "365vehiclevinreports@gmail.com",
      },
      "oazfSJXPu8Ta25UhF"
    );

    localStorage.setItem("vin", JSON.stringify(vin));
    router.push("/GetReport");
  }

  return (
    <div className="min-h-screen flex flex-col gap-4 items-center justify-center bg-gray-100 px-4 md:px-0">
      <div className="font-[montserratSemiBold] flex items-center gap-2"><img src="/inspect.png" className="w-7" /> <img src="/download.png" className="w-8 h-5" /> <h1 className="text-xl">VEHICLE VIN</h1></div>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-[montserratSemiBold] text-center mb-6 text-[#22024E]">
          Car Report Form
        </h1>
        <div className="space-y-6">
          <div className="relative">
            <label
              className="text-sm font-medium text-gray-700 block mb-2"
            >
              Name
            </label>
            <div className="flex items-center">
              <User className="w-5 h-5 text-gray-400 absolute left-3 top-[38px]" />
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="name"
                name="name"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#22024E] focus:border-transparent"
                placeholder="John Doe"
                required
              />
            </div>
          </div>
          <div className="relative">
            <label
              className="text-sm font-medium text-gray-700 block mb-2"
            >
              Email
            </label>
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-[38px]" />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                name="email"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#22024E] focus:border-transparent"
                placeholder="johndoe@example.com"
                required
              />
            </div>
          </div>
          <div className="relative">
            <label
              className="text-sm font-medium text-gray-700 block mb-2"
            >
              VIN Number
            </label>
            <div className="flex items-center">
              <Key className="w-5 h-5 text-gray-400 absolute left-3 top-[38px]" />
              <input
                value={vin}
                onChange={(e) => setVin(e.target.value)}
                type="text"
                id="vin"
                name="vin"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#22024E] focus:border-transparent"
                placeholder="1HGBH41JXMN109186"
                required
              />
            </div>
          </div>
          <button onClick={handleReport} className="text-white w-full px-8 md:px-10 py-2 rounded-md font-semibold mt-6 duration-500 shadow-[0px_10px_30px_rgba(118,85,225,0.3)] bg-origin-border bg-clip-border border-2 border-transparent bg-[linear-gradient(to_right,#4458dc_0%,#854fee_100%),radial-gradient(circle_at_top_left,#4458dc,#854fee)] hover:bg-[linear-gradient(#ffffff,#ffffff),radial-gradient(circle_at_top_left,#4458dc,#854fee)] hover:border-2 hover:border-[#854fee] hover:text-[#222222] hover:shadow-none hover:bg-clip-border">
            GET REPORT
          </button>
        </div>
      </div>
      <div className="w-full max-w-md flex justify-start">
        <Link href="/" className="text-[#22024E] underline flex items-center">
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>
      </div>
    </div>
  );
};

export default CarReportForm;
