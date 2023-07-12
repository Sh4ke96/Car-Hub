import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col mt-12 text-black">
      <div className="flex flex-wrap items-center justify-center px-6 py-10 border-t border-gray sm:px-16">
        <Link
          href="/"
          className="flex items-center justify-center text-4xl font-bold tracking-[0.7rem] uppercase"
        >
          Carentz
        </Link>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
