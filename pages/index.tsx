import { NextPage } from "next";
import Head from "next/head";
import LandingPageTemplate from "../templates/LandingPage/LandingPageTemplate";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Codingers-Developer</title>
        <meta name="description" content="Codingers-Dev Web Page" />
      </Head>
      <LandingPageTemplate />
    </>
  );
};

export default Index;
