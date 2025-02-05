"use client"

export default function Services() {
  return (
    <div className="bg-[#EFEFEF] w-full px-4 py-20 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-purple-600 mb-2">OUR SERVICES</p>
          <h1 className="text-5xl font-[montserratSemiBold] text-[#1E0E4A]">What Details are<br /> Contained in a Vehicle<br /> History Report?</h1>
        </div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Content Writing Card */}
          <div className="p-6 shadow-lg rounded-lg bg-white hover:bg-[#9403e4] hover:text-white duration-300">
            <div className="flex flex-col items-center text-center space-y-4">
              <div>
                <img src="https://vehiclefaxrecords.com/assets/images/services-2.png" />
              </div>
              <h3 className="text-xl font-bold">Vehicle Ownership History</h3>
              <p>Easily verify vehicle history using our report, which includes details about past vehicle proprietors, alongside ownership tenure and whereabouts.</p>
            </div>
          </div>

          {/* Digital Marketing Card */}
          <div className="p-6 shadow-lg rounded-lg bg-white hover:bg-[#9403e4] hover:text-white duration-300">
            <div className="flex flex-col items-center text-center space-y-4">
              <div>
                <img src="https://vehiclefaxrecords.com/assets/images/services-4.png" />
              </div>
              <h3 className="text-xl font-bold">Stolen Vehicle Check</h3>
              <p>Check the vehicle's theft history before buying. Verifying records protects you from legal issues and ensures your investment is secure.</p>
            </div>
          </div>

          {/* Graphic & Motion Design Card */}
          <div className="p-6 shadow-lg rounded-lg bg-white hover:bg-[#9403e4] hover:text-white duration-300">
            <div className="flex flex-col items-center text-center space-y-4">
              <div>
                <img src="https://vehiclefaxrecords.com/assets/images/services-6.png" />
              </div>
              <h3 className="text-xl font-bold">Odometer Rollback</h3>
              <p>Each year, over 450,000 cars in North America are sold with inaccurate odometer readings. Our vehicle history report helps you verify true mileage and prevent rollback, ensuring confidence in your purchase.</p>
            </div>
          </div>

          {/* E-Commerce Solutions Card */}
          <div className="p-6 shadow-lg rounded-lg bg-white hover:bg-[#9403e4] hover:text-white duration-300">
            <div className="flex flex-col items-center text-center space-y-4">
              <div>
                <img src="https://vehiclefaxrecords.com/assets/images/services-1.png" />
              </div>
              <h3 className="text-xl font-bold">Vehicle Usage And Accident History</h3>
              <p>Our report assesses past vehicle usage. To check if it was a rental or for personal use. Buying a pre-owned car? Uncover its accident history with our detailed reports.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}