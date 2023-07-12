import Link from "next/link";

import Button from "./Button";

import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="absolute z-10 w-full">
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
              <Link href="/">catalogue</Link>
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
