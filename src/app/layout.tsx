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
    "Joyería López, en Adolfo Mier entre Potosí y 6 de Octubre, Oruro. Oro de 18 kilates, plata, anillos de promoción, cadenas y reconocimientos a láser.",
  applicationName: "Joyería López",
};

export const viewport: Viewport = {
  themeColor: "#162537",
  colorScheme: "dark",
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
