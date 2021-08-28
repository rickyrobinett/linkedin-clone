import { defaultSEO } from "config/seo";
import DefaultLayout from "layouts/DefaultLayout";
import AuthProvider from "modules/auth/AuthProvider";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store, StoreContext } from "stores/store";
import GlobalStyle from "styles/GlobalStyle";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <StoreContext.Provider value={store}>
      <AuthProvider>
        <DefaultSeo {...defaultSEO} />
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
        <GlobalStyle />
        <ToastContainer position="bottom-right" hideProgressBar />
      </AuthProvider>
    </StoreContext.Provider>
  );
};

export default App;
