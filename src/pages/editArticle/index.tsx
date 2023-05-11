import type { NextPage } from "next";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { Text, Textarea, Grid, Button } from "@nextui-org/react";
import { withPageAuth } from "@supabase/auth-helpers-nextjs";
import { useState, useEffect } from "react";

/**
 * Displays the page where the user can edit an article.
 * @returns {NextPage}
 */
const EditArticle: NextPage = () => {
  const supabaseClient = useSupabaseClient();
  const user = useUser();
  const router = useRouter();
  const { id } = router.query;

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
   * Gets the article data from the database and stores it in the state.
   * This populates the title and content fields for the user to view and edit.
   */
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
        setArticleData(data); // title, content
      }
    }
    if (typeof id !== "undefined") {
      getArticle();
    }
  }, [id]);

  /**
   * Updates the article in the database with the new title and content.
   * After the article is updated, the user is redirected to the article page.
   */
  const editArticle = async () => {
    try {
      const { data, error } = await supabaseClient
        .from("articles")
        .update([
          {
            title: articleData.title,
            content: articleData.content,
          },
        ])
        .eq("id", id);
      if (error) throw error;
      router.push("/article?id=" + id);
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
          initialValue={articleData.title}
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
          initialValue={articleData.content}
        />
      </Grid>
      <Grid xs={12}>
        <Text>Editing as {user?.email}</Text>
      </Grid>
      <Button onPress={editArticle}>Update Article</Button>
    </Grid.Container>
  );
};

export default EditArticle;

export const getServerSideProps = withPageAuth({ redirectTo: "/login" });
