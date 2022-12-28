import SideBar from "../components/SideBar"
import Feed from "../components/Feed"
import RightSideBar from "../components/RightSideBar"

const Home = () => {
  return (
    <div className="flex justify-center h-screen w-screen select-none bg-white text-[#898989]">
      <div className="max-w-[1400px] w-2/3 flex justify-between">
        <SideBar></SideBar>
        <Feed></Feed>
        <RightSideBar></RightSideBar>
      </div>
    </div>
  );
};

export default Home;
