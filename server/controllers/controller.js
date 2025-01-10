import { CryptoData } from '../models/cryptoDataSchema.js';

async function getStats(req, res) {
    const { coin } = req.query;

    if (!coin || !['bitcoin', 'matic-network', 'ethereum'].includes(coin)) {
        return res.status(400).json({ error: 'Invalid coin parameter' });
    }

    try {
        const latestData = await CryptoData.findOne({ coin }).sort({ timestamp: -1 });

        if (!latestData) {
            return res.status(404).json({ error: 'No data available for the specified coin' });
        }

        res.json({
            price: latestData.price,
            marketCap: latestData.marketCap,
            "24hChange": latestData.change24h,
        });
    } catch (error) {
        console.error('Error fetching stats:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}


function calculateStandardDeviation(prices) {
    const mean = prices.reduce((sum, price) => sum + price, 0) / prices.length;
    const squaredDifferences = prices.map(price => Math.pow(price - mean, 2));
    const variance = squaredDifferences.reduce((sum, diff) => sum + diff, 0) / prices.length;
    return Math.sqrt(variance);
}

async function getDeviation(req, res) {
    const { coin } = req.query;

    if (!coin || !['bitcoin', 'matic-network', 'ethereum'].includes(coin)) {
        return res.status(400).json({ error: 'Invalid coin parameter' });
    }

    try {
        const latestRecords = await CryptoData.find({ coin })
            .sort({ timestamp: -1 })
            .limit(100)
            .select('price');

        if (latestRecords.length === 0) {
            return res.status(404).json({ error: 'No data available for the specified coin' });
        }

        const prices = latestRecords.map(record => record.price);
        const deviation = calculateStandardDeviation(prices);

        res.json({
            deviation: parseFloat(deviation.toFixed(2)),
        });
    } catch (error) {
        console.error('Error calculating deviation:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const controller = {
    getStats,
    getDeviation,
};

export default controller;  