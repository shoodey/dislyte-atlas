import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

import Espers from "../../components/Espers";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Logo from "../../components/Logo";
import MyEspers from "../../components/MyEspers";

const ProfilePage: NextPage = () => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <>
      <Head>
        <title>Dislyte Atlas - My Espers</title>
        <meta name="description" content="Dislyte Atlas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-[#2e026d] to-[#15162c] font-inter text-white">
        <Header />
        <div className="container mx-auto mb-32 flex min-h-[calc(100vh-92px)] flex-col items-center gap-12 p-10">
          <Logo />
          {hydrated && (
            <>
              <Espers />
              <MyEspers />
            </>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProfilePage;
