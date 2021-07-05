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
        <title>Projects | UX 🕐 </title>
        <meta name="keywords" content="portfolio" />
      </Head>

      <h1>UX Design Projects</h1>
      <Homes>
        {projects &&
          projects.map((project, index) => (
            <Article>
              <h3>
                <a
                  href={project.link}
                  alt={project.title}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </a>
              </h3>
              <span>
                <strong>Finished on</strong>:{" "}
                {new Date(project.date).toLocaleDateString()}
              </span>
              <span>
                <strong>Location</strong>: {project.place}
              </span>
              <span>
                <strong>Type</strong>: {project.projectType}
              </span>
              <p>{project.description}</p>
              <Link
                href={project.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                <a>Go to project....</a>
              </Link>
            </Article>
          ))}
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
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
  }
`;

const Homes = styled.section`
  min-height: 100vh;
  max-width: 100vw;
  padding-top: 0px;
  margin-top: 0px;
  text-align: center;
  font: 1.5rem sans-serif;
  list-style-type: none;
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
  }
  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Article = styled.article`
  border: 1px solid #444;
  box-sizing: border-box;
  box-shadow: 5px 5px;
  border-radius: 5px;
  margin: 2.5rem;

  height: 350px;

  background-color: #e6e6e6;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
