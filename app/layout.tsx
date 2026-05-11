import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shopify App Review Monitor – Track Competitor Reviews",
  description: "Monitor competitor Shopify app reviews, analyze sentiment and feature requests, and get alerts for market opportunities."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b63a9e03-7d27-435c-bcd1-277ec1c42d30"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
