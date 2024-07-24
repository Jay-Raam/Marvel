import React, { useState, useEffect } from "react";
import axios from "axios";
import md5 from "md5";
import Image002 from "./image/m7.jpg";

const MarvelComics = () => {
  const [comics, setComics] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const publicKey = "9de244121f99e52ba39bf53128e5b7c4";
  const privateKey = "858042d684dd87865250d00091f70d1f64e746b5";
  const ts = new Date().getTime().toString();
  const hash = md5(ts + privateKey + publicKey);

  useEffect(() => {
    const fetchComics = async () => {
      setLoading(true);
      try {
        let apiUrl = `https://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

        if (searchTerm.trim() !== "") {
          apiUrl = `https://gateway.marvel.com/v1/public/comics?titleStartsWith=${encodeURIComponent(
            searchTerm
          )}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
        }

        const response = await axios.get(apiUrl);
        // console.log(response.data.data.results);
        setErrors(null);
        setComics(response.data.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
        setErrors("Not found any Character: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchComics();
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="marvel-comics bg-black">
      <div className="relative h-11 w-[300px] mx-auto my-0 mt-7">
        <input
          placeholder="Search comics by title..."
          className="peer h-full w-full text-white border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-white focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <label className="after:content[''] text-white pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
          Favorite Comics
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

      <ul className="flex flex-wrap justify-center gap-7 max-w-[1200px] mx-auto my-0 mt-[3.25rem]">
        {comics.map((comic) => (
          <li
            key={comic.id}
            className="overflow-hidden shadow-md w-[300px] mx-auto my-0"
            data-aos="zoom-in"
          >
            {comic.thumbnail && (
              <img
                src={`${comic.thumbnail.path}/portrait_medium.${comic.thumbnail.extension}`}
                alt={comic.title}
                className="w-[235px] h-auto mx-auto my-0"
                data-aos="fade-down"
              />
            )}
            <div className="p-5">
              <strong className="block text-xl text-white font-semibold mb-2 text-center">
                {comic.title}
              </strong>

              {comic.dates[1]?.date && (
                <p className="text-sm text-white font-normal text-center mt-3">
                  {new Date(comic.dates[1].date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              )}

              {comic.urls[0].url && (
                <a
                  href={comic.urls[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block text-lg group text-center ml-[62px] mt-[15px]"
                >
                  <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span className="relative">More Info</span>
                  </span>
                  <span
                    className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  ></span>
                </a>
              )}
            </div>
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

export default MarvelComics;
