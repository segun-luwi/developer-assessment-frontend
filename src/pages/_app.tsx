import "@/styles/globals.css";
import NextProgress from "next-progress";
import { wrapper } from "@/store";
import type { AppContext, AppProps } from "next/app";
import App from "next/app";
import { Provider } from "react-redux";
import Head from "next/head";
import { ToastContainer } from "react-toastify";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, ...rest }: AppPropsWithLayout) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <>
      <NextProgress color="#FFC727" height={3} />
      <Head>
        <meta name="description" content="dev assessment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <ToastContainer />
        {Component.getLayout ? (
          Component.getLayout(<Component {...pageProps} />)
        ) : (
          <Component {...pageProps} />
        )}
      </Provider>
    </>
  );
};

MyApp.getInitialProps = wrapper.getInitialAppProps(() => async (context: AppContext) => {
  const ctx = await App.getInitialProps(context);
  return { ...ctx };
});

export default MyApp;
