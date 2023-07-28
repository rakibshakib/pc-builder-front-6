import "@/styles/globals.css";
import { StateProvider } from "./store/Store";

export default function App({ Component, pageProps }) {
  return (
    <StateProvider>
      <Component {...pageProps} />
    </StateProvider>
  );
}
