import styled from "@emotion/styled";
import Head from "next/head";
import Link from "next/link";
import { sanityClient, urlFor } from "../lib/sanity";
import Image from "next/image";

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
  return (
    <Main>
      <Head>
        <title>Portfolio | Blog 🦊 </title>
        <meta name="keywords" content="portfolio" />
      </Head>
      <h1> Blog Posts</h1>
      <h2> Welcome to my blog</h2>
      <Homes>
        {posts &&
          posts.map((post) => (
            <div key={post._id}>
              <Link href={`/blogs/${post.slug.current}`} passHref>
                <article>
                  <span>{post.title}</span>
                  <span>
                    <Image
                      src={urlFor(post.mainImage).url()}
                      alt={post.title}
                    />
                  </span>
                </article>
              </Link>
            </div>
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
  min-height: 100vh;
  max-width: 100vw;
  font-size: 25px;
  h1,
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
  @media screen and (min-width: 800px) {
    font-size: 40px;
  }
`;

const Homes = styled.div`
  height: auto;
  article {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 25px;

    height: auto;
  }
  img {
    height: 50vh;
    width: 90vw;
    border-radius: 10px;
  }

  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    article {
      width: 30vw;
    }
    img {
      width: 30vw;
    }
  }
`;
