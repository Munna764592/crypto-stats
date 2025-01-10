import './globals.css'
import { Inter } from 'next/font/google'
import { CryptoProvider } from '../context/CryptoContext'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Crypto Stats Dashboard',
  description: 'Premium cryptocurrency statistics dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <CryptoProvider>
          <div className="flex h-screen">
            <Navbar />
            <main className="flex-1 overflow-y-auto p-8">
              {children}
            </main>
          </div>
        </CryptoProvider>
      </body>
    </html>
  )
}

