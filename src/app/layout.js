'use client';
import { Inter } from "next/font/google";
import "./globals.css";
import {poppins} from '@/app/ui/fonts';
import { Provider } from 'react-redux';
import { store } from "./store/store"; // Adjust the import path based on your directory structure

// export const metadata = {
//   title: "Gummoz",
//   description: "Spare parts avaliable",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
