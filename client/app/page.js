'use client'

import { useCryptoContext } from '../context/CryptoContext'
import CryptoCard from '../components/CryptoCard'
import LoadingSpinner from '../components/LoadingSpinner'

export default function Home() {
  const { cryptoData, loading } = useCryptoContext()

  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Object.entries(cryptoData).map(([coin, data]) => (
        <CryptoCard key={coin} coin={coin} data={data} />
      ))}
    </div>
  )
}

