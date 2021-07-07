import styled from "@emotion/styled";
import Head from "next/head";
import Link from "next/link";
import { sanityClient, urlFor } from "../lib/sanity";

const projectsQuery = `*[_type == "project"]{
  title,
  date,
  place,
  description,
  projectType,
  link,
  tags
}`;

const Design = ({ projects }) => {
  return (
    <Main>
      <Head>
        <title>Abiola | Projects 🕐 </title>
        <meta name="keywords" content="portfolio" />
      </Head>

      <h1>Projects</h1>
      <Homes>
        <div>
          <h2>Frontend Projects</h2>
          <p>I have worked on some web apps</p>
          <button>
            <Link href="/frontend">
              <span>check them out</span>
            </Link>
          </button>
        </div>
        <div>
          <h2>UX Design Projects</h2>
          <p>
            I have also used Figma and Adobe XD for some web and app designs
          </p>
          <button>
            <Link href="/ux">
              <span>check them out</span>
            </Link>
          </button>
        </div>
        <div>
          <h2>Blog Posts</h2>
          <p>I gather some random thoughts</p>

          <button>
            <Link href="/blogPost">
              <span>check them out</span>
            </Link>
          </button>
        </div>
      </Homes>
    </Main>
  );
};

export default Design;

export async function getStaticProps() {
  const projects = await sanityClient.fetch(projectsQuery);
  return { props: { projects } };
}

const Main = styled.main`
  min-height: 100vh;
  max-width: 100vw;
  padding-top: 0px;
  margin-top: 0px;

  font-size: 40px;
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0;
    color: #000;
  }
  h2,
  p {
    margin: 0;
  }

  @media screen and (min-width: 800px) {
    h1 {
    }
  }
`;

const Homes = styled.section`
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background-color: #808080;
    margin: 10px;
    border: 1px solid black;
    border-radius: 5px;
    color: #fff;
    height: auto;
    padding: 5px;
  }
  button {
    cursor: pointer;
    border-radius: 5px;
    background-color: #fff;
    padding: 5px;
    margin: 0;
    :hover {
      background-color: #000;
      color: #fff;
    }
  }

  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    h2,
    p {
      margin: 10px;
    }
    button {
      padding: 5px;
    }
    div {
      padding: 40px;
    }
  }
`;
