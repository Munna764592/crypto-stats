# Cryptocurrency Statistics Dashboard

This project is a full-stack application that provides real-time cryptocurrency statistics and visualizations. It consists of a Node.js backend for data fetching and processing, and a Next.js frontend for displaying the information in a user-friendly interface.

## Features

- Real-time cryptocurrency data fetching (Bitcoin, Ethereum, and Polygon/MATIC)
- Background job to update data every 2 hours
- API endpoints for fetching latest stats and price deviation
- Interactive dashboard with price charts and key statistics
- Responsive design for desktop and mobile devices

## Backend

The backend is built with Node.js and Express, using MongoDB for data storage.

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/Munna764592/crypto-stats.git
   cd crypto-stats/server
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the backend directory with the following content:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   ```

4. Start the server:
   ```
   npm start
   ```

### API Endpoints

- `GET /stats?coin=\<coinname\>`: Get latest statistics for a specific cryptocurrency
- `GET /deviation?coin=\<coinname\>`: Get price standard deviation for a specific cryptocurrency

## Frontend

The frontend is built with Next.js and uses Tailwind CSS for styling.

### Installation

1. Navigate to the frontend directory:
   ```
   cd ../client
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the frontend directory with the following content:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:3000
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open `http://localhost:3000` in your browser to view the application.

## Technologies Used

- Backend:
  - Node.js
  - Express
  - MongoDB
  - Mongoose
  - node-cron

- Frontend:
  - Next.js
  - React
  - Tailwind CSS
  - Chart.js
  - React Chart.js 2

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
