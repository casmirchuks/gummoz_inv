import { Inter } from "next/font/google";
import "./globals.css";
import {poppins} from '@/app/ui/fonts';

export const metadata = {
  title: "Gummoz",
  description: "Spare parts avaliable",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
