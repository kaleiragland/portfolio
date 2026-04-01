import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorSparkle from "@/components/CursorSparkle";

export const metadata: Metadata = {
  title: "Kalei Ragland",
  description:
    "Software engineer portfolio — Columbia CS, building full-stack applications with React, Rails, Python, and AWS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <CursorSparkle />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
