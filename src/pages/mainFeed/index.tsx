import { Text } from "@nextui-org/react";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ArticleCard from "../../components/ArticleCard";

const MainFeed: NextPage = () => {
  const supabaseClient = useSupabaseClient();
  const user = useUser();
  const router = useRouter();
  const [articles, setArticles] = useState<string[]>([]);

  useEffect(() => {
    getArticles();
  }, []);

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
