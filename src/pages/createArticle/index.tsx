import type { NextPage } from "next";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { Text, Textarea, Grid, Button } from "@nextui-org/react";
import { withPageAuth } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";

/**
 * Displays the page where the user can create a new article.
 * @returns {NextPage}
 */
const CreateArticle: NextPage = () => {
  const supabaseClient = useSupabaseClient();
  const user = useUser();
  const router = useRouter();

  /**
   * The initial state of the article data.
   * Initially, the title and content are empty.
   */
  const initialState = {
    title: "",
    content: "",
  };

  const [articleData, setArticleData] = useState(initialState);

  /**
   * Updates the article data when the user types in the title or content.
   * @param e (any): change event
   */
  const handleChange = (e: any) => {
    setArticleData({ ...articleData, [e.target.name]: e.target.value });
  };

  /**
   * Creates a new article in the database.
   * The current user's email and id are also stored.
   * After the article is created, the user is redirected to the main feed.
   */
  const createArticle = async () => {
    try {
      const { data, error } = await supabaseClient
        .from("articles")
        .insert([
          {
            title: articleData.title,
            content: articleData.content,
            user_email: user?.email?.toLowerCase(),
            user_id: user?.id,
          },
        ])
        .single();
      if (error) throw error;
      setArticleData(initialState);
      router.push("/mainFeed");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <Grid.Container gap={1}>
      <Text h3>Title</Text>
      <Grid xs={12}>
        <Textarea
          name="title"
          aria-label="title"
          placeholder="Article Title"
          fullWidth={true}
          rows={1}
          size="xl"
          onChange={handleChange}
        />
      </Grid>
      <Text h3>Article Text</Text>
      <Grid xs={12}>
        <Textarea
          name="content"
          aria-label="content"
          placeholder="Article Text"
          fullWidth={true}
          rows={6}
          size="xl"
          onChange={handleChange}
        />
      </Grid>
      <Grid xs={12}>
        <Text>Posting as {user?.email}</Text>
      </Grid>
      <Button onPress={createArticle}>Create Article</Button>
    </Grid.Container>
  );
};

export default CreateArticle;

/**
 * Redirects the user to the login page if they are not logged in.
 */
export const getServerSideProps = withPageAuth({ redirectTo: "/login" });
