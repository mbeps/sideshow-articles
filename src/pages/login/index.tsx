import type { NextPage } from "next";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";

/**
 * Displays the login page by default.
 * Links for sign up and forgot password are also available.
 * If there is a user logged in, redirect to the main feed.
 * This is fully handled by Supabase.
 * @returns {JSX.Element}: The login page
 */
const Login: NextPage = () => {
  const supabaseClient = useSupabaseClient();
  const user = useUser();
  const router = useRouter();

  // If there is a user logged in, redirect to the main feed
  if (user) {
    router.push("/mainFeed");
  }

  return (
    <Auth appearance={{ theme: ThemeSupa }} supabaseClient={supabaseClient} />
  );
};

export default Login;
