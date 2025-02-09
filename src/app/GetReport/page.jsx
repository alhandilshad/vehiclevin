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
        setVinData(result.decode);
      })
      .catch((error) => {
        console.error("Error fetching VIN data:", error);
      });

    setLoading(false);
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

  useEffect(() => {
    if (vin) {
      getData();
    }
  }, [vin]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="font-[montserratSemiBold] flex items-center gap-2"><img src="/inspect.png" className="w-7" /> <img src="/download.png" className="w-8 h-5" /> <h1 className="text-xl">VEHICLE VIN</h1></div>
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
              <h1 className="text-xl text-black">
                We have found information for :{" "}
                <span className="text-[#22024E] font-[montserratSemiBold]">
                  {vin}
                </span>
              </h1>
              <p className="text-lg font-semibold mb-4">
                Here are the basic details :{" "}
              </p>
              {vinData?.slice(0, 5).map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-xl text-black">{item.label}:</span>{" "}
                  {item.value}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="w-full max-w-md flex justify-start mt-2">
          <div
            onClick={() => router.back()}
            className="text-[#22024E] underline flex items-center cursor-pointer"
          >
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