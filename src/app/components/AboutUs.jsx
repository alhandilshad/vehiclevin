import React from "react";

const AboutUs = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-800 to-purple-950 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center py-12 px-6 md:py-24">
        {/* Left Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src="https://images.pexels.com/photos/11731972/pexels-photo-11731972.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Mechanic inspecting a car"
            className="rounded-lg shadow-lg w-full h-full"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0 md:ml-10 space-y-6">
          {/* Heading */}
          <div>
            <h4 className="text-sm uppercase font-bold tracking-wide">About Us</h4>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Your Trusted Source for <br /> Vehicle History.
            </h2>
          </div>

          {/* Paragraph */}
          <p className="text-lg leading-relaxed">
            At Vehicle Fax Records, we provide accurate and comprehensive vehicle
            history reports to help you make informed buying decisions. From
            ownership history to accident records and odometer accuracy, our reports
            give you the peace of mind you need to buy with confidence. Trust us to
            ensure your automotive investment is safe and secure.
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-4">
            {/* Stat 1 */}
            <div className="bg-white text-[#22024E] rounded-lg p-6 text-center shadow-md">
              <h3 className="text-3xl font-bold">700+</h3>
              <p className="mt-2 text-sm font-medium">Happy Clients</p>
            </div>
            {/* Stat 2 */}
            <div className="bg-white text-[#22024E] rounded-lg p-6 text-center shadow-md">
              <h3 className="text-3xl font-bold">15+</h3>
              <p className="mt-2 text-sm font-medium">Checkpoints</p>
            </div>
            {/* Stat 3 */}
            <div className="bg-white text-[#22024E] rounded-lg p-6 text-center shadow-md">
              <h3 className="text-3xl font-bold">99.9%</h3>
              <p className="mt-2 text-sm font-medium">Satisfaction</p>
            </div>
            <div className="bg-white text-[#22024E] rounded-lg p-6 text-center shadow-md">
              <h3 className="text-3xl font-bold">4.87</h3>
              <p className="mt-2 text-sm font-medium">Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;