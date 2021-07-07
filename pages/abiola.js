import styled from "@emotion/styled";
import Head from "next/head";
import { sanityClient, urlFor } from "../lib/sanity";

const authorsQuery = `*[_type == "author"]{
  title,
  date,
  place,
  description,
  authorType,
  link,
  tags
}`;

const About = ({ authors }) => {
  return (
    <Main>
      <Head>
        <title>Abiola | about 🕐 </title>
        <meta name="keywords" content="portfolio" />
      </Head>

      <h1>authors</h1>
    </Main>
  );
};

export default About;

export async function getStaticProps() {
  const authors = await sanityClient.fetch(authorsQuery);
  return { props: { authors } };
}

const Main = styled.div``;
