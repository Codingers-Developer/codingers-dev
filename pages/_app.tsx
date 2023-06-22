import { AppProps } from "next/app";
import "../styles/globals.css";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PlausibleProvider from "next-plausible";

const NEXT_PUBLIC_WEBSITE_DOMAIN = process.env.NEXT_PUBLIC_WEBSITE_DOMAIN;
if (NEXT_PUBLIC_WEBSITE_DOMAIN == null) {
  throw new Error("NEXT_PUBLIC_WEBSITE_DOMAIN is not set");
}

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <PlausibleProvider domain={NEXT_PUBLIC_WEBSITE_DOMAIN}>
          <Component {...pageProps} />
        </PlausibleProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
