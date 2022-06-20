import { Container, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Container maxWidth="container.xl">
      <Flex h="100vh">Hello world</Flex>
    </Container>
  );
};

export default Home;
