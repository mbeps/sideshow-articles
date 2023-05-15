import { Card, Text } from "@nextui-org/react";
import { NextPage } from "next";
import { useRouter } from "next/router";

interface Props {
  article: any;
}

/**
 * Article card component which displays the title, date and author of an article.
 * This is used in the main feed to display all the articles.
 * Clicking on the card will redirect the user to the article page.
 * @param props
 * @returns {JSX.Element} The JSX Code for the ArticleCard component.
 */
const ArticleCard: NextPage<Props> = (props) => {
  const router = useRouter();
  const { article } = props;

  function getDate() {
    let time = Date.parse(article.inserted_at);
    let date = new Date(time);

    return date.getDay() + "-" + date.getMonth() + "-" + date.getFullYear();
  }

  return (
    <Card
      isPressable
      css={{ mb: "$10" }}
      onPress={() => router.push("/article?id=" + article.id)}
    >
      <Card.Body>
        <Text h2>{article.title}</Text>
        <Text b>posted {getDate()}</Text>
        <Text b>By {article.user_email.toLowerCase()}</Text>
      </Card.Body>
    </Card>
  );
};

export default ArticleCard;
