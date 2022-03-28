import "~/styles/globals.css";
import "~/styles/theme.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";

const scrollToTop = () => {
  if (typeof window !== "undefined") [window.scrollTo({ top: 0 })];
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence
      exitBeforeEnter
      initial={true}
      onExitComplete={scrollToTop}
    >
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;
