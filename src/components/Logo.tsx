import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-raleway text-5xl font-extrabold tracking-tight text-white hover:animate-pulse hover:cursor-pointer sm:text-[5rem]"
    >
      DISLYTE <span className="text-[hsl(280,100%,70%)]">ATLAS</span>
    </Link>
  );
};

export default Logo;
