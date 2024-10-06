import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Akshay Khatri - Software Developer",
  description:
    "Explore my portfolio showcasing my projects, skills, and experience in software development.",
  openGraph: {
    title: "Akshay Khatri - Software Developer",
    description:
      "Explore my portfolio showcasing my projects, skills, and experience in software development.",
    url: "https://akshay-khatri.vercel.app/",
    images: [
      {
        url: "/AkshayAvatar.png",
        width: 420,
        height: 420,
        alt: "Akshay Khatri Portfolio Preview",
      },
    ],
    siteName: "Akshay Khatri Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: "black" }}
      >
        {children}
      </body>
    </html>
  );
}
