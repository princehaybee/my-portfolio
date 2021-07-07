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
