import { Inter } from "next/font/google"
import "./globals.css"
import Providers from "@/providers"
import TopNav from "@/components/TopNav"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Nextecom",
  description: "Ecommerce website",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <TopNav />
          {children}
        </Providers>
      </body>
    </html>
  )
}
