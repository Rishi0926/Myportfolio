import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Rishikesh Reddy - Portfolio",
  description:
    "Full Stack Developer & Data Science Student passionate about AI development and Generative AI technologies.",
  keywords: "Full Stack Developer, Data Science, AI, React, Node.js, Python, Portfolio",
  authors: [{ name: "Chintha Kuntla Rishikesh Reddy" }],
  openGraph: {
    title: "Chintha Kuntla Rishikesh Reddy - Portfolio",
    description:
      "Full Stack Developer & Data Science Student passionate about AI development and Generative AI technologies.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
