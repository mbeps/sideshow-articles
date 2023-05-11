import { Button, Spacer, Text, User } from "@nextui-org/react";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Article: NextPage = () => {
  const supabaseClient = useSupabaseClient();
  const user = useUser();
  const router = useRouter();
  const [article, setArticle] = useState<any>({});

  const { id } = router.query;

  useEffect(() => {
    async function getArticle() {
      const { data, error } = await supabaseClient
        .from("articles")
        .select("*")
        .filter("id", "eq", id)
        .single();
      if (error) {
        console.log(error);
      } else {
        setArticle(data);
      }
    }
    if (typeof id !== "undefined") {
      getArticle();
    }
  }, [id]);

  return (
    <>
      <Text h2>{article.title}</Text>
      <Spacer y={0.5} />
      <User name={article.user_email?.toLowerCase()} size="md" />
      <Spacer y={1} />
      <Text size="$lg">{article.content}</Text>
    </>
  );
};

export default Article;
