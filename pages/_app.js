import Layout from "../components/layout/layout";
import Head from "next/head";
import "../styles/globals.css";
// import LoginScreen from "./index";

function MyApp({ Component, pageProps }) {
  // Component === <Layout />;
  return (
    <Layout>
      <Head>
        <title>Nugi Report</title>
      </Head>
      <Component {...pageProps} />
      {/* <LoginScreen {...pageProps} /> */}
    </Layout>
  );
}

export default MyApp;
