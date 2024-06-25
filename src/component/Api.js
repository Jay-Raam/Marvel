// ba319f073e73fb9af8d917a46ffd2002

import React, { useEffect, useState } from "react";

const Api = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);

        // Replace 'YOUR_API_KEY' with your actual API key from API Sports
        const apiKey = "ba319f073e73fb9af8d917a46ffd2002";

        const response = await fetch(
          "https://v3.football.api-sports.io/countries",
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": "v3.football.api-sports.io",
              "x-rapidapi-key": apiKey,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jsonData = await response.json();
        // console.log(jsonData.response);
        setCountries(jsonData.response); // Ensure jsonData.response is defined
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Countries API Example</h1>
      <ul>
        {countries.map((country) => (
          <li key={country.id}>
            <img src={country.flag} alt={country.name} />
            <p>{country.description}</p>
            <p>{country.code}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Api;
