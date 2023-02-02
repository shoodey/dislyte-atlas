import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Logo from "../../components/Logo";
import SharedEspers from "../../components/SharedEspers";
import espersData from "../../data/espers.json";
import { decode } from "../../utils/lib";
import type { Esper } from "../../utils/types";

interface Props {
  espers?: Esper[];
}

const SharedProfile: NextPage = ({ espers }: Props) => {
  if (!espers) throw new Error("An error has occurred. Code 0x2423");

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
          <SharedEspers espers={espers} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  if (!params || !params.id || typeof params.id !== "string") {
    return {
      notFound: true,
      revalidate: 10,
    };
  }

  const allEspers = espersData as Esper[];
  const esperNames = decode(params.id).split(",");
  console.log(esperNames);

  // Check if all names are valid
  // Temproary deterrent for random query strings
  // while we implement a permanent storage solution
  const areAllNamesValid = esperNames.every((name) =>
    allEspers.some((esper) => esper.name === name)
  );

  const espers = allEspers.filter((esper) => esperNames.includes(esper.name));

  if (!areAllNamesValid || !espers.length) {
    return {
      notFound: true,
      revalidate: 10,
    };
  }

  return {
    props: {
      espers,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  return { paths: [], fallback: "blocking" };
};

export default SharedProfile;
