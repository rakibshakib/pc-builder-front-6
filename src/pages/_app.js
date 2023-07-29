import "@/styles/globals.css";
import { StateProvider } from "./store/Store";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <SessionProvider session={session}>
      <StateProvider>{getLayout(<Component {...pageProps} />)}</StateProvider>
      <ToastContainer
        position="top-center"
        newestOnTop={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        autoClose={1500}
      />
    </SessionProvider>
  );
}
