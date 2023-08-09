import { NextPage } from "next";
import Head from "next/head";
import LandingPage from "../templates/LandingPage/LandingPage";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Codingers-Developer</title>
        <meta name="description" content="Codingers-Dev Web Page" />
      </Head>
      <LandingPage />
    </>
  );
};

export default Index;
