import { Text } from "@nextui-org/react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import ArticleCard from "../../components/ArticleCard";

/**
 * Displays the main feed of articles.
 * @returns {JSX.Element}
 */
const MainFeed: NextPage = () => {
  const supabaseClient = useSupabaseClient();
  const [articles, setArticles] = useState<string[]>([]);

  useEffect(() => {
    getArticles();
  }, []);

  /**
   * Retrieves the articles from the database and sets the articles state.
   */
  const getArticles = async () => {
    try {
      const { data, error } = await supabaseClient
        .from("articles")
        .select("*")
        .limit(10);
      if (data != null) {
        setArticles(data);
      }
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <>
      <Text h2>Main Feed</Text>
      <Text size="$lg" css={{ my: "$8" }}>
        Check out articles from users here
      </Text>
      {/* Article Card */}
      {articles.map((article) => (
        <ArticleCard key={article} article={article} />
      ))}
    </>
  );
};

export default MainFeed;
