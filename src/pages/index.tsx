import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Logo from "../components/Logo";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dislyte Atlas</title>
        <meta name="description" content="Dislyte Atlas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-[#2e026d] to-[#15162c] font-inter text-white">
        <Header />
        <div className="container mx-auto flex min-h-[calc(100vh-56px)] flex-col items-center gap-12 py-10">
          <Logo />
          <div className="flex grow items-center justify-center">
            <div className="grid max-w-sm grid-cols-1 gap-4">
              <Link
                className="flex w-full flex-col gap-4 rounded-xl bg-white/10 p-4 text-white transition duration-500 ease-in-out  hover:scale-105 hover:bg-white/20"
                href="/profile"
              >
                <h3 className="flex items-center gap-2 text-xl font-bold md:text-2xl">
                  <span>Create your profile</span>
                </h3>
                <div className="text-lg">
                  Save your Espers to your profile and get a link to share with
                  your friends.
                </div>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
