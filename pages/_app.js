import "../styles/main.scss";
import "../styles/general.scss";
import { Provider } from "react-redux";
import store from "../redux/store/store";
import { SessionProvider } from "next-auth/react";
import { SnackbarProvider } from "notistack";  
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <Component {...pageProps} />
        </SnackbarProvider>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
