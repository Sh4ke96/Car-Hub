"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import Button from "./Button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isScrolled ? "sticky top-0 shadow-lg" : ""
      } transition-all duration-500 ease-in-out z-50 w-full bg-primary`}
    >
      <nav className="flex items-center justify-between px-6 py-8 mx-auto max-w-screen-2xl sm:px-16">
        <Link
          href="/"
          className="flex items-center justify-center text-2xl xl:text-4xl font-bold tracking-[0.7rem] uppercase"
        >
          Carentz
        </Link>
        <div className="hidden lg:block">
          <ul className="flex gap-x-8">
            <li className="uppercase duration-300 hover:text-white">
              <Link href="/">home</Link>
            </li>
            <li className="uppercase duration-300 hover:text-white">
              <Link href="/">services</Link>
            </li>
            <li className="uppercase duration-300 hover:text-white">
              <Link href="#" onClick={handleScroll}>
                catalogue
              </Link>
            </li>
            <li className="uppercase duration-300 hover:text-white">
              <Link href="/">about us</Link>
            </li>
          </ul>
        </div>
        <div className="items-center hidden lg:flex gap-x-8">
          <Link
            href="/register"
            className="uppercase duration-300 hover:text-white"
          >
            Register
          </Link>
          <Link href="/login">
            <Button
              title="Sign In"
              type="button"
              containerStyles="bg-black text-white rounded-full min-w-[130px] uppercase duration-300 hover:text-primary"
            />
          </Link>
        </div>
        <div className="block lg:hidden">
          <FaBars className="text-2xl duration-200 cursor-pointer hover:text-white" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
