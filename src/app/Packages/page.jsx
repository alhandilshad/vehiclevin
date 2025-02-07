"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PricingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col items-center justify-center p-6 md:p-12">
        <div className="font-[montserratSemiBold] text-lg flex gap-2 mb-5">
          <img src="/inspect.png" className="w-10" />{" "}
          <img src="/download.png" className="w-10" /> VEHICLE VIN
        </div>
      <div className="max-w-6xl w-full mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-[montserratSemiBold] text-[#22024E] tracking-tight">
            Purchase Full Report To Uncover More Information
          </h1>
        </div>

        <div className="flex md:flex-row flex-col justify-center items-center gap-6">
          <div className="rounded-xl cursor-pointer py-16 px-5 bg-blue-200 shadow-md flex flex-col justify-center items-center gap-4 hover:shadow-xl duration-300">
            <h1 className="text-xl font-[montserratSemiBold] text-[#22024E]">
              BASIC PACKAGE
            </h1>
            <h1 className="text-[#22024E] text-xl">30.00$</h1>
          </div>
          <div className="rounded-xl cursor-pointer py-16 px-5 bg-[#dcdcdc] shadow-md flex flex-col justify-center items-center gap-4 hover:shadow-xl duration-300">
            <h1 className="text-xl font-[montserratSemiBold] text-[#22024E]">
              SILVER PACKAGE
            </h1>
            <h1 className="text-[#22024E] text-xl">50.00$</h1>
          </div>
          <div className="rounded-xl cursor-pointer py-16 px-5 bg-[#FFD449] shadow-md flex flex-col justify-center items-center gap-4 hover:shadow-xl duration-300">
            <h1 className="text-xl font-[montserratSemiBold] text-[#22024E]">
              GOLD PACKAGE
            </h1>
            <h1 className="text-[#22024E] text-xl">70.00$</h1>
          </div>
        </div>
        <div className="w-full max-w-md flex justify-start">
          <div
            onClick={() => router.back()}
            className="text-[#22024E] underline flex items-center cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </div>
        </div>
      </div>
    </div>
  );
}
