import store from "@/appStore/store";
import Loader from "@/components/loader";
import "@/styles/globals.scss";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Loader />
      <Component {...pageProps} />
    </Provider>
  );
}
