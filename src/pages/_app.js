import "@/styles/globals.css";
import { StateProvider } from "./store/Store";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <StateProvider>{getLayout(<Component {...pageProps} />)}</StateProvider>
  );
}
