import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Restorative Cuddling Co. — Salt Lake City",
  description: "Safe, professional, deeply nourishing platonic touch for your nervous system. Application-only sessions in Salt Lake City, Utah.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
