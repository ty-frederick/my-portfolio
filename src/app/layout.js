import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

// Google fonts with CSS variables
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  title: "My Portfolio",
  description: "Built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body className="antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}