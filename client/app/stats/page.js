'use client'
import { formatCurrency, formatPercentage } from '@/utils/formatters'
import LoadingSpinner from '@/components/LoadingSpinner'
import { useCryptoContext } from '@/context/CryptoContext'

export default function Stats() {
    const { cryptoData, loading } = useCryptoContext()

    if (loading) {
        return <LoadingSpinner />
    }

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-8">Cryptocurrency Statistics</h1>
            <div className="overflow-x-auto">
                <table className="w-full bg-gray-800 rounded-lg overflow-hidden">
                    <thead className="bg-gray-700">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Coin</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Price</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">24h Change</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Market Cap</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Std Deviation</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                        {Object.entries(cryptoData).map(([coin, data]) => (
                            <tr key={coin} className="hover:bg-gray-700 transition-colors duration-200">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <img className="h-10 w-10 rounded-full mr-3" src={`/images/${coin}.png`} alt={coin} />
                                        <div className="text-sm font-medium">{coin}</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">{formatCurrency(data.price)}</td>
                                <td className={`px-6 py-4 whitespace-nowrap text-sm ${data['24hChange'] >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                    {formatPercentage(data['24hChange'])}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">{formatCurrency(data.marketCap)}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">{formatCurrency(data.deviation)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

