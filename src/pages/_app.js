import "@/styles/globals.css";
import { ScoreProvider } from "@/context/ScoreContext";

export default function App({ Component, pageProps }) {
  return (
    <ScoreProvider>
      <Component {...pageProps} />
    </ScoreProvider>
  );
}
