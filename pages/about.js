import styled from "@emotion/styled";

const About = () => {
  return (
    <Homes>
      <h1>More about me</h1>
      <Details>
        <div>
          <img src="haybee.jpeg" alt="author picture" />
        </div>
        <div>
          <p>Hey there, I’m Abiola Adewale!</p>I recently graduated from Göethe
          Universität, Frankfurt with a master’s degree in Linguistics. I have
          always been passionate about how things work. My curiosity on how the
          web and apps work led me into learning programming. My love for
          creativity inspired me to delve into UX Designs. Over the years, I
          have acquired some certifications in Responsive Web Design and UX
          Design Whilst working on some personal projects, I have collaborated
          with some people of like minds to build some projects. I am
          comfortable working with the listed technologies:
          <ul>
            <li>👉 HTML5</li>
            <li>👉 CSS</li>
            <li>👉 Javascript</li>
            <li>👉 React with Next.js</li>
            <li>👉 Styled Components</li>
            <li>👉 Tailwind CSS</li>
            <li>👉 Figma</li>
            <li>👉 Adobe XD</li>
          </ul>
          <p>
            Other than spending time on computer, I also enjoy playing console
            games like football and some adventures. I am a scrabble expert.
            When I don't go for a walk in the evening, I ride my bike or spend
            time time chilling with friends.
          </p>
        </div>
      </Details>
    </Homes>
  );
};

export default About;

const Homes = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  font: 20px sans-serif;
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ul {
    list-style-type: none;
  }
  @media screen and (min-width: 800px) {
    padding: 5px 2.5rem;
    font: 1.5rem sans-serif;
  }
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 10px;
  div {
    margin: 10px;
  }
  img {
    width: 350px;
    height: auto;
    border-radius: 8px;
  }
  @media screen and (min-width: 800px) {
    flex-direction: row;
    margin: 1.5rem;
    img {
      width: 600px;
      height: auto;
      border-radius: 8px;
    }
  }
`;
