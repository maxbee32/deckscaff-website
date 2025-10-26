import "./globals.css";
import { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Deckscaff Ghana Ltd - Premium Scaffolding Solutions",
  description:
    "Professional scaffolding services, equipment rental, and custom engineering solutions for construction, industrial maintenance, and infrastructure projects across Ghana.",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
