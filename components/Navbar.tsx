import Link from "next/link";

import Button from "./Button";

const Navbar = () => {
  return (
    <header className="absolute z-10 w-full">
      <nav className="flex items-center justify-between px-6 py-8 mx-auto max-w-screen-2xl sm:px-16">
        <Link
          href="/"
          className="flex items-center justify-center text-4xl font-bold tracking-[0.7rem] uppercase"
        >
          Carentz
        </Link>
        <div>
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
              <Link href="/">contact us</Link>
            </li>
            <li className="uppercase duration-300 hover:text-white">
              <Link href="/">help</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-x-8">
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
      </nav>
    </header>
  );
};

export default Navbar;
