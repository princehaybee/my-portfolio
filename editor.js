import styled from "@emotion/styled";
import { FaBars, FaTimes } from "react-icons/fa";
import { BiCart, BiGlobe, BiUser } from "react-icons/bi";
import { useState } from "react";

import Link from "next/link";

function Navbar() {
  const [showmenu, updateShowmenu] = useState(false);

  return (
    <Header>
      <RightNav>
        <Link href="/">
          <a>Abiola</a>
        </Link>
        <button onClick={() => updateShowmenu(!showmenu)}>
          {showmenu ? <FaTimes /> : <FaBars />}
        </button>
      </RightNav>
      <LeftNav showmenu={showmenu}>
        <a>
          <li>Apple</li>
        </a>
        <a>
          <li>Samsung</li>
        </a>
        <a>
          <li>Google</li>
        </a>
        <a>
          <li>Others</li>
        </a>
      </LeftNav>

      {/* <ShopItems2 showmenu={showmenu}></ShopItems2> */}
    </Header>
  );
}

export default Navbar;

const Header = styled.div`
  margin: 10px auto 80px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-bottom: 1px solid black;

  @media screen and (min-width: 800px) {
    flex-direction: row;
  }
`;

const LeftNav = styled.div`
  overflow: hidden;
  list-style-type: none;
  height: ${({ showmenu }) => (showmenu ? "auto" : "0")};



  a {
    font-size: 1rem;
    letter-spacing: 0.1rem;
    display: block;
    padding: 0.5rem 1rem;

    text-decoration: none;
    cursor: pointer;
    :hover {
      padding-left: 2.5rem;
    }
  }

  @media screen and (min-width: 800px) {
    display: flex; 
    height: auto; 
  
`;

const RightNav = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 800px) {
    justify-content: flex-end;
    button {
      display: none;
    }
  }
`;
