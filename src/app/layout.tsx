import { ReactNode } from "react";
import "./globals.css";
import Link from "next/link";
import { redirect } from "next/navigation";
import Header from "./Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
