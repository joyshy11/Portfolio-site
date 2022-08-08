import React from "react";
import myImg from "../assets/my-img.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full  mt-28">
          <h2 className="text-4xl md:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className=" text-gray-500 py-4 max-w-md">
            Determined and productive web developer with a passion for creative
            solutions. Proficient in Javascript , CSS and HTML. Dedicated to
            learn new coding languages.Highly skilled in communication,
            collaboration, and technical documentation
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-yellow-600 to-violet-800 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={myImg}
            alt="my profile"
            className=" rounded-3xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
