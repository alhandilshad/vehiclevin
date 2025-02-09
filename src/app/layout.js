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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
