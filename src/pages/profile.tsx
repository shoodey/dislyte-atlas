import type { NextPage } from "next";
import { useState } from "react";

import Espers from "../components/Espers";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Logo from "../components/Logo";
import MyEspers from "../components/MyEspers";
import espersData from "../data/espers.json";
import type { IEsper } from "../types";

const ProfilePage: NextPage = () => {
  const espers = espersData as IEsper[];

  const [myEspers, setMyEspers] = useState<string[]>([]);
  const [availableEspers, setAvailableEspers] = useState<string[]>(
    espers.map((esper) => esper.name)
  );

  return (
    <>
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] px-10 font-inter text-white">
        <Header />
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <Logo />
          <Espers espers={espers} available={availableEspers} />
          <MyEspers espers={espers} available={myEspers} />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default ProfilePage;
