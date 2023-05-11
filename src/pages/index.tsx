import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Text, Spacer } from "@nextui-org/react";

const Home: NextPage = () => {
  return (
    <>
      <Text h2>The future of clown ideas 🤡</Text>
      <Spacer y={1} />
      <Text size="$lg">
        Sideshow allows you to share articles with your fellow clowns
      </Text>
    </>
  );
};

export default Home;
