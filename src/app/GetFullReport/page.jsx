"use client";
import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import moment from "moment";

const Page = () => {
  const [step, setStep] = useState(1); // Tracks the current step
  const [password, setPassword] = useState("");
  const [vin, setVin] = useState("");

  const [vinData, setvinData] = useState([]);

//const vin = "XXXDEF1GH23456789".toUpperCase();

  const handlePasswordSubmit = () => {
    if (password === "H-TECHBPO2024") {
      setStep(2); // Move to the next step
    } else {
      alert("Invalid password");
    }
  };

  const handleVinSubmit = () => {
    if (!vin) {
      alert("Please enter a VIN");
      return;
    }

    const apiPrefix = "https://api.vindecoder.eu/3.2";
    const apiKey = "2a97f94fd875";
    const secretKey = "e85c257384";
    const id = "decode";

    const controlSum = sha1(`${vin}|${id}|${apiKey}|${secretKey}`).substring(
        0,
        10
    );
    const url = `${apiPrefix}/${apiKey}/${controlSum}/decode/${vin}.json`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        setvinData(result.decode);
      })
      .catch((error) => {
        console.error("Error fetching VIN data:", error);
      });

    // setVinDetails(mockDetails);
    setStep(3); // Move to the final step
  };

  function sha1(msg) {
    function rotate_left(n, s) {
      return (n << s) | (n >>> (32 - s));
    }

    function cvt_hex(val) {
      let str = "";
      let i;
      let v;
      for (i = 7; i >= 0; i--) {
        v = (val >>> (i * 4)) & 0x0f;
        str += v.toString(16);
      }
      return str;
    }

    function Utf8Encode(string) {
      string = string.replace(/\r\n/g, "\n");
      let utftext = "";

      for (let n = 0; n < string.length; n++) {
        const c = string.charCodeAt(n);

        if (c < 128) {
          utftext += String.fromCharCode(c);
        } else if (c > 127 && c < 2048) {
          utftext += String.fromCharCode((c >> 6) | 192);
          utftext += String.fromCharCode((c & 63) | 128);
        } else {
          utftext += String.fromCharCode((c >> 12) | 224);
          utftext += String.fromCharCode(((c >> 6) & 63) | 128);
          utftext += String.fromCharCode((c & 63) | 128);
        }
      }

      return utftext;
    }

    let blockstart;
    let i, j;
    const W = new Array(80);
    let H0 = 0x67452301;
    let H1 = 0xefcdab89;
    let H2 = 0x98badcfe;
    let H3 = 0x10325476;
    let H4 = 0xc3d2e1f0;
    let A, B, C, D, E;
    let temp;

    msg = Utf8Encode(msg);

    const msg_len = msg.length;

    const word_array = [];
    for (i = 0; i < msg_len - 3; i += 4) {
      j =
        (msg.charCodeAt(i) << 24) |
        (msg.charCodeAt(i + 1) << 16) |
        (msg.charCodeAt(i + 2) << 8) |
        msg.charCodeAt(i + 3);
      word_array.push(j);
    }

    switch (msg_len % 4) {
      case 0:
        i = 0x080000000;
        break;
      case 1:
        i = (msg.charCodeAt(msg_len - 1) << 24) | 0x0800000;
        break;
      case 2:
        i =
          (msg.charCodeAt(msg_len - 2) << 24) |
          (msg.charCodeAt(msg_len - 1) << 16) |
          0x08000;
        break;
      case 3:
        i =
          (msg.charCodeAt(msg_len - 3) << 24) |
          (msg.charCodeAt(msg_len - 2) << 16) |
          (msg.charCodeAt(msg_len - 1) << 8) |
          0x80;
        break;
    }

    word_array.push(i);

    while (word_array.length % 16 != 14) word_array.push(0);

    word_array.push(msg_len >>> 29);
    word_array.push((msg_len << 3) & 0x0ffffffff);

    for (blockstart = 0; blockstart < word_array.length; blockstart += 16) {
      for (i = 0; i < 16; i++) W[i] = word_array[blockstart + i];
      for (i = 16; i <= 79; i++)
        W[i] = rotate_left(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);

      A = H0;
      B = H1;
      C = H2;
      D = H3;
      E = H4;

      for (i = 0; i <= 19; i++) {
        temp =
          (rotate_left(A, 5) + ((B & C) | (~B & D)) + E + W[i] + 0x5a827999) &
          0x0ffffffff;
        E = D;
        D = C;
        C = rotate_left(B, 30);
        B = A;
        A = temp;
      }

      for (i = 20; i <= 39; i++) {
        temp =
          (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0x6ed9eba1) &
          0x0ffffffff;
        E = D;
        D = C;
        C = rotate_left(B, 30);
        B = A;
        A = temp;
      }

      for (i = 40; i <= 59; i++) {
        temp =
          (rotate_left(A, 5) +
            ((B & C) | (B & D) | (C & D)) +
            E +
            W[i] +
            0x8f1bbcdc) &
          0x0ffffffff;
        E = D;
        D = C;
        C = rotate_left(B, 30);
        B = A;
        A = temp;
      }

      for (i = 60; i <= 79; i++) {
        temp =
          (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0xca62c1d6) &
          0x0ffffffff;
        E = D;
        D = C;
        C = rotate_left(B, 30);
        B = A;
        A = temp;
      }

      H0 = (H0 + A) & 0x0ffffffff;
      H1 = (H1 + B) & 0x0ffffffff;
      H2 = (H2 + C) & 0x0ffffffff;
      H3 = (H3 + D) & 0x0ffffffff;
      H4 = (H4 + E) & 0x0ffffffff;
    }

    const tempValue =
      cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);

    return tempValue.toLowerCase();
  }

  const handleDownloadPdf = () => {
    if (!vinData || vinData.length === 0) {
      alert("No data to download!");
      return;
    }
  
    const doc = new jsPDF();
  
    // Add the logo image to the top center
    const logoWidth = 30; // Adjust the logo width
    const logoHeight = 10; // Adjust the logo height
    const centerX = (doc.internal.pageSize.width - logoWidth) / 2;
  
    const logoURL = "/inspect.png"; // Change to the actual path of your logo
    const secondLogoURL = "/download.png"; // Second logo
  
    const loadImage = (url, callback) => {
      const img = new Image();
      img.onload = () => callback(img);
      img.src = url;
    };
  
    // Load the first logo
    loadImage(logoURL, (logoImg) => {
      doc.addImage(
        logoImg,
        "PNG", // Adjust based on your logo file type
        centerX - 25, // Adjust for first logo's X position
        10, // Y position
        logoWidth,
        logoHeight
      );
  
      // Load the second logo
      loadImage(secondLogoURL, (secondLogoImg) => {
        doc.addImage(
          secondLogoImg,
          "PNG",
          centerX + 25, // Adjust for the second logo's X position
          10, // Y position
          logoWidth,
          logoHeight
        );
  
        // Add "Vehicle History Report" title
        doc.setFontSize(18);
        doc.text("Vehicle History Report", doc.internal.pageSize.width / 2, 40, {
          align: "center",
        });
  
        // Add reported date and VIN number
        doc.setFontSize(12);
        const currentDate = moment().format("dddd, MMMM D, YYYY");
        doc.text(
          `Reported Date: ${currentDate}`,
          doc.internal.pageSize.width / 2,
          50,
          { align: "center" }
        );
        doc.text(
          `VIN Number: ${vin.toUpperCase()}`,
          doc.internal.pageSize.width / 2,
          60,
          { align: "center" }
        );
  
        // Add table data
        const startY = 70;
        const tableData = vinData
          ?.filter((_, index) => ![77, 78, 79, 80, 81].includes(index))
          .map((item) => [item.label, item.value !== "" ? item.value : "N/A"]);
  
        doc.autoTable({
          head: [["Label", "Value"]],
          body: tableData,
          startY: startY,
        });

        doc.setFontSize(10);
        doc.text("Since 1994 Vehicle VIN Records - All Rights Reserved.", doc.internal.pageSize.width / 2, 40, {
          align: "center",
        });
  
        // Save the PDF
        doc.save("VIN_History_Report.pdf");
      });
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl text-center">
      <div className="font-[montserratSemiBold] flex items-center gap-2"><img src="/inspect.png" className="w-7" /> <img src="/download.png" className="w-8 h-5" /> <h1 className="text-xl">VEHICLE VIN</h1></div>
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
        {step === 3 && vinData && (
          <div>
             <div>
              {vinData
                ?.filter((_, index) => ![77, 78, 79, 80, 81].includes(index))
                .map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <p className="text-sm text-gray-700 mb-2">{item.label}</p>
                    <p>{item.value !== "" ? item.value : "N/A"}</p>
                  </div>
                ))}
            </div>
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