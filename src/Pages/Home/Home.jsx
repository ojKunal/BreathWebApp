import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";
import inhale from "../../Assets/inhales.png";
import mobile_inhale from "../../Assets/favicon.ico";
import medi from "../../Assets/116271-meditation-work-stress-relief.json";
const Home = () => {
  return (
    <>
    
      <div>
        <div className="navbar flex justify-between items-center px-8">
          <div>
            <picture>
              <source media="(min-width:600px)" srcset={inhale} />
              <img className="h-10 my-4" src={mobile_inhale} alt="mobile-logo" />
            </picture>
          </div>
          <div>
            <button className="bg-gray-900 hidden md:block lg:block hover:bg-gray-800 text-white font-semibold py-3 px-5 rounded-full">
              Add to Browser – It's Free
            </button>
          </div>
        </div>

        <div className="hero flex  lg:flex-row md:flex-row lg:m-16 lg:justify-center md:m-6 md:my-16 md:justify-center flex-col-reverse justify-around items-center h-full">
          <div className="left  justify-center h-full items-center m-4">
            <h2 className="lg:text-7xl text-5xl lg:text-left md:text-left text-center m-4">
             THE EASIEST <br /> WAY  TO FEEL <br />RELAX
            </h2>
            <h3 className="lg:text-2xl lg:text-left md:text-left text-xl text-center mx-4 my-8">
              Get mental practices and exercises at the right <br /> time thanks to
                artificial intelligence, just by browsing <br /> the Internet
            </h3>
            <div className="flex justify-center lg:justify-start md:justify-start">
            <button class="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-8 my-4 mx-2 rounded-full">
             <Link to="/try">
               Try Now – It's Free
              </Link>
            </button>
            </div>
          </div>
          <div className="right lg:ml-9">
            <Player src={medi} className="player" loop autoplay speed={1} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
