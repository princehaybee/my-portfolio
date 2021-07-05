import styled from "@emotion/styled";
import Link from "next/link";
import Image from "next/image";
import { FaSortDown } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  return (
    <Headers>
      <Link href="/">
        <div>
          <Image src="/haybee.jpeg" width={90} height={66} />
        </div>
      </Link>

      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/blogPost">
        <a>Blog </a>
      </Link>
      <Link href="/resume">
        <a>Resume</a>
      </Link>
      <Dropdown>
        <a>
          Projects
          <FaSortDown />
        </a>
        {/* <DropContent>
          <Link href="/uxdesign">
            <a>UX Design</a>
          </Link>
          <Link href="/frontend">
            <a>Frontend</a>
          </Link>
        </DropContent> */}
      </Dropdown>
    </Headers>
  );
};

export default Navbar;

const Headers = styled.div`
  margin: 10px auto 80px;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  border-bottom: 1px solid black;
  background-color: #4d4d4d;

  a {
    margin-left: 12px;
    font-size: 1.5rem;
    color: #fff;
    text-decoration: none;
    :hover {
      color: green;
    }
  }
  div {
    margin-right: auto;
    box-shadow: 2px 2px #888888;
    border-radius: 50%;
  }
`;
const Dropdown = styled.span`
  float: left;
  overflow: hidden;

  :hover {
    display: block;
  }
`;

const DropContent = styled.span`
  display: block;
  position: absolute;
  height: ${({ showmenu }) => (showmenu ? "auto" : "0")};
  z-index: 1;
  a {
    float: none;
    color: black;
    padding: 8px 0;
    text-decoration: none;
    display: block;
    text-align: left;
  }
`;
