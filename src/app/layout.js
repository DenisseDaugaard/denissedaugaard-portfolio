import { Nunito, Space_Mono, Roboto_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const geistMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight:['400','700'] // string
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight:['400','700'] // string
});

export const metadata = {
  title: "Denisse Daugaard",
  description: "This website is my personal portfolio, where I showcase my projects, skills, and experience as a developer.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${robotoMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
