import styled from "@emotion/styled";
import Head from "next/head";

import Link from "next/link";

export default function Home({ posts }) {
  console.log({ posts });
  return (
    <div>
      <Head>
        <title>Portfolio | Home 🏛 </title>
        <meta name="keywords" content="portfolio" />
      </Head>
      <Homes>
        <h1>Hi, I’m Abiola Adewale</h1>
        <p>
          I’m a developer and a UX designer.
          <br />I am passionate about building and designing websites and apps.
        </p>
        <Buttons>
          <button>
            <Link href="/projects">
              <span>my projects</span>
            </Link>
          </button>
          <button>
            <Link href="/about">
              <span>about me</span>
            </Link>
          </button>
        </Buttons>
      </Homes>
    </div>
  );
}

const Homes = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  font: 25px sans-serif;
  padding: 20px 25px;

  @media screen and (min-width: 800px) {
    font: 2.5vw sans-serif;
    padding: 5rem 15rem;
  }
`;
const Buttons = styled.div`
  display: inline-block;
  margin-left: 10px;
  p {
    padding: 0;
  }
  button {
    margin: 10px;
    border-radius: 10px;
    border: 1px solid black;
    :hover {
      background-color: #000;
      color: #fff;
    }
  }
`;
// const Homes = styled.div`
//   min-height: 100vh;
//   max-width: 100vw;
//   padding: 0;
//   margin: 3vw;
//   font: 2.5vw sans-serif;
//   justify-content: center;
//   text-align: center;

//   background-color: #fff;
//   border: 1px solid #000;
//   border-radius: 1rem;
//   @media screen and (min-width: 800px) {
//   }
// `;

// const Div1 = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   text-align: center;
//   margin: 1rem;
// `;
// const Div2 = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   text-align: center;
//   margin: 1rem;
// `;
