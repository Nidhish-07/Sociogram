import SideBar from "../components/SideBar";
import Image from "next/image";
import Feed from "../components/Feed";
import RightSideBar from "../components/RightSideBar";
import React from "react";
import { ContractContext } from "../context/contractContext.js";
import ErrorImg from "../assets/images/error.jpg";
import EthImg from "../assets/images/ethreum.jpg";

const Home = () => {
  const { connectToWallet, status } = React.useContext(ContractContext);

  const app = (stat = status) => {
    switch (stat) {
      case "connected":
        return <LoggedInUser />;

      case "notConnected":
        return <NoUserFound />;

      case "noMetamask":
        return <NoMetamaskFound />;
      case "error":
        return <ErrorShow />;

      default:
        return <LoadingHandler />;
    }
  };
  const LoggedInUser = () => {
    return (
      <div className="max-w-[1400px] w-2/3 flex justify-between">
        <SideBar></SideBar>
        <Feed></Feed>
        <RightSideBar></RightSideBar>
      </div>
    );
  };

  const NoMetamaskFound = () => {
    return (
      <div className="w-full h-full  flex flex-col justify-center items-center pb-48">
        <Image src={EthImg} height={200} width={200} />
        <div>
          <a
            href="https://metamask.io/download.html"
            target={"_blank"}
            rel="noreferrer"
          >
            You must install metamask to continue.
          </a>
        </div>
      </div>
    );
  };

  const NoUserFound = () => {
    return (
      <div className="w-full h-full  flex flex-col justify-center items-center pb-48">
        <Image src={EthImg} height={200} width={200} />
        <div
          onClick={() => connectToWallet()}
          className="text-3xl text-black bg-white font-bold -mb-12  mt-12 px-6 py-4 rounded-full cursor-pointer hover:bg-[#d7dbdc]"
        >
          Connect wallet.
        </div>
        <div className="text-3xl font-bold text-center mt-24">
          Connect to Metamask.
        </div>
      </div>
    );
  };

  const ErrorShow = () => {
    return (
      <div className="w-full h-full  flex flex-col justify-center items-center pb-48">
        <Image height={250} width={250} src={ErrorImg} />
        <div className="text-3xl font-bold text-center mt-24">
          Error Occurred. Please try again later or use another metamask
          account.
        </div>
      </div>
    );
  };

  const LoadingHandler = () => {
    return (
      <div className="w-full h-full  flex flex-col justify-center items-center pb-48">
        <div className="text-3xl font-bold text-center mt-24">Loading...</div>
      </div>
    );
  };

  return (
    <div className="flex justify-center h-screen w-screen select-none bg-white text-[#898989]">
      {app(status)}
    </div>
  );
};

export default Home;
