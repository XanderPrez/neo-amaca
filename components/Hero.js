import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px]">
      <Image src="/hero.jpeg" layout="fill" objectFit="cover" />
      <div className="absolute top-3/4 w-full text-center">
        <p className="text-lg sm:text-xl text-orange-300 font-semibold">
          Explore, Experience, Enjoy!
        </p>
        <button className="text-orange-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          Explore!
        </button>
      </div>
    </div>
  );
}

export default Hero;
