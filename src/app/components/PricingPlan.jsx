import { Check } from "lucide-react";

export default function PricingPlan() {
  return (
    <div className="bg-[#EFEFEF] w-full px-6 py-20">
      <h1 className="text-4xl font-[montserratSemiBold] text-center text-[#22024E]">
        Our Pricing Plan's
      </h1>
      <p className="text-center text-[#22024E] pt-2">
        We offer a range of affordable and flexible pricing options
      </p>
      <div className="flex items-center justify-center mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Simple Plan */}
          <div className="bg-[#FFD6EC] p-8 rounded-3xl">
            <div className="space-y-6">
              <div>
                <p className="text-lg font-medium">Basic Package</p>
                <h2 className="text-4xl font-bold mt-2">$30.00</h2>
                <p className="text-sm mt-2">Free plan for all users.</p>
              </div>

              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <span>Complete Report for One Vehicle</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <span>Report Never Expires</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <span>Detailed Vehicle Information</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <span>History Verification</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <span>Owner History</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <span>Sequential Number</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Efficient Plan */}
          <div className="bg-[#B4EEE3] p-8 rounded-3xl">
            <div className="space-y-6">
              <div>
                <p className="text-lg font-medium">Silver Package</p>
                <h2 className="text-4xl font-bold mt-2">
                  $50.00<span className="text-base font-normal"></span>
                </h2>
                <p className="text-sm mt-2">Ideal for individual creators.</p>
              </div>

              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <span>Complete Report for Three Vehicle</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <span>Report Never Expires</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <span>Detailed Vehicle Information</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <span>History Verification</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <span>Owner History</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <span>Sequential Number</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Team Plan */}
          <div className="bg-[#FFD449] p-8 rounded-3xl">
            <div className="space-y-6">
              <div>
                <p className="text-lg font-medium">Gold Package</p>
                <h2 className="text-4xl font-bold mt-2">
                  $70.00<span className="text-base font-normal"></span>
                </h2>
                <p className="text-sm mt-2">Small teams with up to 10 users.</p>
              </div>

              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <span>Complete Report for Five Vehicles</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <span>Report Never Expires</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <span>Detailed Vehicle Information</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <span>History Verification</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <span>Owner History</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <span>Sequential Number</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5">
        <button className="text-white px-8 md:px-10 py-3 rounded-md font-semibold mt-6 duration-500 shadow-[0px_10px_30px_rgba(118,85,225,0.3)] bg-origin-border bg-clip-border border-2 border-transparent bg-[linear-gradient(to_right,#4458dc_0%,#854fee_100%),radial-gradient(circle_at_top_left,#4458dc,#854fee)] hover:bg-[linear-gradient(#ffffff,#ffffff),radial-gradient(circle_at_top_left,#4458dc,#854fee)] hover:border-2 hover:border-[#854fee] hover:text-[#222222] hover:shadow-none hover:bg-clip-border">
          GET YOUR REPORT NOW
        </button>
      </div>
    </div>
  );
}
