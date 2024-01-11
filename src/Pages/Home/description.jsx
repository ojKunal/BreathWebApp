import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import depression from "../../Assets/depression.png";
const Description = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M62.8854 5.93743C62.0044 6.53908 61.0354 7.02329 60 7.36842C61.0354 7.71355 62.0044 8.19776 62.8854 8.79942C64.0837 9.61767 65.1192 10.6531 65.9374 11.8514C66.5391 12.7324 67.0233 13.7015 67.3684 14.7368C67.7135 13.7015 68.1977 12.7324 68.7994 11.8514C69.6177 10.6531 70.6531 9.61767 71.8514 8.79942C72.7324 8.19776 73.7014 7.71355 74.7368 7.36842C73.7014 7.02329 72.7324 6.53908 71.8514 5.93743C70.6531 5.11917 69.6177 4.08369 68.7994 2.88546C68.1977 2.00442 67.7135 1.03538 67.3684 0C67.0233 1.03538 66.5391 2.00442 65.9374 2.88546C65.1192 4.0837 64.0837 5.11917 62.8854 5.93743ZM23.1577 14.7369C23.7493 14.5397 24.3031 14.263 24.8065 13.9192C25.4912 13.4516 26.0829 12.8599 26.5505 12.1752C26.8943 11.6718 27.171 11.118 27.3682 10.5264C27.5654 11.118 27.8421 11.6717 28.1859 12.1752C28.6535 12.8599 29.2452 13.4516 29.9299 13.9192C30.4334 14.263 30.9871 14.5397 31.5787 14.7369C30.9871 14.9341 30.4334 15.2108 29.9299 15.5546C29.2452 16.0222 28.6535 16.6139 28.1859 17.2986C27.8421 17.802 27.5654 18.3558 27.3682 18.9474C27.171 18.3558 26.8943 17.802 26.5505 17.2986C26.0829 16.6139 25.4912 16.0222 24.8065 15.5546C24.3031 15.2108 23.7493 14.9341 23.1577 14.7369ZM62.2352 18.0278L57.4104 29.7243L65.6135 39.3573L52.9985 38.383L46.3719 49.1614L43.9507 39.1407L10.8878 72.2036L8.05933 69.3752L41.1222 36.3123L31.1017 33.8912L41.88 27.2645L40.9057 14.6496L50.5388 22.8527L62.2352 18.0278ZM54.8701 25.3929L49.8055 27.4821L45.6344 23.9301L46.0563 29.3924L41.3893 32.2618L46.7146 33.5485L48.0013 38.8738L50.8706 34.2067L56.3329 34.6286L52.7809 30.4575L54.8701 25.3929ZM68.4209 29.4736C68.8646 29.3257 69.2799 29.1181 69.6575 28.8603C70.171 28.5096 70.6148 28.0658 70.9655 27.5523C71.2233 27.1747 71.4309 26.7594 71.5788 26.3157C71.7267 26.7594 71.9342 27.1747 72.1921 27.5523C72.5427 28.0658 72.9865 28.5096 73.5 28.8603C73.8776 29.1181 74.2929 29.3257 74.7367 29.4736C74.2929 29.6215 73.8776 29.829 73.5 30.0869C72.9865 30.4375 72.5427 30.8813 72.1921 31.3948C71.9342 31.7724 71.7267 32.1877 71.5788 32.6315C71.4309 32.1877 71.2233 31.7724 70.9655 31.3948C70.6148 30.8813 70.171 30.4375 69.6575 30.0869C69.2799 29.829 68.8646 29.6215 68.4209 29.4736Z"
            fill="black"
          />
        </svg>
        <h2 className="lg:text-5xl md:text-3xl text-2xl m-4 text-center">
        Breath is the bridge which connects life to consciousness,
          <br /> which unites your body to your thoughts. 
        </h2>
        <h3 className="lg:text-2xl md:text-2xl text-xl text-center mx-8 m-4">
          Breaks for practices were scientifically proven as <br /> an effective
          way to reduce risk of negative consequences
        </h3>
        <img
          className="m-20 lg:w-4/5 md:w-4/5"
          src={depression}
          alt="depression"
        />
        <h2 className="lg:text-6xl md:text-4xl text-3xl m-4 mx-8 text-center">
          NO NEED TO DEVELOP A HABIT
        </h2>
        <h3 className="lg:text-2xl md:text-2xl text-xl text-center mx-8 m-4">
          Practice offerings appear neatly, independently and personalized based
          on your preferences
        </h3>
        <Player
          src="https://assets10.lottiefiles.com/packages/lf20_khrclx93.json"
          className="player h-48"
          loop
          
          autoplay
          speed={1}
        />
      </div>
    </>
  );
};

export default Description;
