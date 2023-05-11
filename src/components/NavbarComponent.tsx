import { Navbar, Button, Text } from "@nextui-org/react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import Link from "next/link";

/**
 * Navbar component which has a link to the main feed, a link to create an article and a link to login or sign out.
 * If the user is logged in, it will display their email and a sign out button.
 * If the user is not logged in, it will display a login button.
 *
 * @returns {JSX.Element} The JSX Code for the Navbar component.
 */
const NavbarComponent = () => {
  const supabaseClient = useSupabaseClient();
  const user = useUser();
  const router = useRouter();

  /**
   * Signs out the user and redirects them to the home page.
   */
  function signOutUser() {
    supabaseClient.auth.signOut();
    router.push("/");
  }

  return (
    <Navbar isBordered isCompact>
      <Navbar.Brand as={Link} href="/">
        Sideshow 🤡
      </Navbar.Brand>
      <Navbar.Content hideIn="xs" variant="highlight-rounded">
        <Navbar.Link href="/mainFeed">Main Feed</Navbar.Link>
        <Navbar.Link href="/createArticle">Create Article</Navbar.Link>
      </Navbar.Content>

      <Navbar.Content>
        {!user /*User doesn't exist*/ ? (
          <>
            <Navbar.Link href="/login">
              <Button auto flat>
                Login
              </Button>
            </Navbar.Link>
          </>
        ) : (
          /* User does exist */
          <>
            <Navbar.Item>
              <Text>Hey, {user?.email}</Text>
            </Navbar.Item>
            <Navbar.Item>
              <Button auto flat onPress={() => signOutUser()}>
                Sign Out
              </Button>
            </Navbar.Item>
          </>
        )}
      </Navbar.Content>
    </Navbar>
  );
};

export default NavbarComponent;
