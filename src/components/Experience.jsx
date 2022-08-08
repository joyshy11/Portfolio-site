import React from "react";
import htmlImg from "../assets/experience/html.png";
import cssImg from "../assets/experience/css.png";
import javascriptImg from "../assets/experience/javascript.png";
import nodejsImg from "../assets/experience/node.png";
import reactImg from "../assets/experience/react.png";
import tailwindImg from "../assets/experience/tailwind.png";
import sqlImg from "../assets/experience/sql.png";
import mongodbImg from "../assets/experience/mongodb.png";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      src: htmlImg,
      title: "HTML",
      style: "shadow-orange-400",
    },

    {
      id: 2,
      src: cssImg,
      title: "CSS",
      style: "shadow-blue-400",
    },

    {
      id: 3,
      src: javascriptImg,
      title: "JAVASCRIPT",
      style: "shadow-yellow-300",
    },

    {
      id: 4,
      src: nodejsImg,
      title: "NODE.JS",
      style: "shadow-green-400",
    },

    {
      id: 5,
      src: reactImg,
      title: "REACT.JS",
      style: "shadow-blue-600",
    },

    {
      id: 6,
      src: tailwindImg,
      title: "TAILWIND",
      style: "shadow-sky-400",
    },

    {
      id: 7,
      src: sqlImg,
      title: "SQL",
      style: "shadow-white",
    },

    {
      id: 7,
      src: mongodbImg,
      title: "MONGODB",
      style: "shadow-white",
    },
  ];

  return (
    <div
      name="experience"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full mt-29">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-6">These are the languages i've worked with:</p>
        </div>
        <div className="w-full grid sm:grid-cols-3 md:grid-cols-4 gap-8 px-12 sm:px-8 ">
          {experiences.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={` shadow-md hover:scale-105 duration-200 rounded-lg px-5 py-2 ${style}`}
            >
              <img
                className="w-auto h-20 m-auto rounded-md duration-200 hover:scale-105"
                src={src}
                alt="alternate"
              />
              <p className="mt-4 text-center">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
