// 5QMBJ4WTIPY3B93C
// https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=5QMBJ4WTIPY3B93C

import React, { useState, useEffect } from "react";

const StockSentiment = () => {
  const [sentimentData, setSentimentData] = useState(null);
  const apiKey = "5QMBJ4WTIPY3B93C";

  useEffect(() => {
    const fetchSentimentData = async () => {
      try {
        const response = await fetch(
          `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=${apiKey}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setSentimentData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchSentimentData();
  }, []); // empty dependency array means this effect runs once after initial render

  return (
    <div>
      <h2>Stock News Sentiment for AAPL</h2>
      {sentimentData ? (
        <div>
          <p>Symbol: {sentimentData["Meta Data"]["Symbol"]}</p>
          <p>Last Refreshed: {sentimentData["Meta Data"]["Last Refreshed"]}</p>
          <p>
            Articles Analyzed: {sentimentData["Sentiment"]["Articles Analyzed"]}
          </p>
          <p>Bullish Articles: {sentimentData["Sentiment"]["Bullish"]}</p>
          <p>Bearish Articles: {sentimentData["Sentiment"]["Bearish"]}</p>
          <p>Neutral Articles: {sentimentData["Sentiment"]["Neutral"]}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default StockSentiment;
