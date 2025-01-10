'use client'

import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const coinConfig = {
  'bitcoin': {
    color: 'rgb(247, 147, 26)',
    label: 'Bitcoin Price (USD)',
    data: [45000, 46500, 45800, 47200, 46800, 48000, 47500],
  },
  'matic-network': {
    color: 'rgb(130, 71, 229)',
    label: 'Polygon (MATIC) Price (USD)',
    data: [1.15, 1.18, 1.22, 1.20, 1.25, 1.23, 1.27],
  },
  'ethereum': {
    color: 'rgb(98, 126, 234)',
    label: 'Ethereum Price (USD)',
    data: [3200, 3250, 3180, 3300, 3280, 3350, 3400],
  },
}

export default function CryptoChart({ coin }) {
  const config = coinConfig[coin] || coinConfig['bitcoin'] // Default to Bitcoin if coin is not found

  const data = {
    labels: ['1d', '2d', '3d', '4d', '5d', '6d', '7d'],
    datasets: [
      {
        label: config.label,
        data: config.data,
        fill: false,
        borderColor: config.color,
        backgroundColor: config.color,
        tension: 0.1
      }
    ]
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: '7-Day Price Trend',
        color: 'rgb(156, 163, 175)' // text-gray-400
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(17, 24, 39, 0.8)', // bg-gray-900 with opacity
        titleColor: 'rgb(243, 244, 246)', // text-gray-100
        bodyColor: 'rgb(209, 213, 219)', // text-gray-300
        borderColor: 'rgb(75, 85, 99)', // border-gray-600
        borderWidth: 1,
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
            }
            return label;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(75, 85, 99, 0.2)' // Slightly visible grid lines
        },
        ticks: {
          color: 'rgb(156, 163, 175)' // text-gray-400
        }
      },
      y: {
        beginAtZero: false,
        grid: {
          color: 'rgba(75, 85, 99, 0.2)' // Slightly visible grid lines
        },
        ticks: {
          color: 'rgb(156, 163, 175)', // text-gray-400
          callback: function (value, index, values) {
            return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);
          }
        }
      }
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    },
    hover: {
      mode: 'nearest',
      intersect: false
    }
  }

  return (
    <div className="bg-gray-800 rounded-lg p-4 mt-4">
      <Line data={data} options={options} />
    </div>
  )
}

