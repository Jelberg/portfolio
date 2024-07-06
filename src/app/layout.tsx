import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {Providers} from "./providers";
import NavbarComponent from "@/app/features/Navbar.component";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jessica's Dev Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark text-foreground bg-background">
      <body >
        <Providers>
            <NavbarComponent />
            {children}
        </Providers>
      </body>
    </html>
  );
}
