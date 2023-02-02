import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Logo from "../../components/Logo";
import MyEspers from "../../components/MyEspers";
import espersData from "../../data/espers.json";
import { decode } from "../../utils/lib";
import { useMyEspersStore } from "../../utils/store";
import type { Esper } from "../../utils/types";

const Share: NextPage = () => {
  const router = useRouter();

  const { encoding: queryEspers } = router.query;

  const espers = espersData as Esper[];

  const setEspers = useMyEspersStore((state) => state.setEspers);

  useEffect(() => {
    console.log(queryEspers);
    if (queryEspers && typeof queryEspers === "string") {
      setEspers(decode(queryEspers).split(","));
    }
  }, [queryEspers, setEspers]);

  return (
    <>
      <Head>
        <title>Dislyte Atlas - Shared Espers</title>
        <meta name="description" content="Dislyte Atlas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-[#2e026d] to-[#15162c] font-inter text-white">
        <Header />
        <div className="container mx-auto flex min-h-[calc(100vh-92px)] flex-col items-center gap-12 p-10">
          <Logo />
          <MyEspers label="Espers" shareable={false} espers={espers} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Share;
