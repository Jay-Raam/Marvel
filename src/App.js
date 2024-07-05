import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Charactor from "./component/Charactor";
import Image001 from "./component/image/m7.jpg";
import Image002 from "./component/image/deadpool.jpg";
import Image003 from "./component/image/iranman.jpg";
import Image004 from "./component/image/doctor.jpg";
import Image005 from "./component/image/black.jpg";
import Image006 from "./component/image/emma.jpg";
import Image007 from "./component/image/captain.jpg";
import Image008 from "./component/image/hulk.jpeg";
import Image009 from "./component/image/loki.webp";
import Image0010 from "./component/image/wanda.jpg";
import Image0011 from "./component/image/thanos.jpg";
import Image0012 from "./component/image/vision.jpg";
import Image0013 from "./component/image/shang.jpg";
import Image0014 from "./component/image/venam.jpg";
import Image0015 from "./component/image/thor.jpg";
import Image0016 from "./component/image/valkyrie.jpg";
import Image0017 from "./component/image/cat.jpg";

import Omic from "./component/omic";
import { TiThMenuOutline, TiTimesOutline } from "react-icons/ti";
import "./index.css";
import Copyright from "./component/copyright";

const FavCharactor = [
  {
    name: "Deadpool",
    image: Image002,
  },
  {
    name: "Iran Man",
    image: Image003,
  },
  {
    name: "Docter strange",
    image: Image004,
  },
  {
    name: "Balck Panther",
    image: Image005,
  },
  {
    name: "Emma Frost",
    image: Image006,
  },
  {
    name: "Captain America",
    image: Image007,
  },
  {
    name: "Hulk",
    image: Image008,
  },
  {
    name: "Loki",
    image: Image009,
  },
  {
    name: "Wanda",
    image: Image0010,
  },
  {
    name: "Thanos",
    image: Image0011,
  },
  {
    name: "Vision",
    image: Image0012,
  },
  {
    name: " Shang-Chi",
    image: Image0013,
  },
  {
    name: "Venom",
    image: Image0014,
  },
  {
    name: "Thor",
    image: Image0015,
  },
  {
    name: " Valkyrie",
    image: Image0016,
  },
  {
    name: " Black Cat",
    image: Image0017,
  },
];

const FavComic = [
  {
    name: "DEADPOOL KILLS THE MARVEL UNIVERSE",
    year: "2011 - 2012",
    image:
      "https://books.google.co.in/books/publisher/content?id=4pRfAwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U0KTlmaIwZ8gcGltEseBTPmNSKwrQ&w=1280",
  },
  {
    name: "THANOS",
    year: "2016",
    image:
      "https://cdn.marvel.com/u/prod/marvel/i/mg/b/f0/5a6111deb8b7c/clean.jpg",
  },
  {
    name: "BLACK PANTHER",
    year: "2016",
    image:
      "https://cdn.marvel.com/u/prod/marvel/i/mg/c/80/567065cfebad5/clean.jpg",
  },
  {
    name: "AVENGERS",
    year: "2012",
    image:
      "https://cdn.marvel.com/u/prod/marvel/i/mg/1/00/51646f8d43394/clean.jpg",
  },
  {
    name: "DEADPOOL KILLS THE MARVEL UNIVERSE AGAIN",
    year: "2017",
    image:
      "https://cdn.marvel.com/u/prod/marvel/i/mg/e/00/5955392a07557/clean.jpg",
  },
  {
    name: "Secret Wars",
    year: "1985",
    image: "https://upload.wikimedia.org/wikipedia/en/0/08/Secretwars1.png",
  },
  {
    name: " Civil War",
    year: "2006",
    image: "https://upload.wikimedia.org/wikipedia/en/2/23/Civil_War_7.jpg",
  },
  {
    name: "Infinity Gauntlet",
    year: "1991",
    image:
      "https://upload.wikimedia.org/wikipedia/en/a/af/Infinity_Gauntlet_1.jpg",
  },
  {
    name: "World War Hulk",
    year: "2007",
    image:
      "https://upload.wikimedia.org/wikipedia/en/2/2d/World_War_Hulk_1.jpg",
  },
  {
    name: "DEADPOOL KILLS DEADPOOL",
    year: "2013",
    image:
      "https://books.google.co.in/books/publisher/content?id=0Q7lAwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U2hcz02X6Dy8u0JzUwtCNJfzgId0A&w=1280",
  },
  {
    name: "DEADPOOL: BADDER BLOOD",
    year: "2023",
    image:
      "https://books.google.co.in/books/publisher/content?id=NJHwEAAAQBAJ&pg=PA1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U2Nd9B8-h-Ds-80RrEEgc7HDQegVA&w=1280",
  },
  {
    name: "MARVEL SUPER HEROES SECRET WARS: BATTLEWORLD",
    year: "2023",
    image:
      "https://books.google.co.in/books/publisher/content?id=CY_wEAAAQBAJ&pg=PA1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U3r5inwmYr8byLnEVjsLHOZKr6wwA&w=1280",
  },
];

export default function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State to track menu state

  const handleClick = () => {
    setIsOpen(!isOpen);
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <Router>
      <div className="App bg-black">
        <div className="flex justify-evenly items-center gap-[3.5rem] max-w-[1200px] mx-auto my-0 py-2 pt-[1rem]">
          <div className="title flex justify-center items-center">
            <a
              href="https://marvel.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="130"
                height="52"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect fill="#EC1D24" width="100%" height="100%"></rect>
                <path
                  fill="#FEFEFE"
                  d="M126.222 40.059v7.906H111.58V4h7.885v36.059h6.757zm-62.564-14.5c-.61.294-1.248.44-1.87.442v-14.14h.04c.622-.005 5.264.184 5.264 6.993 0 3.559-1.58 5.804-3.434 6.705zM40.55 34.24l2.183-18.799 2.265 18.799H40.55zm69.655-22.215V4.007H87.879l-3.675 26.779-3.63-26.78h-8.052l.901 7.15c-.928-1.832-4.224-7.15-11.48-7.15-.047-.002-8.06 0-8.06 0l-.031 39.032-5.868-39.031-10.545-.005-6.072 40.44.002-40.435H21.278L17.64 26.724 14.096 4.006H4v43.966h7.95V26.78l3.618 21.192h4.226l3.565-21.192v21.192h15.327l.928-6.762h6.17l.927 6.762 15.047.008h.01v-.008h.02V33.702l1.845-.27 3.817 14.55h7.784l-.002-.01h.022l-5.011-17.048c2.538-1.88 5.406-6.644 4.643-11.203v-.002C74.894 19.777 79.615 48 79.615 48l9.256-.027 6.327-39.85v39.85h15.007v-7.908h-7.124v-10.08h7.124v-8.03h-7.124v-9.931h7.124z"
                ></path>
                <path fill="#EC1D24" d="M0 0h30v52H0z"></path>
                <path
                  fill="#FEFEFE"
                  d="M31.5 48V4H21.291l-3.64 22.735L14.102 4H4v44h8V26.792L15.577 48h4.229l3.568-21.208V48z"
                ></path>
              </svg>
            </a>
          </div>
          <div>
            <span onClick={handleClick} className="cursor-pointer text-white">
              {isOpen ? (
                <TiTimesOutline className="text-white" />
              ) : (
                <TiThMenuOutline className="text-white" />
              )}
            </span>
          </div>
        </div>

        {showMenu && (
          <nav className="transition-0.7s cubic-bezier(0.26, 0.18, 0.8, 0.59) z-50">
            <ul className="flex justify-center flex-col items-center w-full pb-7 gap-3">
              <li>
                <Link to="/" className="text-white" onClick={handleClick}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/characters"
                  className="text-white"
                  onClick={handleClick}
                >
                  Characters
                </Link>
              </li>
              <li>
                <Link to="/omic" className="text-white" onClick={handleClick}>
                  Comic Book
                </Link>
              </li>
            </ul>
          </nav>
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Charactor />} />
          <Route path="/omic" element={<Omic />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <section className="bg-white">
      <div className="hero max-w-[1200px] mx-auto my-0 pb-3 h-auto lg:h-[100vh] flex justify-center items-center">
        <div className="container w-full mx-auto my-0 flex justify-center items-center gap-6 mt-8 lg:mt-0 flex-wrap lg:flex-nowrap lg:flex-row-reverse">
          <div className="Image overflow-hidden">
            <img
              src={Image001}
              alt=""
              className="h-auto lg:w-[700px]"
              data-aos="zoom-in-left"
            />
          </div>
          <div className="hero-text ml-8">
            <h1 className="text-[34px] mb-4" data-aos="fade-up">
              You favorite Comic and Characters
            </h1>
            <p className="text-[17px] mb-3 text-gray-500" data-aos="fade-up">
              Find your fav Comic and Comic Charactor
            </p>
            <a
              href="https://marvel.com"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
            >
              <button className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
                See more
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="history mt-16">
        <h1 className="text-[34px] text-center mb-3" data-aos="zoom-in-up">
          The Comic History
        </h1>
        <p className="text-[20px] text-center">
          Comic books have a storied history that traces back to the late 19th
          century when humorous cartoons and comic strips began appearing in
          newspapers and magazines. These early forms laid the foundation for
          what would evolve into a vibrant medium of storytelling and art. The
          Golden Age of comic books, starting in the 1930s, marked the emergence
          of iconic superheroes like Superman and Batman, giving rise to
          publishers like DC Comics and later Marvel Comics. The Silver Age,
          from the 1950s to the 1970s, saw a revitalization of the genre with
          new interpretations of classic heroes and the introduction of beloved
          characters such as Spider-Man and the X-Men. As comics entered the
          modern era, they diversified in storytelling, addressing social issues
          and expanding into genres beyond superheroes. Today, comics continue
          to evolve with the digital age, embracing new technologies while
          maintaining their cultural impact through global franchises in movies,
          TV shows, and digital platforms, ensuring their place as a beloved and
          influential form of entertainment worldwide.
        </p>
      </div>

      <div className="favcomic max-w-[1200px] my-0 mx-auto mt-[5.5rem]">
        <h1
          className="title001 text-[16px] md:text-[34px] font-bold mt-10 text-center mb-16"
          data-aos="fade-up"
        >
          My Fav Comic
        </h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 overflow-hidden lg:grid-cols-4 gap-8 list-none p-0">
          {FavComic.map((item, index) => (
            <li
              key={index}
              className="relative overflow-hidden"
              data-aos="fade-up-left"
            >
              <div className="image-container">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-auto"
                  data-aos="fade-down"
                />
              </div>
              <div className="bg-white back01 bg-opacity-75 p-2 absolute bottom-0 w-full">
                <p className="text-center font-semibold">{item.name}</p>
                <p className="text-center text-sm">{item.year}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="favcharacter max-w-[1200px] my-0 mx-auto mt-[5.5rem]">
        <h1
          className="title001 text-[16px] md:text-[34px] font-bold text-center mb-16"
          data-aos="fade-up"
        >
          My Fav Charactors
        </h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-hidden gap-8 list-none p-0">
          {FavCharactor.map((item, index) => (
            <li
              key={index}
              className="relative overflow-hidden"
              data-aos="fade-up-left"
            >
              <div className="image-container">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-auto"
                  data-aos="fade-down"
                />
              </div>
              <div className="back bg-black bg-opacity-75 p-2 absolute bottom-0 w-full">
                <p className="text-center text-white font-semibold">
                  {item.name}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Copyright text="Jayasriraam" />
    </section>
  );
}
