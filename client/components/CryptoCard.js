import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid'
import { formatCurrency, formatPercentage } from '../utils/formatters'
import CryptoChart from './CryptoChart'

export default function CryptoCard({ coin, data }) {
  const { price, marketCap, "24hChange": change24h, deviation } = data

  const coinNames = {
    'bitcoin': 'Bitcoin',
    'matic-network': 'Polygon (MATIC)',
    'ethereum': 'Ethereum'
  }

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-bold mb-4">{coinNames[coin]}</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <p className="text-gray-400">Price</p>
          <p className="text-2xl font-semibold">{formatCurrency(price)}</p>
        </div>
        <div>
          <p className="text-gray-400">24h Change</p>
          <p className={`text-2xl font-semibold flex items-center ${change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {change24h >= 0 ? <ArrowUpIcon className="w-5 h-5 mr-1" /> : <ArrowDownIcon className="w-5 h-5 mr-1" />}
            {formatPercentage(change24h)}
          </p>
        </div>
        <div>
          <p className="text-gray-400">Market Cap</p>
          <p className="text-xl font-semibold truncate" title={formatCurrency(marketCap)} >{formatCurrency(marketCap)}</p>
        </div>
        <div>
          <p className="text-gray-400">Std Deviation</p>
          <p className="text-xl font-semibold">{formatCurrency(deviation)}</p>
        </div>
      </div>
      <CryptoChart coin={coin} />
    </div>
  )
}

