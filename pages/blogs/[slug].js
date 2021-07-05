import { useState } from "react";
import {
  sanityClient,
  urlFor,
  usePreviewSubscription,
  PortableText,
} from "../../lib/sanity";
import styled from "@emotion/styled";
import Head from "next/head";
import Link from "next/link";

const postQuery = `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
  slug,
  mainImage,
  categories, 
  publishedAt,
  likes     
    }`;

export default function OnePost({ data, preview }) {
  // const { data: post } = usePreviewSubscription(postQuery, {
  //   params: { slug: data.post?.slug.current },
  //   initialData: data,
  //   enabled: preview,
  // });

  const [likes, setLikes] = useState(data?.post?.likes);
  const addLike = async () => {
    const res = await fetch("/api/handle-like", {
      method: "POST",
      body: JSON.stringify({ _id: post._id }),
    }).catch((error) => console.log(error));

    const data = await res.json();

    setLikes(data.likes);
  };

  const { post } = data;
  return (
    <div>
      <Head>
        <title>Portfolio | Blog 🕵️‍♂️ </title>
        <meta name="keywords" content="portfolio" />
      </Head>
      <Homes>
        <h1>{post.title}</h1>

        <img src={urlFor(post?.mainImage).url()} />
        <button onClick={addLike}>{likes}💙</button>
      </Homes>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "post" && defined(slug.current)]{
      "params": {
        "slug": slug.current
      }
    }`
  );

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const post = await sanityClient.fetch(postQuery, { slug });
  return { props: { data: { post }, preview: true } };
}

const Homes = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  padding-top: 0px;
  margin-top: 0px;
  text-align: center;
  font: 3vw sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
 
button {
    cursor: pointer;
}

  a {
    img{
      height: 200px;
      width: 120px:
    }
  }
`;
