import React from "react";
import { useRouter } from "next/router";

export const ContractContext = React.createContext();

export const ContractProvider = (props) => {
  const [status, setStatus] = React.useState("");
  const [currentAccount, setCurrentAccount] = React.useState("");

  const router = useRouter();

  React.useEffect(() => {
    walletIsConnected();
  }, []);

  const walletIsConnected = async () => {
    if (!window.ethereum) {
      return setStatus("noMetamask");
    }

    try {
      const addressArr = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (addressArr.length > 0) {
        setStatus("connected");
        setCurrentAccount(addressArr[0]);
      } else {
        router.push("/");
        setStatus("notConnected");
      }
    } catch (error) {
      router.push("/");
      setStatus("error");
    }
  };

  const connectToWallet = async () => {
    if (!window.ethereum) {
      return setStatus("noMetamask");
    }
    try {
      setStatus("loading");
      const addressArr = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (addressArr.length > 0) {
        setCurrentAccount(addressArr[0]);
      } else {
        router.push("/");
        setStatus("notConnected");
      }
    } catch (error) {
      setStatus("error");
    }
  };
  return (
    <ContractContext.Provider
      value={{ status, currentAccount, connectToWallet }}
    >
      {props.children}
    </ContractContext.Provider>
  );
};
