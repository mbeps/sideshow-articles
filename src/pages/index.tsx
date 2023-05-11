import { Spacer, Text } from "@nextui-org/react";
import type { NextPage } from "next";

/**
 * Displays welcome message on the home page.
 * @returns {JSX.Element}: The home page
 */
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
