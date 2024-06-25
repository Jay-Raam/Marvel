// c914979715a74548885aa5034d074baf

import React, { useState, useEffect } from "react";

const API_KEY = "c914979715a74548885aa5034d074baf";

const StocksComponent = () => {
  const [stocksData, setStocksData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStocksData = async () => {
      try {
        const response = await fetch("https://api.twelvedata.com/stocks", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        console.log(data);
        setStocksData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchStocksData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Stocks Data</h2>
      {stocksData && (
        <ul>
          {stocksData.map((stock, index) => (
            <li key={index}>
              <h1>{stock.name}</h1>
              <p>Country: {stock.country}</p>
              <p>Currency: {stock.currency}</p>
              <p>Exchange: {stock.exchange}</p>
              <p>MIC Code: {stock.mic_code}</p>
              <p>Symbol: {stock.symbol}</p>
              <p>Type: {stock.type}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StocksComponent;
