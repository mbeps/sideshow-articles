import type { AppProps } from "next/app";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { Box } from "../components/Box";
import Navbar from "../components/NavbarComponent";

/**
 * Override the default behavior of the app.
 * Adds a navbar and a box around the content for every page.
 * Adds integration with Supabase.
 * Adds integration with NextUI.
 * @param {AppProps} param0: The props for the app such as the Component and pageProps
 * @returns {JSX.Element} The app with the overrides
 */
function MyApp({ Component, pageProps }: AppProps) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      <NextUIProvider>
        <Navbar />
        <Box
          css={{
            px: "$12",
            py: "$15",
            mt: "$12",
            "@xsMax": { px: "$10" },
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <Component {...pageProps} />
        </Box>
      </NextUIProvider>
    </SessionContextProvider>
  );
}

export default MyApp;
