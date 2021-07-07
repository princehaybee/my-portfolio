import styled from "@emotion/styled";
import { FaBars, FaHome, FaTimes } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [showmenu, updateShowmenu] = useState(false);

  return (
    <Header>
      <RightNav>
        <Link href="/">
          <a>
            <FaHome />
          </a>
        </Link>
        <button onClick={() => updateShowmenu(!showmenu)}>
          {showmenu ? <FaTimes /> : <FaBars />}
        </button>
      </RightNav>
      <LeftNav showmenu={showmenu}>
        <Link href="/blogPost">
          <a>Blog </a>
        </Link>
        <Link href="/resume">
          <a>Resume</a>
        </Link>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
      </LeftNav>
    </Header>
  );
}

export default Navbar;

const Header = styled.div`
  margin: 0;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-bottom: 1px solid black;
  background-color: #4d4d4d;
  color: #fff;
  font-size: 2.5rem;

  @media screen and (min-width: 800px) {
    flex-direction: row;
  }
`;

const LeftNav = styled.div`
  overflow: hidden;
  list-style-type: none;
  height: ${({ showmenu }) => (showmenu ? "auto" : "0")};
  a {

    letter-spacing: 0.1rem;
    display: block;
    margin-left: 12px;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    :hover {
      padding-left: 2.5rem;
      color: blue; 
    }
  }

  @media screen and (min-width: 800px) {
    display: flex; 
    height: auto; 
  a{
    :hover {
      padding-left: 0;
    }
  }
  
`;

const RightNav = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    color: #ffffff;
    background: transparent;
    border-color: transparent;
  }
  a {
    margin-right: auto;

    color: #fff;
    text-decoration: none;
    cursor: pointer;
  }

  @media screen and (min-width: 800px) {
    justify-content: flex-end;
    button {
      display: none;
    }
  }
`;
