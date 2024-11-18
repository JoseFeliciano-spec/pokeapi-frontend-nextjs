import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/ui/Header";
import "./globals.css";

// If loading a variable font, you don't need to specify the font weight
const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pokedex | Proyecto By Jose Feliciano",
  description: "Aplicación de Pokédex creada por Jose Feliciano Anaya Simanca",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-dvh w-full">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
