import React from "react";
import drum from "../assets/portfolio/drum.png";
import journal from "../assets/portfolio/journal.png";
import notes_app from "../assets/portfolio/notes-app.png";
import tindog from "../assets/portfolio/tindog.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: drum,
      link: "https://github.com/joyshy11/Drum-Kit-Sound-Game",
    },
    {
      id: 2,
      src: journal,
      link: "https://github.com/joyshy11/Blog-Website",
    },
    {
      id: 3,
      src: notes_app,
      link: "https://github.com/joyshy11/Notes-App",
    },
    {
      id: 4,
      src: tindog,
      link: "https://github.com/joyshy11/Tinder-dog-website",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out my works</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-8">
          {portfolios.map(({ id, src, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                className="rounded-md duration-200 hover:scale-105"
                src={src}
                alt="alternate"
              />
              <div className="flex items-center justify-center">
                <a
                  href={link}
                  className=" m-4 duration-200 hover:scale-105"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
