"use client";
import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="bg-primary">
      <div className="relative z-0 flex flex-col gap-5 mx-auto max-w-screen-2xl xl:flex-row">
        <div className="flex-1 px-16 my-auto mt-40 xl:mt-auto">
          <h1 className="font-bold leading-[5.5rem] text-7xl">
            Rent the best car around the world!
          </h1>
          <p className="mt-12 text-3xl">
            Streamline your car rental experience with our effortless booking
            process.
          </p>
          <Button
            title="Explore Cars"
            containerStyles="bg-black text-white rounded-full mt-12 duration-300 hover:text-primary"
            handleClick={handleScroll}
          />
        </div>
        <div className="flex items-center justify-center w-full xl:justify-end xl:flex-1 xl:h-screen">
          <div className="hero__image">
            <Image src="/hero.png" alt="hero" className="object-contain" fill />
          </div>
          <div className="hero__image-overlay" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
