'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'

const CryptoContext = createContext()

export function CryptoProvider({ children }) {
  const [cryptoData, setCryptoData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const coins = ['bitcoin', 'matic-network', 'ethereum']
        const data = {}

        for (const coin of coins) {
          // Use environment variable for the base URL
          const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL

          const statsResponse = await axios.get(`${baseURL}/api/stats`, {
            params: { coin },
          })
          const statsData = statsResponse.data

          const deviationResponse = await axios.get(`${baseURL}/api/deviation`, {
            params: { coin },
          })
          const deviationData = deviationResponse.data

          data[coin] = { ...statsData, deviation: deviationData.deviation }
        }

        setCryptoData(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching crypto data:', error)
        setLoading(false)
      }
    }

    fetchData()
    const interval = setInterval(fetchData, 120000) // Refresh every 2 minutes

    return () => clearInterval(interval)
  }, [])

  return (
    <CryptoContext.Provider value={{ cryptoData, loading }}>
      {children}
    </CryptoContext.Provider>
  )
}

export function useCryptoContext() {
  return useContext(CryptoContext)
}
