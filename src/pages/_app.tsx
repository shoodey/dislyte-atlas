import "../styles/globals.css";

import { type AppType } from "next/app";
import Head from "next/head";

import { api } from "../utils/api";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Dislyte - Atlas</title>
        <meta name="description" content="Dislyte Atlas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default api.withTRPC(MyApp);
