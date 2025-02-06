import { Poppins } from "next/font/google"; // Import Poppins
import "./globals.css";
import Navbar from "./../components/Navbar";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Import all weights
  style: ["normal", "italic"], // Include both normal & italic styles
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Bitlinks - Your trusted URL shortener",
  description: "Bitlinks helps you shorten your URLs easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Toaster position="top-center" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
