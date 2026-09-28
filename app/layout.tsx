import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
})

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Chintha Kuntla Rishikesh Reddy | AI & Full-Stack Developer",
  description:
    "AI Platform Developer & Data Science Specialist building high-performance, broadcast-quality software and multilingual AI products.",
  keywords: "Chintha Kuntla Rishikesh Reddy, Full Stack Developer, Data Science, AI, FluxoCut, LinkrCap, React, Node.js, Python, Portfolio",
  authors: [{ name: "Chintha Kuntla Rishikesh Reddy" }],
  openGraph: {
    title: "Chintha Kuntla Rishikesh Reddy | AI & Full-Stack Developer",
    description:
      "AI Platform Developer & Data Science Specialist building high-performance, broadcast-quality software and multilingual AI products.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sansFont.variable} ${monoFont.variable} scroll-smooth`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
