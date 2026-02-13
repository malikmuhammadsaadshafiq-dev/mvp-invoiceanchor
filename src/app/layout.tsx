import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'InvoiceAnchor - Automated Invoice Chasing',
  description: 'Automated invoice chasing system for small service businesses',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#FAF9F6]">
        {children}
      </body>
    </html>
  )
}