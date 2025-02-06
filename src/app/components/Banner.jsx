"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Banner = () => {
  const router = useRouter();
  return (
    <>
      <div className="relative bg-[#22024E] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            webkit-playsinline="true"
            className="h-full w-full object-cover"
          >
            <source src="/158316-816359649_large.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #22024E, rgba(34, 2, 78, 0))",
            }}
          ></div>
        </div>
        <div className="relative container mx-auto px-6 py-16 md:py-32 flex flex-col md:flex-row items-center">
          <div className="max-w-xl">
            <p className="text-lg md:text-xl font-medium mb-4">
              Digital Success Starts Here
            </p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Get Your Car's Full History with Just a VIN.
            </h1>
            <p className="text-base md:text-lg font-light mb-6">
              Empowering Your Journey with Trusted Vehicle History Reports.
            </p>
            <button
              onClick={() => router.push("/ReportForm")}
              className="px-6 py-3 bg-white text-purple-900 font-bold rounded-full hover:shadow-[0px_10px_30px_rgba(118,85,225,0.3)] hover:bg-origin-border hover:bg-clip-border hover:bg-[linear-gradient(to_right,#4458dc_0%,#854fee_100%),radial-gradient(circle_at_top_left,#4458dc,#854fee)] hover:text-white duration-300"
            >
              GET REPORT
            </button>
          </div>
        </div>
      </div>

      <div className="py-4 overflow-hidden relative">
        <div className="flex items-center gap-3 whitespace-nowrap animate-marquee">
          <img src="/caution.jpg" className="w-6" alt="Caution" />
          <p className="text-xl text-[#22024E]">
            Be cautious of unsolicited calls, emails, or messages offering
            "discounted" or "special" inspection deals. Scammers often use these
            methods to gain access to your vehicle or personal information.
          </p>
        </div>

        <style>
          {`
      @keyframes marquee {
        0% {
          transform: translateX(100%);
        }
        100% {
          transform: translateX(-100%);
        }
      }

      .animate-marquee {
        animation: marquee 30s linear infinite;
      }
    `}
        </style>
      </div>
    </>
  );
};

export default Banner;
