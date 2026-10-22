import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const sans = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joyería López",
  description:
    "Casa familiar de joyas en Bolivia. La pieza se encarga en una conversación: oro, plata o piedra.",
  applicationName: "Joyería López",
};

export const viewport: Viewport = {
  themeColor: "#111111",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={sans.variable}>
      <body className={sans.className}>{children}</body>
    </html>
  );
}
