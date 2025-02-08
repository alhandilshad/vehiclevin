"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();
  const [vin, setVin] = useState(null);
  const [vinData, setVinData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const vinData = localStorage.getItem("vin");
    if (vinData) {
      setVin(JSON.parse(vinData));
    }
  }, []);

  const getData = async () => {
    if (!vin) {
      console.error("VIN is not available.");
      setLoading(false);
      return;
    }

    try {
      const api = `https://specifications.vinaudit.com/getspecifications.php?format=json&key=C16BP96XU2YBCXS&vin=${vin}`;
      const response = await fetch(api);

      if (!response.ok) {
        throw new Error("Failed to fetch VIN data.");
      }

      const data = await response.json();
      setVinData(data.attributes);
    } catch (error) {
      console.error("Error fetching VIN data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (vin) {
      getData();
    }
  }, [vin]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="font-[montserratSemiBold] text-lg flex gap-2 items-center justify-center mb-2">
      <img src="/inspect.png" className="w-10" /> <img src="/download.png" className="w-10 h-7" /> VEHICLE VIN
      </div>
      <h1 className="text-4xl font-[montserratSemiBold] mb-6 text-center text-black">
        Vehicle Report
      </h1>
      <div className="max-w-3xl mx-auto">
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
          {loading ? (
            <>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded mb-2 w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              <div className="h-4 bg-gray-200 rounded mt-2 w-3/5"></div>
            </>
          ) : (
            <div className="space-y-4 text-gray-700">
              <h1 className="text-xl text-black">We have found information for : <span className="text-[#22024E] font-[montserratSemiBold]">{vin}</span></h1>
              <p className="text-lg font-semibold mb-4">Here are the basic details : </p>
              <p><span className="text-xl font-[montserratSemibold] text-black">Make:</span> {vinData?.Make || "N/A"}</p>
              <p><span className="text-xl font-[montserratSemibold] text-black">Modal:</span> {vinData?.Model || "N/A"}</p>
              <p><span className="text-xl font-[montserratSemibold] text-black">Year:</span> {vinData?.ModelYear || "N/A"}</p>
              <p><span className="text-xl font-[montserratSemibold] text-black">Vehicle Type:</span> {vinData?.VehicleType || "N/A"}</p>
              <p><span className="text-xl font-[montserratSemibold] text-black">Made In:</span> {vinData?.PlantCountry || "N/A"}</p>
            </div>
          )}
        </div>
        <div className="w-full max-w-md flex justify-start mt-2">
        <div onClick={() => router.back()} className="text-[#22024E] underline flex items-center cursor-pointer">
          <ArrowLeft className="w-4 h-4" /> Back
        </div>
      </div>
      </div>
      
      <div className="flex flex-col items-center justify-center gap-2 mt-4">
        <button
          onClick={() => router.push("/Packages")}
          className="text-white px-8 md:px-10 py-2 rounded-md font-semibold duration-500 shadow-[0px_10px_30px_rgba(118,85,225,0.3)] bg-origin-border bg-clip-border border-2 border-transparent bg-[linear-gradient(to_right,#4458dc_0%,#854fee_100%),radial-gradient(circle_at_top_left,#4458dc,#854fee)] hover:bg-[linear-gradient(#ffffff,#ffffff),radial-gradient(circle_at_top_left,#4458dc,#854fee)] hover:border-2 hover:border-[#854fee] hover:text-[#222222] hover:shadow-none hover:bg-clip-border"
        >
          GET FULL REPORT
        </button>
        <p className="text-black text-center pt-2">
          NOTE: Information availability differs by vehicle. Not all reports may
          include every record.
        </p>
      </div>
    </div>
  );
};

export default Page;
