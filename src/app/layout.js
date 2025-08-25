import "./globals.css";
import Navbar from "@/myComponents/Navbar";

import { Anton, Roboto } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Sports Pro",
  description: "Your sports platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${anton.variable} ${roboto.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
