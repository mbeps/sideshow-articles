import { Card, Text } from "@nextui-org/react";
import { NextPage } from "next";
import { useRouter } from "next/router";

interface Props {
  article: any;
}

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
