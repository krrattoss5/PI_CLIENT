import { Provider } from "react-redux";
import { store } from "./store.js";

export default function Providers({ Children }) {
  return <Provider store={store}>{Children}</Provider>;
}
