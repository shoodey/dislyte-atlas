import { IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="absolute top-5 flex w-screen justify-end p-4">
      <Link
        href="https://github.com/shoodey/dislyte-atlas"
        target="_blank"
        className="rounded-full p-1 text-slate-300 transition duration-500 ease-in-out hover:bg-gray-300 hover:text-black"
      >
        <IconBrandGithub size={32} stroke={1.5} />
      </Link>
    </div>
  );
};

export default Header;
