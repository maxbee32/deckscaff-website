import "./globals.css";
import { ReactNode } from "react";
import Script from "next/script";

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Deckscaff Ghana Ltd - Premium Scaffolding and Formwork Solutions",
  description:
    "Professional scaffolding services, equipment rental, and custom engineering solutions for construction, industrial maintenance, and infrastructure projects across Ghana.",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* Add tracking script using Next.js Script component */}
        <Script src="/deckscaff-tracker.js" strategy="afterInteractive" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}