import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pokedex by Jerome',
  description: 'Pokedex using PokeAPI created by Jerome Jalandoon',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`antialiased bg-slate-200 overflow-hidden`}>
        {children}
      </body>
    </html>
  )
}
