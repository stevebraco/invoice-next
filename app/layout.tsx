import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import { ActiveFormProvider } from "@/context/ActiveFormProvider";
import { ThemeProvider } from "@/context/ThemeProvider";

const spartan = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Invoice App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spartan.className} h-full background-main`}>
        <ClerkProvider>
          <ThemeProvider>
            <ActiveFormProvider>{children}</ActiveFormProvider>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
