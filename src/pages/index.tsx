import { IconArrowBigRightLine } from "@tabler/icons-react";
import { type NextPage } from "next";
import Link from "next/link";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Logo from "../components/Logo";

const Home: NextPage = () => {
  return (
    <>
      <main className="flex min-h-screen select-none flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] font-inter text-white">
        <Header />
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <Logo />
          <div className="grid max-w-sm grid-cols-1 gap-4 md:gap-8">
            <Link
              className="flex w-full flex-col gap-4 rounded-xl bg-white/10 p-4 text-white transition duration-500 ease-in-out  hover:scale-105 hover:bg-white/20"
              href="/profile"
            >
              <h3 className="flex items-center gap-2 text-2xl font-bold">
                <span>Setup your espers</span>
                <IconArrowBigRightLine size={16} />
              </h3>
              <div className="text-lg">
                Save your espers to your profile and get a link to share with
                your friends.
              </div>
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home;
