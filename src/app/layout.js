import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserratMedium = localFont({
  src: "./fonts/Montserrat-Medium.ttf",
  variable: "--font-montserratMedium",
  weight: "100 900",
});

const montserratSemiBold = localFont({
  src: "./fonts/Montserrat-SemiBold.ttf",
  variable: "--font-montserratSemiBold",
  weight: "100 900",
});

const montserratRegular = localFont({
  src: "./fonts/Montserrat-Regular.ttf",
  variable: "--font-montserratRegular",
  weight: "100 900",
});

export const metadata = {
  title: "Vehicle Vin",
  description: "Vehicle Vin Records",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Default metadata */}
        <title>Vehicle Vin</title>
        <meta name="description" content="Vehicle Vin Records" />
        <meta property="og:title" content="Vehicle Vin" />
        <meta property="og:description" content="Vehicle Vin Records" />
        <meta
          property="og:image"
          content="/about.webp"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com" />
        {/* Twitter Card metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vehicle Vin" />
        <meta name="twitter:description" content="Vehicle Vin Records" />
        <meta
          name="twitter:image"
          content="/about.webp"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
