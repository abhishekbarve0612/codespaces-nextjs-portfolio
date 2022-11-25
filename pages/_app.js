import Head from "next/head";
import Script from "next/script";
import '../global.css'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
      <script src="https://kit.fontawesome.com/06e7747196.js" crossorigin="anonymous" />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
