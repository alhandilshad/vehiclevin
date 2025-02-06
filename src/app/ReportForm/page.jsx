import { User, Mail, Key, ArrowLeft } from "lucide-react";
import Link from "next/link";

const CarReportForm = () => {
  return (
    <div className="min-h-screen flex flex-col gap-4 items-center justify-center bg-gray-100 px-4 md:px-0">
      <div className="font-[montserratSemiBold] text-lg flex gap-2">
        <img src="/download.png" className="w-10" /> VEHICLE VIN
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-[montserratSemiBold] text-center mb-6 text-[#22024E]">
          Car Report Form
        </h1>
        <form className="space-y-6">
          <div className="relative">
            <label
              htmlFor="name"
              className="text-sm font-medium text-gray-700 block mb-2"
            >
              Name
            </label>
            <div className="flex items-center">
              <User className="w-5 h-5 text-gray-400 absolute left-3 top-[38px]" />
              <input
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
              htmlFor="email"
              className="text-sm font-medium text-gray-700 block mb-2"
            >
              Email
            </label>
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-[38px]" />
              <input
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
              htmlFor="vin"
              className="text-sm font-medium text-gray-700 block mb-2"
            >
              VIN Number
            </label>
            <div className="flex items-center">
              <Key className="w-5 h-5 text-gray-400 absolute left-3 top-[38px]" />
              <input
                type="text"
                id="vin"
                name="vin"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#22024E] focus:border-transparent"
                placeholder="1HGBH41JXMN109186"
                required
              />
            </div>
          </div>
          <button className="text-white w-full px-8 md:px-10 py-2 rounded-md font-semibold mt-6 duration-500 shadow-[0px_10px_30px_rgba(118,85,225,0.3)] bg-origin-border bg-clip-border border-2 border-transparent bg-[linear-gradient(to_right,#4458dc_0%,#854fee_100%),radial-gradient(circle_at_top_left,#4458dc,#854fee)] hover:bg-[linear-gradient(#ffffff,#ffffff),radial-gradient(circle_at_top_left,#4458dc,#854fee)] hover:border-2 hover:border-[#854fee] hover:text-[#222222] hover:shadow-none hover:bg-clip-border">
            GET REPORT
          </button>
        </form>
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
