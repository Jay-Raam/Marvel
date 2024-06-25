// 1MHDFMI2DWT4KPLN
// https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=EUR&apikey=1MHDFMI2DWT4KPLN

import React, { useEffect, useState } from "react";

const DigitalCurrency = () => {
  const [data, setdata] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=EUR&apikey=1MHDFMI2DWT4KPLN"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        console.log(jsonData);

        if (jsonData && jsonData.MetaData) {
          setdata([jsonData]);
        } else {
          throw new Error("Invalid data structure from API");
        }

        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <h1>Information: {item.MetaData.Information}</h1>
            <p>Digital Currency Code: {item.MetaData.DigitalCurrencyCode}</p>
            <p>Digital Currency Name: {item.MetaData.DigitalCurrencyName}</p>
            <p>Market Code: {item.MetaData.MarketCode}</p>
            <p>Last Refreshed: {item.MetaData.LastRefreshed}</p>
            <p>Market Name: {item.MetaData.MarketName}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default DigitalCurrency;
