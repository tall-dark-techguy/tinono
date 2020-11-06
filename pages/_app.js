import "../public/scss/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NextNprogress from "nextjs-progressbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextNprogress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height="3"
      />
      <Component {...pageProps} />
    </>
  );
}
