import { CryptoData } from './models/cryptoDataSchema.js';

const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3/simple/price';
const COINS = ['bitcoin', 'matic-network', 'ethereum'];

export async function fetchAndStoreCryptoData() {
  try {
    const response = await fetch(`${COINGECKO_API_URL}?ids=${COINS.join(',')}&vs_currencies=usd&include_market_cap=true&include_24hr_change=true`);
    const data = await response.json();

    for (const coin of COINS) {
      await CryptoData.create({
        coin,
        price: data[coin].usd,
        marketCap: data[coin].usd_market_cap,
        change24h: data[coin].usd_24h_change,
      });
    }

    console.log('Crypto data fetched and stored successfully');
  } catch (error) {
    console.error('Error fetching and storing crypto data:', error);
  }
}

