import React, { useState, useEffect } from "react";
import axios from "axios";
import md5 from "md5";
import Image002 from "./image/m2.png";

const MarvelCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);
  const publicKey = "9de244121f99e52ba39bf53128e5b7c4";
  const privateKey = "858042d684dd87865250d00091f70d1f64e746b5";
  const ts = new Date().getTime().toString();
  const hash = md5(ts + privateKey + publicKey);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      try {
        let apiUrl = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

        if (searchTerm.trim() !== "") {
          apiUrl = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${encodeURIComponent(
            searchTerm
          )}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
        }

        const response = await axios.get(apiUrl);
        // console.log(response.data.data.results);
        setCharacters(response.data.data.results);
        setErrors(null);
      } catch (error) {
        console.error("Error fetching data:", error);
        setErrors("Not found any Character: " + error.message);
      } finally {
        setLoading(false); // Stop loading animation
      }
    };

    fetchCharacters();
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="marvel-charactors bg-black pb-6">
      <div className="relative h-11 w-[300px] mx-auto my-0 mt-7 ">
        <input
          placeholder="Search characters by name..."
          className="peer text-white h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-white focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Favorite Characters
        </label>
      </div>

      {loading && (
        <div className="h-[100vh]">
          <div
            className="loader text-center ml-[50%] mt-5 border-t-2 rounded-full border-gray-500 bg-gray-300 animate-spin
aspect-square w-8 flex justify-center items-center text-yellow-700"
          ></div>
        </div>
      )}

      <ul className="flex flex-wrap overflow-hidden justify-center gap-7 max-w-[1200px] mx-auto my-0 mt-[3.25rem]">
        {characters.map((character) => (
          <li
            key={character.id}
            className="card hover:bg-red-600 border rounded overflow-hidden shadow-md w-[300px] mx-auto my-0 flex flex-col items-center gap-3"
            data-aos="fade-left"
          >
            {character.thumbnail && (
              <img
                src={`${character.thumbnail.path}/portrait_medium.${character.thumbnail.extension}`}
                alt={character.name}
                data-aos="fade-down"
                className="w-[300px] h-auto mx-auto my-0"
              />
            )}
            <h2 className="title-for-character text-white block text-xl font-semibold mb-2 text-center">
              {character.name}
            </h2>
            <p className="title-for-des text-white text-center p-5">
              {character.description || "No description available"}
            </p>
          </li>
        ))}
      </ul>
      {errors && (
        <div>
          <img src={Image002} alt="the marvel cahracter" />
          <p className="text-center text-red-500 font-bold">{errors}</p>
        </div>
      )}
    </div>
  );
};

export default MarvelCharacters;
