import "@/styles/globals.css";
import { StateProvider } from "./store/Store";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <SessionProvider session={session}>
      <StateProvider>{getLayout(<Component {...pageProps} />)}</StateProvider>
    </SessionProvider>
  );
}
