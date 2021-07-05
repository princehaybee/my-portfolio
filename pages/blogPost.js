import styled from "@emotion/styled";
import Head from "next/head";
import Link from "next/link";
import { sanityClient, urlFor } from "../lib/sanity";

const postsQuery = `*[_type == "post"]{
  title,
  slug,
  mainImage{
      asset->{
          _id,
          url
      },
      alt
  }
}`;

export default function Home({ posts }) {
  console.log({ posts });
  return (
    <Main>
      <Head>
        <title>Portfolio | Blog 🦊 </title>
        <meta name="keywords" content="portfolio" />
      </Head>
      <h1> Blog Posts</h1>
      <h2> Welcome to my blog</h2>
      <Homes>
        {posts.map((post) => (
          <Article key={post._id}>
            <Link href={`/blogs/${post.slug.current}`}>
              <a>
                <img src={urlFor(post.mainImage).url()} alt={post.title} />
                <span>
                  <button>{post.title}</button>
                </span>
              </a>
            </Link>
          </Article>
        ))}
      </Homes>
    </Main>
  );
}

export async function getStaticProps() {
  const posts = await sanityClient.fetch(postsQuery);
  return { props: { posts } };
}

const Main = styled.main`
  h1,
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
  }
`;

const Homes = styled.div`
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
    span {
      position: relative;
    }
    button {
      background-color: #fff;
      border: 1px solid black;
      border-radius: 8px;
      padding: 3px 4px;
      width: auto;
      background: red;
    }
    img {
      height: 180px;
    }
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
  display: block;
  height: 300px;
  object-fit: cover;
  margin-bottom: 12px;
  background-color: #e6e6e6;
`;
