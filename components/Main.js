import React from "react";
import Link from "next/link";
import styled, { keyframes } from "styled-components";
import { Container } from "@chakra-ui/react";
import { HomeButton } from "./HomeButton";
import { LogoComponent } from "./LogoComponent";
import { Socials } from "./Socials";
import { SiGithub } from "@react-icons/all-files/si/SiGithub";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }

  a {
    font-weight: 700;
  }
`;

const Contact = styled.div`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  font-size: larger;
  z-index: 3;
`;

const Blog = styled.div`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  text-decoration: none;
  transform: rotate(90deg) translate(-50%, -50%);
  font-size: larger;
  z-index: 3;
`;

const Projects = styled.div`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  text-decoration: none;
  transform: translate(-50%, -50%) rotate(-90deg);
  font-size: larger;
  z-index: 3;
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const About = styled.div`
  color: ${(props) => props.theme.text};
  z-index: 3;
`;

const Skills = styled.div`
  color: ${(props) => props.theme.text};
  z-index: 3;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  background-color: transparent;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > :first-child {
    animation: ${rotate} infinite 60s linear;
  }
  & > :last-child {
    padding-top: 1rem;
  }
`;

const Main = () => {
  return (
    <MainContainer>
      <Container className="p-8">
        <HomeButton />
        <LogoComponent />
        <Socials />
        <Center>
          <SiGithub fontSize={300} />
          <span>LOGO</span>
        </Center>
        <Contact>
          <a href={"mailto:devmizu@gmail.com"}>
            <h3>Contact me?</h3>
          </a>
        </Contact>
        <Blog>
          <Link href={"/Blog"}>
            <a>Blog</a>
          </Link>
        </Blog>
        <Projects>
          <Link href={"/Projects"} passHref>
            <a>Projects</a>
          </Link>
        </Projects>
        <BottomBar>
          <About>
            <Link href={"/About"} passHref>
              <a>About</a>
            </Link>
          </About>
          <Skills>
            <Link href={"/Skills"} passHref>
              <a>Skills</a>
            </Link>
          </Skills>
        </BottomBar>
      </Container>
    </MainContainer>
  );
};

export default Main;
