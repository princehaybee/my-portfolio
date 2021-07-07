import { useState } from "react";
import {
  sanityClient,
  urlFor,
  usePreviewSubscription,
  PortableText,
} from "../../lib/sanity";
import styled from "@emotion/styled";
import Head from "next/head";
import BlockContent from "@sanity/block-content-to-react";
import Link from "next/link";

const postQuery = `*[_type == "post" && slug.current == $slug][0]{
  title,
  _id,
  slug,
  mainImage{
      asset->{
          _id,
          url
      }
  },
  body,
  "name": author->name,
  "authorImage": author->image
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
    <Main>
      <article>
        <header>
          <Div>
            <div>
              <h1>{post.title}</h1>
              <div>
                <img
                  src={urlFor(post.authorImage).url()}
                  alt={post.name}
                  style={{
                    height: "100px",
                    width: "120px",
                    borderRadius: "50%",
                  }}
                />
                <p>{post.name}</p>
              </div>
            </div>
          </Div>
          <img
            src={post.mainImage.asset.url}
            alt={post.title}
            style={{
              height: "400px",
              width: "100vw",
            }}
          />
        </header>
        <Block>
          <BlockContent
            blocks={post.body}
            projectId="d5wzzav5"
            dataset="production"
          />
        </Block>
      </article>
    </Main>
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

const Main = styled.main`
  min-height: 100vh;
  max-width: 100vw;
  font-size: 25px;
  header {
    position: relative;
  }
`;
const Div = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  position: absolute;
  height: 100vh;
  width: 100vw;
  padding: 20px;
  div {
    background-color: #fff;
    opacity: 90%;
    border-radius: 10px;
    padding: 15px;
    h1 {
      font-style: italic;
    }
    div {
      display: flex;
      justify-content: center;
      color: grey;
      p {
        display: flex;
        align-items: center;
        padding-left: 10px;
        font-weight: bold;
      }
    }
  }
`;

const Block = styled.div`
  max-width: 100vw;
  padding: 10px 30px;
`;
