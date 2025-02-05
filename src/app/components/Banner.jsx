import React from "react";

const Banner = () => {
  return (
    <div className="relative bg-[#22024E] text-white">
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="h-full w-full object-cover playsInline webkit-playsinline"
        >
          <source src="/158316-816359649_large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, #22024E, rgba(34, 2, 78, 0))",
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
          <button className="px-6 py-3 bg-white text-purple-900 font-bold rounded-full hover:shadow-[0px_10px_30px_rgba(118,85,225,0.3)] hover:bg-origin-border hover:bg-clip-border hover:bg-[linear-gradient(to_right,#4458dc_0%,#854fee_100%),radial-gradient(circle_at_top_left,#4458dc,#854fee)] hover:text-white duration-300">
            GET REPORT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
