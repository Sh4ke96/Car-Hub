import Link from "next/link";
import Image from "next/image";

import Button from "./Button";

const Navbar = () => {
  return (
    <header className="absolute z-10 w-full">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link
          href="/"
          className="flex items-center justify-center text-4xl font-bold tracking-[0.4rem]"
        >
          Carent
          <span className="text-primary">z</span>
          <span className="text-primary">z</span>
          <span className="text-primary">z</span>
        </Link>
        <Button
          title="Sign In"
          type="button"
          containerStyles="bg-primary text-black rounded-full min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default Navbar;
