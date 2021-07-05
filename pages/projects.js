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
          <h1>Frontend Projects</h1>
          <p>I have worked on some web apps</p>
          <button>
            <Link href="/frontend">
              <a>check them out</a>
            </Link>
          </button>
        </div>
        <div>
          <h1>UX Design Projects</h1>
          <p>
            I have also used Figma and Adobe XD for some web and app designs
          </p>
          <button>
            <Link href="/ux">
              <a>check them out</a>
            </Link>
          </button>
        </div>
        <div>
          <h1>Blog Posts</h1>
          <p>I gather some random thoughts</p>

          <button>
            <Link href="/blogPost">
              <a>check them out</a>
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
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
  }
  a {
    text-decoration: none;
    color: #000;
  }
  a:hover {
    color: #fff;
  }
  @media screen and (min-width: 800px) {
    h1 {
      font-size: 3rem;
    }
  }
`;

const Homes = styled.section`
  padding: 15px;
  text-align: center;
  font: 20px sans-serif;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  div {
    background-color: #0000cc;
    margin: 10px;
    border: 1px solid black;
    border-radius: 5px;
    color: #fff;
    height: 50vh;
  }
  button {
    cursor: pointer;
    border-radius: 5px;
    background-color: #fff;
    padding: 10px;
    :hover {
      background-color: #000;
      color: #fff;
    }
  }

  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    font: 2.5rem sans-serif;
    button {       
        padding: 5px;      
  }
`;
