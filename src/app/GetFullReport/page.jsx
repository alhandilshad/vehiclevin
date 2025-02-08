"use client";
import React, { useState } from "react";

const Page = () => {
  const [step, setStep] = useState(1); // Tracks the current step
  const [password, setPassword] = useState("");
  const [vin, setVin] = useState("");
  const [vinDetails, setVinDetails] = useState(null); // Store VIN details

  // Handle password submission
  const handlePasswordSubmit = () => {
    if (password === "abc") {
      setStep(2); // Move to the next step
    } else {
      alert("Invalid password");
    }
  };

  // Handle VIN submission
  const handleVinSubmit = () => {
    if (!vin) {
      alert("Please enter a VIN");
      return;
    }

    // Mock VIN details (replace this with real data fetching if needed)
    const mockDetails = {
      make: "Toyota",
      model: "Corolla",
      year: "2020",
      vin: vin,
    };

    setVinDetails(mockDetails);
    setStep(3); // Move to the final step
  };

  // Handle PDF download
  const handleDownloadPdf = () => {
    // Generate a simple PDF or trigger any functionality
    alert("Downloading PDF for VIN details...");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-[#22024E] mb-4">Vehicle VIN</h1>
        {step === 1 && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Enter Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#22024E] mb-4"
              placeholder="Enter password"
            />
            <button
              onClick={handlePasswordSubmit}
              className="bg-[#4458dc] text-white px-4 py-2 rounded-md hover:bg-[#854fee]"
            >
              Get Access
            </button>
          </div>
        )}
        {step === 2 && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Enter VIN Number
            </label>
            <input
              type="text"
              value={vin}
              onChange={(e) => setVin(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#22024E] mb-4"
              placeholder="Enter VIN"
            />
            <button
              onClick={handleVinSubmit}
              className="bg-[#4458dc] text-white px-4 py-2 rounded-md hover:bg-[#854fee]"
            >
              Enter
            </button>
          </div>
        )}
        {step === 3 && vinDetails && (
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              VIN Details:
            </h2>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Make:</strong> {vinDetails.make}
            </p>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Model:</strong> {vinDetails.model}
            </p>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Year:</strong> {vinDetails.year}
            </p>
            <p className="text-sm text-gray-700 mb-4">
              <strong>VIN:</strong> {vinDetails.vin}
            </p>
            <button
              onClick={handleDownloadPdf}
              className="bg-[#4458dc] text-white px-4 py-2 rounded-md hover:bg-[#854fee]"
            >
              Download PDF
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;