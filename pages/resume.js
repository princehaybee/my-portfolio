import styled from "@emotion/styled";
import Head from "next/head";
import Link from "next/link";
import { SiTailwindcss } from "react-icons/si";
import {
  FaMobileAlt,
  FaEnvelope,
  FaWeebly,
  FaHtml5,
  FaCss3,
  FaJs,
} from "react-icons/fa";
import { VscLocation } from "react-icons/vsc";
import {
  IoBook,
  IoFootball,
  IoGameController,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoReact,
  IoLogoTwitter,
  IoMusicalNote,
  IoTennisball,
} from "react-icons/io5";

const Resume = () => {
  return (
    <Homes>
      <h1>Resume Page</h1>

      <section>
        <div>
          {/* <div>
            <img src="/haybee.jpeg" alt="profile_pic" />
          </div> */}

          <div>
            <div>
              <div>
                <p>Abiola Adewale</p>
                <p>Frontend developer</p>
              </div>
              <ul>
                <li>
                  <div></div>
                  <div>
                    Russelsheim.
                    <br />
                    Hessen, Germany
                  </div>
                </li>

                <li>
                  <div>
                    <FaMobileAlt />
                  </div>
                  <div>(+49) 017647147812</div>
                </li>

                <li>
                  <div>
                    <FaEnvelope />
                  </div>
                  <div>princehaybee@gmail.com</div>
                </li>

                <li>
                  <div>
                    <FaWeebly />
                  </div>
                  <div>www.aremuadewale.com</div>
                </li>
              </ul>
            </div>

            <div>
              <div>
                <p>skills</p>
              </div>
              <ul>
                <li>
                  <div>
                    <FaHtml5 />
                  </div>
                  <div>HTML</div>
                </li>

                <li>
                  <div>
                    <FaCss3 />
                  </div>
                  <div>CSS</div>
                </li>

                <li>
                  <div>
                    <SiTailwindcss />
                  </div>
                  <div>Tailwind</div>
                </li>

                <li>
                  <div>
                    <FaJs />
                  </div>
                  <div>JS</div>
                </li>

                <li>
                  <div>
                    <IoLogoReact />
                  </div>
                  <div>React</div>
                </li>
              </ul>
            </div>
            <div>
              <div>
                <p>Social</p>
              </div>
              <ul>
                <li>
                  <a
                    href="https://twitter.com/bornriches"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div>
                      <IoLogoTwitter />
                    </div>
                    <div>
                      <p>twitter</p>
                    </div>
                  </a>
                </li>

                <li>
                  <a
                    href="https://github.com/princehaybee"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div>
                      <IoLogoGithub />
                    </div>
                    <div>
                      <p>github</p>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="www.linkedin.com/in/waleabiola" target="_blank">
                    <div>
                      <IoLogoLinkedin />
                    </div>
                    <div>
                      <p>linkedin</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div>
              <p>About</p>
            </div>
            <p>
              Strong organisational and analytical mind helps me excel with
              different task I have been trusted with. I have always maintained
              good relationship with colleagues and clients. My versatility is
              an assest which has always been propelling me to success and even
              take up new challenges and still excel.{" "}
            </p>
          </div>
          <div>
            <div>
              <p>Experience and Training</p>
            </div>
            <ul>
              <li>
                <div>
                  <h3 className="half text-xl font-semibold ">
                    The Javascript Full-Stack Bootcamp
                  </h3>
                  <p></p>
                  <p>2021</p>
                </div>
              </li>

              <li>
                <div>
                  <h3>Free Code Camp</h3>
                  <p>Responsive Web Design Certification</p>
                  <p>2020 - 2021</p>
                </div>
              </li>

              <li>
                <div>
                  <h3>Google (Coursera)</h3>
                  <p>Technical Support Fundamentals</p>
                  <p>2020</p>
                </div>
              </li>

              <li>
                <div>
                  <h3>LinkedIn</h3>
                  <p>HTML Essential Training</p>
                  <p>JavaScript Essential Training</p>
                  <p>Programming Foundations: Fundamentals</p>
                  <p>2020</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <div>
              <p>Education</p>
            </div>
            <ul>
              <li>
                <div>
                  <h3>Goethe University of Frankfurt</h3>
                  <p>M.A Linguistics</p>
                  <p> 2017 – 2021</p>
                </div>
              </li>

              <li>
                <div>
                  <h3>University of Ilorin</h3>
                  <p>B.A Linguistics</p>
                  <p>2000 - 2003</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <div>
              <p>Hobby</p>
            </div>
            <ul>
              <li>
                <IoBook />
              </li>

              <li>
                <IoGameController />
              </li>

              <li>
                <IoMusicalNote />
              </li>

              <li>
                <IoFootball />
              </li>

              <li>
                <IoTennisball />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Homes>
  );
};

export default Resume;

const Homes = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  padding-top: 0px;
  margin-top: 0px;
`;
