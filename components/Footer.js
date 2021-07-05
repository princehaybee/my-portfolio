import styled from "@emotion/styled";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const footer = () => {
  return (
    <Footer>
      <Link href="">
        <a>
          <FaGithub color="#000" />
        </a>
      </Link>
      <Link href="">
        <a>
          <FaTwitter color="#33bbff" />
        </a>
      </Link>
      <Link href="">
        <a>
          <FaLinkedinIn color="#0059b3" />
        </a>
      </Link>
    </Footer>
  );
};

export default footer;

const Footer = styled.div`
  display: block;
  text-align: center;
  padding: 20px 0;
  bottom: 0;
  color: #000;
  border-top: 1px solid #eaeaea;
  background-color: #e6e6e6;
  left: 0;
  bottom: 0;
  a {
    text-decoration: none;
    font-size: 25px;
    margin: 0 15px;
  }
`;
