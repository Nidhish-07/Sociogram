import "../styles/globals.css";
import "../utils/HexStyle.css";
import { ContractProvider } from "../context/contractContext";

function MyApp({ Component, pageProps }) {
  return (
    <ContractProvider>
      <Component {...pageProps} />
    </ContractProvider>
  );
}

export default MyApp;
