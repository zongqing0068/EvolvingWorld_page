import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({ variable: "--font-display", subsets: ["latin"], weight: ["500", "600", "700"] });
const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EvolvingWorld — Interactive Literary Worlds that Evolve",
  description: "An open-schema framework for co-evolving Character Agents and a World Model in interactive literary worlds.",
  openGraph: { title: "EvolvingWorld", description: "Interactive literary worlds that remember and evolve.", images: ["https://raw.githubusercontent.com/HKUST-KnowComp/EvolvingWorld/main/figure/pipeline.png"] },
  twitter: { card: "summary_large_image", title: "EvolvingWorld", description: "Interactive literary worlds that remember and evolve.", images: ["https://raw.githubusercontent.com/HKUST-KnowComp/EvolvingWorld/main/figure/pipeline.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${sans.variable}`}>{children}</body></html>;
}
