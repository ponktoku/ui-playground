import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ponktoku UI Playground",
  description: "UI Playground generated with Tailwind and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-black to-gray-900 flex flex-col">
        {children}
      </body>
    </html>
  );
}
